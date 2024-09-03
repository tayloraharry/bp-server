import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Domain, DomainDocument } from '../schemas/domain.schema';

@Injectable()
export class DomainRepository {
  constructor(
    @InjectModel(Domain.name) private _domain: Model<DomainDocument>,
  ) {}

  
  public async retrieve(): Promise<Domain[]> {
    const domains = await this._domain.find();

    return domains;
  }
}
