import { Injectable, OnInit } from '@angular/core';
import { SURVEYS } from './mock-surveys'

@Injectable()
export class SurveyService {
    getSurveys() {
        return Promise.resolve(SURVEYS);
    }
}