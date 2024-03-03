/**
 * @template {any=} D
 * @template {Error=} E
 * 
 * @typedef {import('./IResult.js').IResult<D, E>} IResult
 */

/**
 * @template {any=} D
 * @template {Error=} E
 * 
 * @typedef {import('./IResult.js').ResultConstructable<D, E>} ResultConstructable
 */

/**
 * @typedef {object} ResultFactoryParams
 * @property {ResultConstructable<any, Error | undefined>} Result
 */
export default class ResultFactory {
  /** @type {ResultFactoryParams['Result']} */
  #Result;

  /** @param {ResultFactoryParams} params */
  constructor({ Result }) {
    this.#Result = Result;
  }

  /**
   * @template {any=} [T=undefined]
   * @param {T=} data
   */
  ok(data) {
    return /** @type {IResult<T, undefined>} */ (new this.#Result({ success: true, data, error: undefined }));
  }

  /**
   * @template {Error} E
   * @param {E} error
   */
  fail(error) {
    return /** @type {IResult<undefined, E>} */ (new this.#Result({ success: false, data: undefined, error }));
  }
}
