import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {Http, HTTP_PROVIDERS} from '@angular/http';

bootstrap(AppComponent, [Http, HTTP_PROVIDERS]);
