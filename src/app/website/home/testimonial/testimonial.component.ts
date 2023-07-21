import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition,state, animate, style } from '@angular/animations';


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

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.loadTestimonials();
  }

  loadTestimonials() {
    console.log(this.getScreenWidth);
    
    if(this.getScreenWidth <= 768){
      this.testimonialsToShow = this.testimonials.slice(this.currentIndex, this.currentIndex + 1);
    }else{
      this.testimonialsToShow = this.testimonials.slice(this.currentIndex, this.currentIndex + 3);
    }
  }

  next() {
    if (this.currentIndex + 3 < this.testimonials.length) {
      this.currentIndex += 1;
      this.loadTestimonials();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.loadTestimonials();
    }
  }

  constructor() { }
 

}
