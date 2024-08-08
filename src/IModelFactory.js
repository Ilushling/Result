/**
 * @typedef {object} IResultModelFactory
 * @property {<T extends unknown = undefined>(data?: T) => IResultModel<T, undefined>} ok
 * @property {<E extends Error>(error: E) => IResultModel<undefined, E>} fail
 */

/**
 * @import { IResultModel } from './IModel.js'
 */
