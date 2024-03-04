/**
 * @template {any=} D
 * @template {Error=} E
 * 
 * @typedef {object} ResultProperties
 * @property {E extends Error ? false : true} success
 * @property {D} data
 * @property {E} error
 */

/**
 * @template {any=} D
 * @template {Error=} E
 * 
 * @typedef {ResultProperties<D, E>} ResultParams
 */

/**
 * @template {any=} D
 * @template {Error=} E
 * 
 * @typedef {new (params: ResultParams<D, E>) => IResult<D, E>} ResultConstructable
 */

/**
 * @template {any=} [D=undefined]
 * @template {Error=} [E=undefined]
 * 
 * @typedef {object} IResult
 * @property {() => ResultProperties<D, E>} getProperties
 * @property {E extends Error ? false : true} success
 * @property {E extends Error ? true : false} failure
 * @property {() => E extends Error ? false : true} isSuccess
 * @property {() => E extends Error ? true : false} isFailure
 * @property {() => D} getData
 * @property {() => E} getError
 * @property {match<D, E>} match
 */

/**
 * @template D
 * @template {Error=} [E=undefined]
 * 
 * @callback match
 * @param {object} params
 * @param {(data: D) => void=} params.onSuccess
 * @param {(error: E) => void=} params.onFailure
 * @returns {void}
 */
