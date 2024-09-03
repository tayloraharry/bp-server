import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type ScreenerDocument = Screener & Document;

@Schema()
export class ScreenerAnswer {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  value: number;
}

@Schema()
export class ScreenerQuestion {
  @Prop({ required: true })
  question_id: string;

  @Prop({ required: true })
  title: string;
}

@Schema()
export class ScreenerSection {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  title: string;

  @Prop({ type: [ScreenerAnswer], required: true })
  answers: ScreenerAnswer[];

  @Prop({ type: [ScreenerQuestion], required: true })
  questions: ScreenerQuestion[];
}

@Schema({
  timestamps: true,
})
export class Screener {
  public readonly _id: Types.ObjectId;

  @Prop({ required: true })
  public readonly name: string;

  @Prop({ required: true })
  public readonly disorder: string;

  @Prop({ type: Types.Array<ScreenerSection> })
  public readonly content: {
    sections: ScreenerSection[];
    display_name: string;
  };

  @Prop({ required: true })
  public readonly full_name: string;

  constructor({ _id, name, disorder, content, full_name }: ScreenerDocument) {
    this._id = _id;
    this.name = name;
    this.disorder = disorder;
    this.content = content;
    this.full_name = full_name;
  }
}

export const ScreenerSchema = SchemaFactory.createForClass(Screener);
