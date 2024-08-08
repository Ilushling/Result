/**
 * @template {unknown} [T=undefined]
 * @template {Error=} [E=undefined]
 * 
 * @typedef {object} IResultModel
 * @property {() => ResultProperties<T, E>} getProperties
 * 
 * @property {E extends Error ? false : true} success
 * @property {E extends Error ? true : false} failure
 * @property {() => E extends Error ? false : true} isSuccess
 * @property {() => E extends Error ? true : false} isFailure
 * 
 * @property {() => T} getData
 * @property {() => E} getError
 * 
 * @property {(callbacks: {
 *  onSuccess?: (data: T) => (void | Promise<void>);
 *  onFailure?: (error: E) => (void | Promise<void>);
 * }) => Promise<void>} match
 */

/**
 * @template {unknown} [T=undefined]
 * @template {Error=} [E=undefined]
 * 
 * @typedef {object} ResultProperties
 * @property {E extends Error ? false : true} success
 * @property {T} data
 * @property {E} error
 */
