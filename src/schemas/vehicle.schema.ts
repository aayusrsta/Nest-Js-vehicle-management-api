import * as mongoose from 'mongoose';

export const VehicleSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  registrationNumber: String,
  currentStatus: {
    type: String,
    enum: ['active', 'maintenance', 'retired'],
    default: 'active',
  },
  location: String,
  assignedDriver: String,
  maintenanceTasks: [String], 
});

export interface Vehicle {
  make: string;
  model: string;
  year: number;
  registrationNumber: string;
  currentStatus: 'active' | 'maintenance' | 'retired';
  location: string;
  assignedDriver?: string;
  maintenanceTasks?: string[];
}

export const VehicleModel = mongoose.model('Vehicle', VehicleSchema);
