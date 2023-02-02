import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingVoteComponent } from './existing-vote.component';

describe('ExistingVoteComponent', () => {
  let component: ExistingVoteComponent;
  let fixture: ComponentFixture<ExistingVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingVoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
