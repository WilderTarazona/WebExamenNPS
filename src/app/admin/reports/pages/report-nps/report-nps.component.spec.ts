import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNpsComponent } from './report-nps.component';

describe('ReportNpsComponent', () => {
  let component: ReportNpsComponent;
  let fixture: ComponentFixture<ReportNpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportNpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
