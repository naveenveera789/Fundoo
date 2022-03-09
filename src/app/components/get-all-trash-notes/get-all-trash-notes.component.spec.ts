import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTrashNotesComponent } from './get-all-trash-notes.component';

describe('GetAllTrashNotesComponent', () => {
  let component: GetAllTrashNotesComponent;
  let fixture: ComponentFixture<GetAllTrashNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllTrashNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTrashNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
