'use strict';

// class Prop {
//     constructor(width, color) {
//         this.width = width;
//         this.color = color;
//     }
// }
//
// class Line extends Prop{
//     constructor(sp,ep,width,color) {
//         super (width, color)
//         this.sp = sp;
//         this.ep = ep;
//     }
//     getColor() {
//         return ([] + this.color + [])
//     }
//     draw() {
//         console.log('Line: ' +this.sp.x + ', '+this.sp.y + ', ' + this.ep.x+', '+this.ep.y);
//     }
// }
// let l1 = new Line({x:0,y:0}, {x:10,y:20}, 1, 'red');
// console.log(l1.getColor());

// class Animal {
//     constructor(name,speed) {
//         this.name = name;
//         this.speed = speed;
//     }
//     move() {
//         alert (`${this.name} move with speed ${this.speed} kmh`);
//     }
//     stayAtPlace() {
//         alert (`${this.name} stay at place`);
//     }
// }
//
// class MyPet extends Animal {
//     constructor(character, name, speed) {
//         super(name, speed);
//         this.character = character;
//     }
//     jump() {
//         alert (`My pet ${this.name} run with speed ${this.speed} kmh and ${this.character}`);
//     }
// }
//
// let pet = new MyPet('jump', 'Barsik', 50);
// pet.move();
// pet.stayAtPlace();
// pet.jump();

// class Users {
//     constructor(name,old) {
//         this._name = name;
//         this._old = old;
//     }
//     _getName(){return this._name;}
// }
// let u1 = new Users('Roman', 30);
// console.log(u1._name);

// class Users {
//     #name;
//     #old;
//     constructor(name,old) {
//         this.#name = name;
//         this.#old = old;
//     }
//     _getName(){return this.#name;}
// }
//
// class Admin extends Users {
//     constructor(name, old, login, psw) {
//         super(name,old);
//         this.login = login;
//         this.psw = psw;
//     }
// }
// let u1 = new Users('Roman', 30);
// let u2 = new Admin('Eugene', 38, 'admin', 1111);
// console.log(u1._getName);
// console.log(u2._getName);
//
// //console.log(u1.#name); //ошибка
//
// console.log(u1 instanceof Admin); //false
// console.log(u2 instanceof Admin); //true
//
// console.log(u1 instanceof Users); //true
// console.log(u2 instanceof Users); //true
//
// console.log(u1.constructor === Users); //true
// console.log(u2.constructor === Users); //false

class User {
    #psw;
    constructor(login,psw) {
        this.login = login;
        this.#psw = psw;
    }
    _logIn() {
        let inputLogin = prompt('Enter login');
        let password = prompt('Enter password');
        if (inputLogin===this.login && password===this.#psw) alert('Вход выполнен')
        else alert('Вход не выполнен');
    }
    _pswChange() {
        this.#psw = prompt('Enter new password');
    }
}
let inp = new User('Eugene', 'parol');
inp._logIn();
inp._pswChange();
inp._logIn();