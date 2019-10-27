import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEmpresaComponent } from './save-empresa.component';

describe('SaveEmpresaComponent', () => {
  let component: SaveEmpresaComponent;
  let fixture: ComponentFixture<SaveEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
