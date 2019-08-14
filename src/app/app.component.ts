import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Nicole Kemp Photography';

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {}

    ngOnInit() {
      this.titleService.setTitle(this.title);
      this.meta.addTags([
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'keywords', content: 'Photography, Nicole Kemp, Nicole Abbott Photography, Wedding Photography, Lifestyle Photography'},
        {name: 'description', content: 'Cape Town based photographer with a passion for capturing beautiful landscapes, wildlife and ' +
            'lifestyle photography.'},
        {httpEquiv: 'Content-Type', content: 'text/html'},
        {charset: 'UTF-8'}
      ]);
    }
}
