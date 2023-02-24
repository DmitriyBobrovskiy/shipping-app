import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'reflect-metadata';
import { Parcel } from './parcels/parcel.entity';
import { ParcelsModule } from './parcels/parcels.module';

@Module({
  imports: [
    // TODO: those values should be read from environment variables
    TypeOrmModule.forRoot({
      type: 'postgres',
      // if running locally, then host should be localhost
      host: 'database',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'postgres',
      entities: [Parcel],
      synchronize: true,
    }),
    ParcelsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
