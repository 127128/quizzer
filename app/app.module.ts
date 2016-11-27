import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
//import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule }   from './app-routing.module';

import { AppComponent }   from './app.component';
import { AppComponent1 }   from './app.component1';
import { AppComponent2 }   from './app.component2';

@NgModule({
  imports:  [ 
                BrowserModule,
                FormsModule,
                HttpModule,
                AppRoutingModule,
//                InMemoryWebApiModule.forRoot(InMemoryDataService),
            ],
  declarations: [ 
                    AppComponent,
AppComponent1, AppComponent2
                    
            ],
  bootstrap:[
                 AppComponent 
            ],
  providers:[
            ]
})
export class AppModule { }
