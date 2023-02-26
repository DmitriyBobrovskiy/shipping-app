import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  BadRequestException,
  Param,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { DatabaseError } from 'pg-protocol';
import { Parcel } from './parcel.entity';
import { ParcelsService } from './parcels.service';

@Controller('parcels')
export class ParcelsController {
  constructor(private readonly parcelsService: ParcelsService) {}

  @Post()
  async createParcel(@Body() parcelData: Parcel): Promise<Parcel> {
    try {
      return await this.parcelsService.create(parcelData);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        const err = error.driverError as DatabaseError;
        throw new BadRequestException(err.detail);
      }
      throw error;
    }
  }

  // TODO: pagination should be used
  @Get()
  async getParcels(
    @Query('country') country: string,
    @Query('description') description: string,
  ): Promise<Parcel[]> {
    return await this.parcelsService.getAll(country, description);
  }

  @Get(':sku')
  async getBySku(@Param() params): Promise<Parcel> {
    return await this.parcelsService.getBySku(params.sku);
  }
}
