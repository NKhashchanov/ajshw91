import Daemon from '../daemon';
import Magician from '../magician';
import Character from '../app';

test('should attack without distance and dope', () => {
  const expected = 100;
  const magician = new Magician('aaa');
  magician.distance = 1;
  const received = magician.attack;
  expect(received).toBe(expected);
});

test('should attack with distance and dope', () => {
  const expected = 48;
  const magician = new Magician('aaa');
  magician.distance = 5;
  magician.dope = true;
  const received = magician.attack;
  expect(received).toBe(expected);
});

test('should attack with distance and without dope', () => {
  const expected = 90;
  const daemon = new Daemon('bbb');
  daemon.distance = 2;
  const received = daemon.attack;
  expect(received).toBe(expected);
});

test('should attack without distance and with dope', () => {
  const expected = 100;
  const daemon = new Daemon('bbb');
  daemon.dope = true;
  const received = daemon.attack;
  expect(received).toBe(expected);
});

test('should get dope', () => {
  const expected = false;
  const dope = new Character();
  const received = dope.stoned;
  expect(received).toBe(expected);
});

test('should set dope', () => {
  const expected = true;
  const dope = new Character();
  dope.stoned = true;
  const received = dope.stoned;
  expect(received).toBe(expected);
});

test('should set attack', () => {
  const expected = 80;
  const ap = new Character();
  ap.attack = 80;
  const received = ap.attack;
  expect(received).toBe(expected);
});
