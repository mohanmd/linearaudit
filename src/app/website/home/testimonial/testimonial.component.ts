import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition,state, animate, style } from '@angular/animations';
import { OwlOptions } from 'ngx-owl-carousel-o';


export interface Testimonial {
  name: string;
  designation : string,
  message: string;
}

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
  animations: [
    trigger('slide', [
      state('active', style({ transform: 'translateX(0)' })),
      state('inactive', style({ transform: 'translateX(100%)' })),
      transition('inactive => active', animate('300ms ease-out')),
      transition('active => inactive', animate('300ms ease-out')),
    ]),
  ],
})
export class TestimonialComponent implements OnInit {
  public getScreenWidth: any;

  testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      designation : '',
      message: "The Team is doing a brilliant job in tax filing. He guided me well and help me to The Team is doing a brilliant job in tax filing. He guided me well and help me toget my amount.",
    },
    {
      name: 'Jane Smith',
      designation : '',
      message: "The Team is doing a brilliant job in tax filing. He guided me well and help me to The Team is doing a brilliant job in tax filing. He guided me well and help me toget my amount.",
    },
    {
      name: 'Deepak',
      designation : '',
      message: "The Team is doing a brilliant job in tax filing. He guided me well and help me to The Team is doing a brilliant job in tax filing. He guided me well and help me toget my amount.",
    },
    {
      name: 'Steve Smith',
      designation : '',
      message: "The Team is doing a brilliant job in tax filing. He guided me well and help me to The Team is doing a brilliant job in tax filing. He guided me well and help me toget my amount.",
    },
    {
      name: 'Jane Smith',
      designation : '',
      message: "The Team is doing a brilliant job in tax filing. He guided me well and help me to The Team is doing a brilliant job in tax filing. He guided me well and help me toget my amount.",
    },
    {
      name: 'Deepak',
      designation : '',
      message: "The Team is doing a brilliant job in tax filing. He guided me well and help me to The Team is doing a brilliant job in tax filing. He guided me well and help me toget my amount.",
    },
    {
      name: 'Steve Smith',
      designation : '',
      message: "The Team is doing a brilliant job in tax filing. He guided me well and help me to The Team is doing a brilliant job in tax filing. He guided me well and help me toget my amount.",
    },
    // Add more testimonials as needed...
  ];

  currentIndex: number = 0;
  testimonialsToShow: Testimonial[] = [];

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    nav : true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    margin : 20,
    animateIn: 'bounceIn',
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
  }
  ngOnInit() { 
  }

  

  constructor() { } 

}
