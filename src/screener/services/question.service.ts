import { Injectable } from '@nestjs/common';
import { QuestionRespository } from '../repositories/question.repository';
import { Question } from '../schemas/question.schema';

@Injectable()
export class QuestionService {
  constructor(private readonly _questionRepository: QuestionRespository) {}
  public async getQuestions(): Promise<Question[]> {
    const questions = await this._questionRepository.retrieve();

    return questions;
  }
}
