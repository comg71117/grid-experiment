import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTestComponent } from './grid-test.component';

describe('GridTestComponent', () => {
  let component: GridTestComponent;
  let fixture: ComponentFixture<GridTestComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'should create 1st grid', () => {
    const containerElement = element.querySelector('.container');
    const gridItems = element.querySelectorAll('.item');
    expect(containerElement).toBeTruthy();
    expect(gridItems.length).toBeGreaterThanOrEqual(20);
  });
});
