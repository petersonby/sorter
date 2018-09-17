class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
   return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    indices = Array.from(indices);
    const tempArray = []; 
    const sortIndices = indices.sort();

    if (indices.length > 1) {
	    sortIndices.forEach(index => tempArray.push(this.array[index]));
	    tempArray.sort(this.compareFunction);
	    sortIndices.forEach((index, i) => this.array[index] = tempArray[i]);
	}
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction; 
  }
}

module.exports = Sorter;