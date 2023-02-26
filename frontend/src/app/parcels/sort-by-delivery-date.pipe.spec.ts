import { SortByDeliveryDatePipe } from './sort-by-delivery-date.pipe';

describe('SortByDeliveryDatePipe', () => {
  it('create an instance', () => {
    const pipe = new SortByDeliveryDatePipe();
    expect(pipe).toBeTruthy();
  });
});
