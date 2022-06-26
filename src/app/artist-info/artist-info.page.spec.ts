import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtistInfoPage } from './artist-info.page';

describe('ArtistInfoPage', () => {
  let component: ArtistInfoPage;
  let fixture: ComponentFixture<ArtistInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
