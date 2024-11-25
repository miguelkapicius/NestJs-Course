import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { createPropertyDto } from './dto/createProperty.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    return this.propertyService.findOne();
  }

  @Post()
  @HttpCode(202)
  create(@Body() body: createPropertyDto) {
    return this.propertyService.create();
  }

  @Patch(':id')
  update(
    @Param(
      'id',
      /* Passa pra Inteiro*/
      ParseIntPipe,
    )
    id,
    @Body() body: createPropertyDto,
    @RequestHeader(
      new ValidationPipe({
        validateCustomDecorators: true,
      }),
    )
    header: HeadersDto,
  ) {
    return this.propertyService.update();
  }
}
