declare global {
  interface Array<T> {
    cut(length: number): Array<T>;

    last(): T;
  }
}

// Array.prototype.cut = function <T>(length): T {
//     return this.slice(0, length);
// }

// Array.prototype.last = function <T>(): T {
//   return this[this.length - 1];
// };

export {};
