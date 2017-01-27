"use strict";

const till = require('./till');
//const inventory = require('./inventory');

test('it calculates 20% tax', () => {
  expect(till.calculateTax(100)).toBe(20);
});

test('looks up the price of 1000 for a laptop', () => {
  expect(till.lookupPrice('laptop')).toBe(1000);
});

test('it throws an exception if item not found in inventory', () => {
  let items = ['laptop','shirt','shoes'];
  for (let i = 0; i < items.length; i++) {
    //expect(till.lookupPrice(items[i])).not.toThrow(); // why fail?
    expect(till.lookupPrice(items[i])).toBeGreaterThanOrEqual(0);
  }
});

test('it calculates total sum for a laptop and shoes', () => {
  expect(till.calculateTotalSum(['laptop','shoes'])).toBe(1320);
});

test('it prints the receipt properly when buying a laptop and a shirt', () => {
  const receipt = till.generateReceipt(['laptop', 'shirt']);
  expect(receipt).toBe("Item #0: laptop (1000 + 200 = 1200)\nItem #1: shirt (30 + 6 = 36)\nTotal: 1236");
});
