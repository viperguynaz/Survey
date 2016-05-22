import 'rxjs/Rx'; 
import { Observable } from 'rxjs/Observable';
import { Component, Input, OnChanges } from '@angular/core';
import { SurveyModel, QuestionModel, QuestionClient } from './survey-engine.service'

@Component({
    providers: [QuestionClient],
  selector: 'app-survey-detail',
  templateUrl: 'app/survey/survey-detail.component.html'
})
export class SurveyDetailComponent {
  @Input() 
  survey: SurveyModel;
  questions: Observable<QuestionModel[]>;
  constructor(private questionService: QuestionClient) { }
  
  ngOnChanges() {
    if (this.survey)
      this.questions = this.questionService.all(this.survey.Key);
  }
}