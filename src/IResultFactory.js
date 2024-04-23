/**
 * @typedef {object} IResultFactory
 * @property {<T extends unknown = undefined>(data?: T) => IResult<T extends undefined ? undefined : T, undefined>} ok
 * @property {<E extends Error>(error: E) => IResult<undefined, E>} fail
 */

/**
 * @typedef {import('./IResult.js').ResultConstructable} ResultConstructable
 */

/**
 * @typedef {object} ResultFactoryParams
 * @property {ResultConstructable} Result
 * 
 * @typedef {ResultFactoryParams} ResultFactoryProperties
 */

/**
 * @template {unknown=} T
 * @template {Error=} E
 * 
 * @typedef {import('./IResult.js').IResult<T, E>} IResult
 */
