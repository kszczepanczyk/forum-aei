import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesSectionComponent } from './archives-section.component';

describe('ArchivesSectionComponent', () => {
  let component: ArchivesSectionComponent;
  let fixture: ComponentFixture<ArchivesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
