import { Controller, Get, Post, Put, Delete, Param, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Vehicle } from '../schemas/vehicle.schema';
import { CreateVehicleDto } from '../dtos/create-vehicle.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}


  @Get()
  @UseGuards(AuthGuard('jwt'))
  getAll(): string {
    return 'This action returns all vehicles';
  }
//   @Get()
//   getAll(): Promise<Vehicle[]> {
//     return this.vehicleService.getAll();
//   }
 

  @Get(':id')
  getById(@Param('id') id: string): Promise<Vehicle> {
    return this.vehicleService.getById(id);
  }

  @Post()
  create(@Body(new ValidationPipe()) createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleService.create(createVehicleDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() vehicle: Vehicle): Promise<Vehicle> {
    return this.vehicleService.update(id, vehicle);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Vehicle> {
    return this.vehicleService.delete(id);
  }

  @Put(':id/assign-driver/:driverId')
  assignDriver(@Param('id') id: string, @Param('driverId') driverId: string): Promise<Vehicle> {
    return this.vehicleService.assignDriver(id, driverId);
  }

  @Put(':id/update-status/:status')
  updateStatus(@Param('id') id: string, @Param('status') status: 'active' | 'maintenance' | 'retired'): Promise<Vehicle> {
    return this.vehicleService.updateStatus(id, status);
  }

  @Put(':id/add-maintenance-task/:taskName')
  addMaintenanceTask(@Param('id') id: string, @Param('taskName') taskName: string): Promise<Vehicle> {
    return this.vehicleService.addMaintenanceTask(id, taskName);
  }

  
}
