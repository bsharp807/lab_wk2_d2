const Decorator = require('../decorator');
const PaintCan = require('../paint_can');
const Room = require('../room');

describe('decorator', () => {
  let room;
  let decorator;
  let paintCan;
  let canOne;
  let canTwo;
  let canThree;

  beforeEach(() => {
    room = new Room(30);
    decorator = new Decorator();
    paintCan = new PaintCan(10);
    canOne = new PaintCan(10);
    canTwo = new PaintCan(10);
    canThree = new PaintCan(10);

  });

  test('room should have an area', () => {
    expect(room.area).toBeGreaterThan(0);
  });

  test('room should start not painted', () => {
    expect(room.areaPainted).toBe(0);
  });

  test('room should be able to be painted', () => {
    decorator.addPaintToStock(canOne);
    decorator.addPaintToStock(canTwo);
    decorator.addPaintToStock(canThree);
    decorator.paintRoom(room);
    expect(room.areaPainted).toBe(room.area);
  });

  test('paint can should have volume', () => {
    expect(paintCan.volume).toBeGreaterThan(0);
  });

  test('paint can should be able to empty itself and check', () => {
    paintCan.emptySelf();
    expect(paintCan.checkEmpty()).toBe(true);
  });

  test('decorator should start with an empty paint stock', () => {
    expect(decorator.checkPaintStock()).toBe(0);
  });

  test('decorator should be able to add paint', () => {
    decorator.addPaintToStock(canOne);
    expect(decorator.checkPaintStock()).toBe(1);
  });

  test('decorator should be able to check total paint', () => {
    decorator.addPaintToStock(canOne);
    console.log(decorator.paintStock);
    expect(decorator.checkPaintVol()).toBe(10);
  });

  test('decorator should calculate if has enough paint', () => {
    decorator.addPaintToStock(canOne);
    decorator.addPaintToStock(canTwo);
    decorator.addPaintToStock(canThree);
    expect(decorator.checkPaintVol()).toBeGreaterThanOrEqual(room.totLeftToPaint());
  });

  test('decorator should be able to paint a room if enough paint', () => {
    decorator.addPaintToStock(canOne);
    decorator.addPaintToStock(canTwo);
    decorator.addPaintToStock(canThree);
    decorator.paintRoom(room);
    expect(room.totLeftToPaint()).toBeLessThanOrEqual(0);
  });

  test('decorator should be able to decrease paint in stock', () => {
    decorator.addPaintToStock(canOne);
    decorator.addPaintToStock(canTwo);
    decorator.addPaintToStock(canThree);
    decorator.paintRoom(room);
    expect(decorator.checkPaintVol()).toBe(0);
  });

  test('remove empty cans from stock', () => {
    decorator.addPaintToStock(canOne);
    decorator.addPaintToStock(canTwo);
    decorator.addPaintToStock(canThree);
    decorator.paintRoom(room);
    decorator.addPaintToStock(paintCan);
    decorator.removeEmpties();
    expect(decorator.checkPaintStock()).toBe(1);
  });
});
