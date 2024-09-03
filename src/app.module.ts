import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Domain } from 'domain';
import { ScreenerBl } from './screener/business-layer/screener.bl';
import { ScreenerController } from './screener/controllers/screener.controller';
import { DomainRepository } from './screener/repositories/domain.repository';
import { QuestionRespository } from './screener/repositories/question.repository';
import { ScreenerRepository } from './screener/repositories/screener.repository';
import { DomainSchema } from './screener/schemas/domain.schema';
import { Question, QuestionSchema } from './screener/schemas/question.schema';
import { Screener, ScreenerSchema } from './screener/schemas/screener.schema';
import { DomainService } from './screener/services/domain.service';
import { QuestionService } from './screener/services/question.service';
import { ScreenerService } from './screener/services/screener.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_DB_URI,
    ),
    MongooseModule.forFeature([
      {
        name: Screener.name,
        schema: ScreenerSchema,
        collection: 'screener.screeners',
      },
      {
        name: Question.name,
        schema: QuestionSchema,
        collection: 'question.questions',
      },
      {
        name: Domain.name,
        schema: DomainSchema,
        collection: 'domain.domains',
      },
    ]),
  ],
  controllers: [ScreenerController],
  providers: [
    ScreenerService,
    DomainService,
    QuestionService,
    ScreenerRepository,
    ScreenerBl,
    QuestionRespository,
    DomainRepository,
  ],
})
export class AppModule {}
