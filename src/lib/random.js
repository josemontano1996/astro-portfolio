// utils/random.js
export function randomInSphere(buffer, { radius }) {
  const len = buffer.length;
  for (let i = 0; i < len; i += 3) {
    let u = Math.random();
    let v = Math.random();
    let theta = u * 2.0 * Math.PI;
    let phi = Math.acos(2.0 * v - 1.0);
    let r = Math.cbrt(Math.random()) * radius;
    buffer[i] = r * Math.sin(phi) * Math.cos(theta);
    buffer[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    buffer[i + 2] = r * Math.cos(phi);
  }
  return buffer;
}
