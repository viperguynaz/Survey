import { QuestionChoice } from './question-choice';
import { QuestionType } from './question-type';
import { QuestionVerbiage } from './question-verbiage'

export interface Question {
    Id: number;
    Name: string;
    IsRequired: boolean;
    EffectiveOn: Date;
    ExpiredOn: Date;
    SortOrder: number;
    PageNumber: number;
    Choices: QuestionChoice[];
    Type: QuestionType;
    SubQuestions: number[];
    Verbiage: QuestionVerbiage;
}
