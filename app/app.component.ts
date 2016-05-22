import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

import { HeaderComponent } from './layout/header.component'
import { FooterComponent } from './layout/footer.component'
import { SidebarComponent } from './layout/sidebar.component'
import { SurveyComponent } from './survey/survey.component'

@Component({
    directives: [ HeaderComponent, FooterComponent, SidebarComponent, SurveyComponent ],
    selector: 'app',
    templateUrl: 'app/app.component.html',    
})
export class AppComponent { }
