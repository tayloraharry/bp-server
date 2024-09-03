import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from '../schemas/question.schema';

@Injectable()
export class QuestionRespository {
  constructor(
    @InjectModel(Question.name) private _question: Model<QuestionDocument>,
  ) {}

  public async retrieve(): Promise<Question[]> {
    const questions = await this._question.find();

    return questions;
  }
}
