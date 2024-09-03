import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DomainDocument = Domain & Document;

@Schema()
export class Domain {
  @Prop({ required: true })
  domain: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  benchmarkScore: number;

  @Prop({ required: true })
  level2Assesment: string;
}

export const DomainSchema = SchemaFactory.createForClass(Domain);
