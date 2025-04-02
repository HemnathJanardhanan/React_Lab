"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTimestamp = exports.validatePrice = void 0;
function validatePrice(target, propertyKey) {
    let value;
    const getter = function () {
        return value;
    };
    const setter = function (newValue) {
        if (newValue < 0) {
            throw new Error("Price cannot be negative");
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, { get: getter, set: setter });
}
exports.validatePrice = validatePrice;
function AddTimestamp(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.createdAt = new Date();
        }
    };
}
exports.AddTimestamp = AddTimestamp;
