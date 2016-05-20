import { Component, Input } from '@angular/core';
import { Survey } from './survey';
@Component({
  selector: 'app-survey-detail',
  templateUrl: 'app/survey/survey-detail.component.html'
})
export class SurveyDetailComponent {
  @Input() 
  survey: Survey;
}