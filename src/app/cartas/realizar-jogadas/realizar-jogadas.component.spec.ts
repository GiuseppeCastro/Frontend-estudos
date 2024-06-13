import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarJogadasComponent } from './realizar-jogadas.component';

describe('RealizarJogadasComponent', () => {
  let component: RealizarJogadasComponent;
  let fixture: ComponentFixture<RealizarJogadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizarJogadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizarJogadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
