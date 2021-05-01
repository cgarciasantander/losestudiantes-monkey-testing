const faker = require("faker");

const MIN = "01/01/1960";
const MAX = "01/01/2080";

export function getRandomDateString() {
  return faker.date.between(MIN, MAX).toLocaleDateString();
}

export function getRandomTimeString() {
  return faker.date.between(MIN, MAX).toLocaleTimeString();
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomString() {
  return faker.random.words(5);
}

export function getRandomNumber() {
  return faker.datatype.number();
}