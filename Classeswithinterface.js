"use strict";
class Rectangle {
    constructor(wid, hgh) {
        this.wid = wid;
        this.hgh = hgh;
    }
    getarea() {
        return this.width * this.height;
    }
}
class Squarerec extends Rectangle {
    constructor(width) {
        super(width, width);
        this.width = width;
    }
    getarea() {
        return this.width * this.width;
    }
}
const obj = new Squarerec(2);
let area = obj.getarea();
console.log(area);
