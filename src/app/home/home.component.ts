import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('') portfolioLink: ElementRef;
  scroll(el: HTMLElement, e: Event) {
    e.stopPropagation();
    e.preventDefault();
    el.scrollIntoView({block: 'start', behavior: 'smooth', inline: 'nearest'});
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }
}


