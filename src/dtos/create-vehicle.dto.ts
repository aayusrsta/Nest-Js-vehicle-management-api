import { IsString, IsNumber, IsEnum } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  year: number;

  @IsString()
  registrationNumber: string;

  @IsEnum(['active', 'maintenance', 'retired'])
  currentStatus: 'active' | 'maintenance' | 'retired';

  @IsString()
  location: string;
}
