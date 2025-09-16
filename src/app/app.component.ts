
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, fitnessOutline, calendarOutline, personOutline, bookOutline, bodyOutline, restaurantOutline, trophyOutline, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
  { title: 'Novo Treino', url: '/home/novo-treino', icon: 'add-circle' },
  { title: 'Meus Treinos', url: '/home/meus-treinos', icon: 'fitness' },
  { title: 'Programas', url: '/home/programas', icon: 'calendar' },
  { title: 'Personal Online', url: '/home/personal-online', icon: 'person' },
  { title: 'Conteúdos', url: '/home/conteudos', icon: 'book' },
  { title: 'Meu Corpo', url: '/home/meu-corpo', icon: 'body' },
  { title: 'Nutrição', url: '/home/nutricao', icon: 'restaurant' },
  { title: 'Objetivos', url: '/home/objetivos', icon: 'trophy' },
  ];
  public labels = ['Cardio', 'Musculação', 'Funcional', 'Yoga', 'Pilates', 'CrossFit'];
  constructor() {
    addIcons({ 
      addCircleOutline, 
      fitnessOutline, 
      calendarOutline, 
      personOutline, 
      bookOutline, 
      bodyOutline, 
      restaurantOutline, 
      trophyOutline,
      mailOutline, 
      mailSharp, 
      paperPlaneOutline, 
      paperPlaneSharp, 
      heartOutline, 
      heartSharp, 
      archiveOutline, 
      archiveSharp, 
      trashOutline, 
      trashSharp, 
      warningOutline, 
      warningSharp, 
      bookmarkOutline, 
      bookmarkSharp 
    });
  }
}
