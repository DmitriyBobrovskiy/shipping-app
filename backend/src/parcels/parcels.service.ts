import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Parcel } from './parcel.entity';

@Injectable()
export class ParcelsService {
  constructor(
    @InjectRepository(Parcel)
    private readonly parcelRepository: Repository<Parcel>,
  ) {}

  async create(parcel: Parcel): Promise<Parcel> {
    return this.parcelRepository.save(parcel);
  }

  // TODO: there might be SQL injections, should be checked
  async getAll(country?: string, description?: string): Promise<Parcel[]> {
    let query = this.parcelRepository
      .createQueryBuilder('parcel')
      .where('1 = 1');

    if (country) {
      query = query.andWhere('LOWER(parcel.country) = LOWER(:country)', {
        country: `${country}`,
      });
    }
    if (description) {
      query = query.andWhere(
        'LOWER(parcel.description) LIKE LOWER(:description)',
        {
          description: `%${description}%`,
        },
      );
    }
    return query.getMany();
  }

  async getBySku(sku?: string): Promise<Parcel> {
    let query = this.parcelRepository.createQueryBuilder('parcel');
    query = query.where('LOWER(parcel.sku) = LOWER(:sku)', {
      sku: `${sku}`,
    });
    const result = await query.getMany();
    if (result.length > 1) {
      throw new Error(
        'More than one parcel was found, that should not have happened',
      );
    }
    return result[0];
  }
}
