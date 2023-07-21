import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  curentYear : any;

  constructor() { }

  ngOnInit() {
    this.curentYear = new Date().getFullYear()

  }

}
