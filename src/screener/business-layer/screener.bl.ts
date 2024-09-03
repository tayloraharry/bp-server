import { Injectable } from '@nestjs/common';
import { ScreenerAnswerDto } from '../dto/create-screener-answer.dto';
import { Domain } from '../schemas/domain.schema';
import { DomainService } from '../services/domain.service';
import { QuestionService } from '../services/question.service';

@Injectable()
export class ScreenerBl {
  constructor(
    private readonly _domainService: DomainService,
    private readonly _questionService: QuestionService,
  ) {}

  public async processScreenerResponse(
    answers: ScreenerAnswerDto[],
  ): Promise<Domain[]> {
    const questions = await this._questionService.getQuestions();
    const domains = await this._domainService.getDomains();

    let results: Record<string, number> = {};
    answers.forEach((answer) => {
      const domain = questions.find(
        (q) => q.question_id === answer.question_id,
      );
      if (results[domain.domain]) {
        results[domain.domain] += answer.value;
      } else {
        results[domain.domain] = answer.value;
      }
    });

    return domains.filter((d) => results[d.domain] >= d.benchmarkScore);
  }
}
