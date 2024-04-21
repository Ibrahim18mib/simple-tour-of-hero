import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenthapodiDetailComponent } from './kenthapodi-detail.component';

describe('KenthapodiDetailComponent', () => {
  let component: KenthapodiDetailComponent;
  let fixture: ComponentFixture<KenthapodiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KenthapodiDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KenthapodiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
