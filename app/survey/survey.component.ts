import { Component } from '@angular/core';
import { SurveyService } from './survey.service'
import { Survey } from './survey';

@Component({
    selector: 'app-survey',
    templateUrl: 'app/survey/survey.component.html',    
    styles:[`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .surveys {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .surveys li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: 0.3em 0 0 10px;
            height: 1.6em;
            border-radius: 4px;
        }
        .surveys li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .surveys li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .surveys .text {
            position: relative;
            top: -3px;
        }
        .surveys .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `],
    providers: [SurveyService]
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
