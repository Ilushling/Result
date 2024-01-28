/**
 * @template {boolean} S
 * @template {any=} [D=undefined]
 * @template {Error=} [E=undefined]
 * @typedef {import('./Result.js').default<S, D, E>} Result
 */

/**
 * @template {boolean} S
 * @template {any=} [D=undefined]
 * @template {Error=} [E=undefined]
 * @typedef {import('./Result.js').ResultParams<S, D, E>} ResultParams
 */

/**
 * @template {boolean} S
 * @template {any=} [D=undefined]
 * @template {Error=} [E=undefined]
 * @typedef {import('./Result.js').ResultConstructable<S, D, E>} ResultConstructable
 */

/**
 * @typedef {object} ResultFactoryParams
 * @property {ResultConstructable<boolean, any, Error | undefined>} Result
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
    return /** @type {Result<true, T>} */ (new this.#Result({ success: true, data, error: undefined }));
  }

  /**
   * @template {Error} E
   * @param {E} error
   */
  fail(error) {
    return /** @type {Result<false, undefined, E>} */ (new this.#Result({ success: false, data: undefined, error }));
  }
}
