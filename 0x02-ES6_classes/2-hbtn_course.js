export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for _name
  get name() {
    return this._name;
  }

  // Setter for _name
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  // Getter for _length
  get length() {
    return this._length;
  }

  // Setter for _length
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  // Getter for _students
  get students() {
    return this._students;
  }

  // Setter for _students
  set students(value) {
    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = value;
    } else {
      throw TypeError('Students must be an array of strings');
    }
  }
}
