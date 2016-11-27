import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
                <h1>{{title}}</h1>
     <a routerLink="/component1">comp1</a>
     <a routerLink="/component2">comp2</a> 
     <router-outlet></router-outlet>
              `,
})
export class AppComponent{
    title = 'Quiz app';
}
