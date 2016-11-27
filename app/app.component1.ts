import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
                <h1>{{title}}</h1>
                <nav>
                    hello 1
                </nav>
              `,
})
export class AppComponent1{
    title = 'Quiz app';
}
