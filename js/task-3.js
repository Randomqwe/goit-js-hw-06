class StringBuilder {
  #value;

  constructor(x) {
    this.#value = x;
  }

  getValue() {
    return this.#value;
  }

  padStart(z) {
    this.#value = z + this.#value;
  }

  padEnd(z) {
    this.#value += z;
  }

  padBoth(z) {
    this.#value = z + this.#value + z;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
