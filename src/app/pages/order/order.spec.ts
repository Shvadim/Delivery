import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Order } from './order';

describe('Order', () => {
  let component: Order;
  let fixture: ComponentFixture<Order>;

  beforeEach(async () => {
    // provide a minimal ymaps stub so calculate() won't blow up
    (window as any).ymaps = {
      multiRouter: {
        MultiRoute: function (opts: any, opts2: any) {
          return {
            model: { events: { add: (_: string, __: any) => {} } },
          };
        },
      },
    };

    await TestBed.configureTestingModule({
      imports: [Order],
    }).compileComponents();

    fixture = TestBed.createComponent(Order);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has loading signal initially false', () => {
    expect(component.loading()).toBeFalsy();
  });

  it('sets loading true when calculate is called and form valid', () => {
    // prepare form and stub map so we don't early return
    component.map = { geoObjects: { add: () => {}, remove: () => {} } };
    component.routeForm.setValue({ from: 'a', to: 'b', size: 'xs', speed: 'regular' });
    component.loading.set(false);

    component.calculate();
    expect(component.loading()).toBeTruthy();
  });
});
