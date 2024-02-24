// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleModule } from './vehicle/vehicle.module'; 
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://aayusrsta:Test%40123@cluster0.tnoustf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), 
    VehicleModule, 
    PassportModule,
    JwtModule.register({
      secret: 'aayu-secret-key',  
      signOptions: { expiresIn: '1h' }, 
    }),
    AuthModule, 
  ],
  controllers: [], 
    providers: [AuthService, JwtStrategy],
})
export class AppModule {}
