"use strict";
// 1.	Create a module that handles product details in the grocery store, including adding and listing products.
// 	Create a module product.ts that contains a class Product with properties name, price, and category.
// 	Implement methods to add a product and list all products.
// 	In another file store.ts, import and use the Product class to create products and display them.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProduct = exports.displayAll = exports.addProduct = exports.Product = void 0;
const decorators_1 = require("./decorators");
let Product = class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    getCategory() {
        return this.category;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getDetails() {
        let ans = `Name : ${this.name}\nPrice : ${this.price}\nCategory : ${this.category}\nCreated At: ${this["createdAt"]}\n`;
        return ans;
    }
};
__decorate([
    decorators_1.validatePrice,
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
Product = __decorate([
    decorators_1.AddTimestamp,
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], Product);
exports.Product = Product;
let PRODUCTS = [];
const addProduct = (prod) => {
    PRODUCTS.push(prod);
    console.log("Product Added Successfully !!");
};
exports.addProduct = addProduct;
const displayAll = () => {
    console.log("\nALL PRODUCTS IN CATALOG : \n");
    for (let prod of PRODUCTS) {
        console.log(prod.getDetails());
    }
};
exports.displayAll = displayAll;
const searchProduct = (id) => {
    for (let prod of PRODUCTS) {
        if (prod.id === id) {
            return prod;
        }
    }
    return null;
};
exports.searchProduct = searchProduct;
