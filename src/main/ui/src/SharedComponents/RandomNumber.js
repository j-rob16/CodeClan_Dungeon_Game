export function randomNumber(max, min) {
  if (min === undefined || min === '' || min === null) {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min) + min);
}
