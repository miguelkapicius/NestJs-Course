import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class PaginationDto {
  @IsString()
  @IsOptional()
  skip: number;

  @IsString()
  @IsOptional()
  limit: number;
}
