const typeOf = (value: unknown) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase()

export const isFunction = <T extends Function> (value: unknown): value is T => typeof value === 'function'
export const isArray = <T>(value: unknown): value is T[] => typeOf(value) === 'array'
export const isDate = (value: unknown): value is Date => typeOf(value) === 'date'
export const isRegExp = (value: unknown): value is RegExp => typeOf(value) === 'regexp'
export const isObject = (value: unknown): value is object => typeOf(value) === 'object'
export const isNull = (value: unknown): value is null => typeOf(value) === 'null'
export const isUndefined = (value: unknown): value is undefined => value === undefined
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'
export const isString = (value: unknown): value is string => typeof value === 'string'
export const isNumber = (value: unknown): value is number => typeof value === 'number'
export const isSymbol = (value: unknown): value is symbol => typeof value === 'symbol'
export const isBigInt = (value: unknown): value is bigint => typeof value === 'bigint'

// @ts-expect-error window is not defined
export const isWindow = (value: unknown): boolean => typeof window !== 'undefined' && typeOf(value) === 'window'
// @ts-expect-error window is not defined
export const isBrowser = typeof window !== 'undefined'
