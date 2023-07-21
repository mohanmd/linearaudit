import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent implements OnInit {
  curentindex: any;
  animText = [
    { label: 'Taxation' },
    { label: 'Audits' },
    { label: 'Registration' },
    { label: 'Business Setup?' },
  ];

  textContainer: any;
  textLength: any;

  constructor() { }

  ngOnInit() {
    this.curentindex = 0;
    this.textContainer = document.querySelector('.tcontainer')?.children;
    this.textLength = this.textContainer.length;
    this.startAnimation();
  }

  startAnimation() {
    for (let i = 0; i < this.textLength; i++) {
      this.textContainer[i].classList.remove('active_anim', 'inactive_anim');
    } 
    this.textContainer[this.curentindex].classList.add('active_anim');

    setTimeout(() => {
      this.textContainer[this.curentindex].classList.add('inactive_anim');
    }, 2500);

    setTimeout(() => {
      if (this.curentindex == this.textLength - 1) {
        this.curentindex = 0;
      } else {
        this.curentindex++;
      }
      this.startAnimation()
    }, 3000); 
  }
 
} 
