import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Screener, ScreenerDocument } from '../schemas/screener.schema';

@Injectable()
export class ScreenerRepository {
  constructor(
    @InjectModel(Screener.name) private _screener: Model<ScreenerDocument>,
  ) {}

  /**
   * Gets all events for an organization
   */
  public async get(): Promise<Screener> {
    const screener = await this._screener.findOne();

    return new Screener(screener);
  }
}
