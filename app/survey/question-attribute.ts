import { QuestionValue } from './question-value';

export interface QuestionAttribute {
    Key: string;
    Description: string;
    Values: QuestionValue[];
}