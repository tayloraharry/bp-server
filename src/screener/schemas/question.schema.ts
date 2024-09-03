import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop({ required: true })
  question_id: string;

  @Prop({ required: true })
  domain: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
