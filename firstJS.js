'use strict';

let me = {
    name: 'Eugene',
    surname: 'Novikov',
    get nameMe() {return this.name;},
    set nameMe(xxx) {this.name = 'Новое имя: ' + xxx},
    get surMe() {return this.surname},
    set surMe(yyy) {this.surname = 'Новая фамилия: ' + yyy}
};

console.log(me.nameMe);
console.log(me.surMe);
me.nameMe = 'Roman';
me.surMe = 'Gunkin';
console.log(me.nameMe);
console.log(me.surMe);

let secondMe = {
    func() {},
    __proto__: me
};

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    };
    perimetr (){return (this.width * 2) + (this.height * 2)};
    area () {return this.width * this.height}
}
let rect = new Rectangle(10, 20);
console.log(rect.perimetr());
console.log(rect.area());
