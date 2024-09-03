import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ScreenerService } from '../services/screener.service';
import { ScreenerBl } from '../business-layer/screener.bl';

@Controller('screener')
export class ScreenerController {
  constructor(
    private readonly screenerService: ScreenerService,
    private readonly screenerBl: ScreenerBl,
  ) {}

  @Get()
  async getScreener() {
    return this.screenerService.getScreener();
  }

  @Post('submit')
  async submitAnswers(@Body() answers: any) {
    return this.screenerBl.processScreenerResponse(answers);
  }
}
