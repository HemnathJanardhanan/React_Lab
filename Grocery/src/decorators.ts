
export function validatePrice(target: any, propertyKey: string) {
    let value: number;
    const getter = function () {
        return value;
    };
    const setter = function (newValue: number) {
        if (newValue < 0) {
            throw new Error("Price cannot be negative");
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, { get: getter, set: setter });
}

export function AddTimestamp<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        createdAt = new Date();
    };
}
