import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { PersonalOnlineComponent } from '../components/personal-online/personal-online.component';
import { ProgramsComponent } from '../components/programs/programs.component';
import { ContentsComponent } from '../components/contents/contents.component';  

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    HeaderComponent,
    PersonalOnlineComponent,
    ProgramsComponent,
    ContentsComponent,
    IonContent
  ],
})

export class HomePage implements OnInit {
  public home!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
  this.home = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
