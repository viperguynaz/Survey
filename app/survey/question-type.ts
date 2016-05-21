import { QuestionAttribute } from './question-attribute'

export interface QuestionType {
    Key: string;
    Description: string;
    Attributes: QuestionAttribute[];
}