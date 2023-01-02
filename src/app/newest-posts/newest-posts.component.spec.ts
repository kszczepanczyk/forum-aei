import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestPostsComponent } from './newest-posts.component';

describe('NewestPostsComponent', () => {
  let component: NewestPostsComponent;
  let fixture: ComponentFixture<NewestPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
