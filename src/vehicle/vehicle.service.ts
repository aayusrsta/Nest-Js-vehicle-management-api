import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle, VehicleSchema } from '../schemas/vehicle.schema';
import { CreateVehicleDto } from '../dtos/create-vehicle.dto';


@Injectable()
export class VehicleService {
  constructor(@InjectModel('Vehicle') private readonly vehicleModel: Model<Vehicle>) {}

  async getAll(): Promise<Vehicle[]> {
    return this.vehicleModel.find().exec();
  }

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const createdVehicle = new this.vehicleModel(createVehicleDto);
    return createdVehicle.save();
  }

  async getById(id: string): Promise<Vehicle> {
    return this.vehicleModel.findById(id).exec();
  }

//   async create(vehicle: Vehicle): Promise<Vehicle> {
//     const createdVehicle = new this.vehicleModel(vehicle);
//     return createdVehicle.save();
//   }

  async update(id: string, vehicle: Vehicle): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndUpdate(id, vehicle, { new: true }).exec();
  }

  async delete(id: string): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndDelete(id).exec();
  }

  async assignDriver(id: string, driverId: string): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndUpdate(id, { assignedDriver: driverId }, { new: true }).exec();
  }

  async updateStatus(id: string, status: 'active' | 'maintenance' | 'retired'): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndUpdate(id, { currentStatus: status }, { new: true }).exec();
  }

  async addMaintenanceTask(id: string, taskName: string): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndUpdate(
      id,
      { $push: { maintenanceTasks: taskName } },
      { new: true }
    ).exec();
  }
}
