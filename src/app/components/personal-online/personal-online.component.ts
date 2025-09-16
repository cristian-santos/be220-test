import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-personal-online',
  templateUrl: './personal-online.component.html',
  styleUrls: ['./personal-online.component.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonalOnlineComponent implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 1.9,
    speed: 400
  };


  ngOnInit() {}

}
