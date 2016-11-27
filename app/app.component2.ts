import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
                <h1>{{title}}</h1>
                <nav>
                    hello 2
                </nav>
              `,
})
export class AppComponent2{
    title = 'Quiz app';
}
