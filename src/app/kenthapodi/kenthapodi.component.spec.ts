import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenthapodiComponent } from './kenthapodi.component';

describe('KenthapodiComponent', () => {
  let component: KenthapodiComponent;
  let fixture: ComponentFixture<KenthapodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KenthapodiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KenthapodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
