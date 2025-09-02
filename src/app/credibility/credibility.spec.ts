import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Credibility } from './credibility';

describe('Credibility', () => {
  let component: Credibility;
  let fixture: ComponentFixture<Credibility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Credibility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Credibility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
