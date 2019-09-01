import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexMusicComponent } from './rex-music.component';

describe('RexMusicComponent', () => {
  let component: RexMusicComponent;
  let fixture: ComponentFixture<RexMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
