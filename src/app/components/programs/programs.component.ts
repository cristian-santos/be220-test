import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgramsComponent  implements OnInit {

  constructor() { }
  
  slideOpts = {
    initialSlide: 1.9,
    speed: 400
  };

  ngOnInit() {}

}
