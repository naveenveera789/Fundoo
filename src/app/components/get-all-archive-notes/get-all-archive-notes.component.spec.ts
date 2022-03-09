import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllArchiveNotesComponent } from './get-all-archive-notes.component';

describe('GetAllArchiveNotesComponent', () => {
  let component: GetAllArchiveNotesComponent;
  let fixture: ComponentFixture<GetAllArchiveNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllArchiveNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllArchiveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
