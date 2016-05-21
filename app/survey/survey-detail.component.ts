import { Component, Input, OnChanges } from '@angular/core';
import { Survey } from './survey';
@Component({
  selector: 'app-survey-detail',
  templateUrl: 'app/survey/survey-detail.component.html'
})
export class SurveyDetailComponent {
  @Input() 
  survey: Survey;
  _text: string = 'no change';
  
  ngOnChanges() {
    if (this.survey)
      this._text = this.survey.Key;
  }
}