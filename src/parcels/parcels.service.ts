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
  async getAll(
    country?: string,
    description?: string,
    sku?: string,
  ): Promise<Parcel[]> {
    let query = this.parcelRepository.createQueryBuilder('parcel');
    if (country) {
      query = query.where('LOWER(parcel.country) = LOWER(:country)', {
        country: `${country}`,
      });
    }
    if (description) {
      query = query.where(
        'LOWER(parcel.description) LIKE LOWER(:description)',
        {
          description: `%${description}%`,
        },
      );
    }
    if (sku) {
      query = query.where('LOWER(parcel.sku) = LOWER(:sku)', {
        sku: `${sku}`,
      });
    }
    return query.getMany();
  }
}
