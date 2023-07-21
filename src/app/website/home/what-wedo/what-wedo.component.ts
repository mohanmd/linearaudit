import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-wedo',
  templateUrl: './what-wedo.component.html',
  styleUrls: ['./what-wedo.component.css']
})
export class WhatWedoComponent implements OnInit {
  listBox : any = [
    {
      title : 'Internal Audits',
      image : 'internal-audit.gif',
      content : 'Uncover operational inefficiencies, mitigate risks, and drive performance improvement with our thorough and insightful internal audit services.'
    },
    {
      title : 'GST',
      image : 'gst.gif',
      content : 'Simplify your tax obligations with our expert GST services, handling registration, returns, and compliance to ensure seamless GST operations for your business'
    },
    {
      title : 'Outsourcing',
      image : 'outsourcing.gif',
      content : 'Transform your business by leveraging our comprehensive outsourcing services, enabling you to tap into global talent, reduce costs, and increase operational agility.'
    },
    {
      title : 'Company Incorporation',
      image : 'company-incorporation.gif',
      content : 'At Linear Audit, we take care of the intricate details of company incorporation, providing expert guidance and handling all necessary paperwork, so you can focus on building your business.'
    },
    {
      title : 'Linear startup consulting',
      image : 'business-startup.gif',
      content : 'Launch your business with confidence and clarity, as our startup advisory services provide the roadmap to success, from ideation to execution.'
    },
    {
      title : 'Return Filing',
      image : 'return-filling.gif',
      content : 'Trust our experienced professionals to handle your ITR filing, leveraging their in-depth knowledge to optimize deductions, minimize errors, and maximize your tax benefits'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
