import { Injectable } from '@nestjs/common';

import { ScreenerRepository } from '../repositories/screener.repository';
import { Screener } from '../schemas/screener.schema';

@Injectable()
export class ScreenerService {
  constructor(private readonly _screenerRepository: ScreenerRepository) {}
  async getScreener(): Promise<Screener> {
    const screener = await this._screenerRepository.get();

    return screener;
  }

  async submitSreener() {
    return { message: 'Answers processed successfully' };
  }

  async saveAnswers(createScreenerAnswerDto: any) {
    return { message: 'Answers processed successfully' };
  }
}
