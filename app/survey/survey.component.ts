import 'rxjs/Rx'; 
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { SurveyModel, SurveyClient } from './survey-engine.service'
import { SurveyDetailComponent } from './survey-detail.component'

@Component({
    directives: [SurveyDetailComponent],
    providers: [SurveyClient],
    selector: 'app-survey',
    styleUrls: ['app/survey/survey-component.css'],
    templateUrl: 'app/survey/survey.component.html'
})
export class SurveyComponent { 
    title = 'Survey Admin';
    surveys: Observable<Array<SurveyModel>>;
    selectedSurvey: SurveyModel;

    constructor(private surveyService: SurveyClient) { }
    
    getSurveys() {
        this.surveys = this.surveyService.all();
    }
    ngOnInit() {
        this.getSurveys();
    }
    onSelect(survey: SurveyModel) { this.selectedSurvey = survey; }
}
