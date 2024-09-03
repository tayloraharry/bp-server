export class ScreenerAnswerDto {
  readonly value: number;
  readonly question_id: string;
}

export class ScreenerAnswersDto {
  readonly answers: ScreenerAnswerDto[];
}