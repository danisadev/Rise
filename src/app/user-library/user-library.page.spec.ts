import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserLibraryPage } from './user-library.page';

describe('UserLibraryPage', () => {
  let component: UserLibraryPage;
  let fixture: ComponentFixture<UserLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
