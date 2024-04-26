/**
 * @template {unknown=} [T=undefined]
 * @template {Error=} [E=undefined]
 * 
 * @typedef {object} IResult
 * @property {() => ResultProperties<T, E>} getProperties
 * @property {E extends Error ? false : true} success
 * @property {E extends Error ? true : false} failure
 * @property {() => E extends Error ? false : true} isSuccess
 * @property {() => E extends Error ? true : false} isFailure
 * @property {() => T} getData
 * @property {() => E} getError
 * @property {match<T, E>} match
 */

/**
 * @typedef {new <T extends unknown | undefined, E extends Error | undefined>(params: ResultParams<T, E>) => IResult<T, E>} ResultConstructable
 */

/**
 * @template {unknown=} T
 * @template {Error=} E
 * 
 * @typedef {ResultProperties<T, E>} ResultParams
 */

/**
 * @template {unknown=} T
 * @template {Error=} E
 * 
 * @typedef {object} ResultProperties
 * @property {E extends Error ? false : true} success
 * @property {T} data
 * @property {E} error
 */

/**
 * @template {unknown=} T
 * @template {Error=} E
 * 
 * @callback match
 * @param {object} params
 * @param {(data: T) => void | Promise<void>=} params.onSuccess
 * @param {(error: E) => void | Promise<void>=} params.onFailure
 * @returns {Promise<void>}
 */
