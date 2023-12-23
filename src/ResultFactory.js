/**
 * @typedef {import('./Result.js').default} Result
 * @typedef {import('./Result.js').ResultParams} ResultParams
 */

/**
 * @typedef {object} ResultFactoryParams
 * @property {new (params: ResultParams) => Result} Result
 */
export default class ResultFactory {
  /** @type {new (params: ResultParams) => Result} */
  #Result;

  /** @param {ResultFactoryParams} params */
  constructor({ Result }) {
    this.#Result = Result;
  }

  /**
   * @param {any=} data
   */
  ok(data) {
    return new this.#Result({ success: true, data });
  }

  /**
   * @param {Error} error
   */
  fail(error) {
    return new this.#Result({ success: false, error });
  }
}
