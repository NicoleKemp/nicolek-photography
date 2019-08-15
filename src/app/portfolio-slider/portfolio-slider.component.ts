import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-slider',
  templateUrl: './portfolio-slider.component.html',
  providers: [NgbCarouselConfig]
})

export class PortfolioSliderComponent implements OnInit {

  images = [
    {
      imageID: '1',
      imageURL: '../assets/portfolio/1.jpg',
      imageTitle: 'Mc Gregor, Western Cape',
      imageStyle: 'Landscape',
      imageDate: 'February 2019'
    },
    {
      imageID: '3',
      imageURL: '../assets/portfolio/3.jpg',
      imageTitle: 'Mc Gregor, Western Cape',
      imageStyle: 'Landscape',
      imageDate: 'February 2019'
    },
    {
      imageID: '4',
      imageURL: '../assets/portfolio/4.jpg',
      imageTitle: 'Mc Gregor, Western Cape',
      imageStyle: 'Landscape',
      imageDate: 'February 2019'
    },
    {
      imageID: '5',
      imageURL: '../assets/portfolio/5.jpg',
      imageTitle: 'Elephant Park, Knysna, Western Cape',
      imageStyle: 'Wild Life',
      imageDate: 'March 2018'
    },
    {
      imageID: '6',
      imageURL: '../assets/portfolio/6.jpg',
      imageTitle: 'Elephant Park, Knysna, Western Cape',
      imageStyle: 'Wild Life',
      imageDate: 'March 2018'
    },
    {
      imageID: '7',
      imageURL: '../assets/portfolio/7.jpg',
      imageTitle: 'Elephant Park, Knysna, Western Cape',
      imageStyle: 'Wild Life',
      imageDate: 'March 2018'
    },
    {
      imageID: '8',
      imageURL: '../assets/portfolio/8.jpg',
      imageTitle: 'Elephant Park, Knysna, Western Cape',
      imageStyle: 'Wild Life',
      imageDate: 'March 2018'
    },
    {
      imageID: '9',
      imageURL: '../assets/portfolio/9.jpg',
      imageTitle: 'Elephant Park, Knysna, Western Cape',
      imageStyle: 'Wild Life',
      imageDate: 'March 2018'
    }
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 3500;
    config.pauseOnHover = false;
  }

  ngOnInit() {

  }

}
