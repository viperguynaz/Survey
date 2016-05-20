import { Component } from '@angular/core';
import { SurveyService } from './survey.service'
import { Survey } from './survey';
import { SurveyDetailComponent } from './survey-detail.component'

@Component({
    directives: [ SurveyDetailComponent ],
    providers: [SurveyService],
    selector: 'app-survey',
    styleUrls: ['app/survey/survey-component.css'],
    templateUrl: 'app/survey/survey.component.html'
})
export class SurveyComponent { 
    title = 'Survey Admin';
    surveys: Survey[];
    selectedSurvey: Survey;

    constructor(private surveyService: SurveyService) { }
    
    getSurveys() {
        this.surveyService.getSurveys().then(surveys => this.surveys = surveys);
    }
    ngOnInit() {
        this.getSurveys();
    }
    onSelect(survey: Survey) { this.selectedSurvey = survey; }
}
