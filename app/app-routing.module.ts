import { NgModule }      from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import { AppComponent }   from './app.component';
import { AppComponent1 }   from './app.component1';
import { AppComponent2 }   from './app.component2';


const routes: Routes = [
               {
                        path: '',
                        redirectTo: '/component1',
                        pathMatch: 'full'
                    },
                    {
                        path: 'component1',
                        component: AppComponent1
                    },
                    {
                        path: 'component2',
                        component: AppComponent2
                    }
                ]; 


@NgModule({
  imports:  [ 
                RouterModule.forRoot(routes) 
            ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
