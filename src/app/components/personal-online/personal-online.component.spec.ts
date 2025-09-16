import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalOnlineComponent } from './personal-online.component';

describe('PersonalOnlineComponent', () => {
  let component: PersonalOnlineComponent;
  let fixture: ComponentFixture<PersonalOnlineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PersonalOnlineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
