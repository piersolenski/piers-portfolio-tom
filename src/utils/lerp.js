export default function lerp(value1, value2, amount) {
  return (1 - amount) * value1 + amount * value2;
}
