export const isTruthy = Boolean
export const isKeyOf = <T extends object>(object: T, key: keyof any): key is keyof T => Object.hasOwn(object, key)
