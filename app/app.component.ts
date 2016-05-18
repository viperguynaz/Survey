import { Component } from '@angular/core';
import { SurveyService } from './survey/survey.service'
import { Survey } from './survey/survey';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>Surveys</h2>
        <ul>
        <li *ngFor="let survey of surveys"
            [class.selected]="survey === selectedHero"
            (click)="onSelect(survey)">
            {{survey.Key}}
        </li>
        </ul>`,
    providers: [SurveyService]
})
export class AppComponent { 
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
