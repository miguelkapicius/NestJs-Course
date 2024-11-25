import { IsNumber, IsString } from 'class-validator';

export class createPropertyDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  area: number;
}
