/**
 * @template {boolean} S
 * @template {any=} [D=undefined]
 * @template {Error=} [E=undefined]
 * @typedef {object} ResultProperties
 * @property {S} success
 * @property {D} data
 * @property {E} error
 */

/**
 * @template {boolean} S
 * @template {any=} [D=undefined]
 * @template {Error=} [E=undefined]
 * @typedef {ResultProperties<S, D, E>} ResultParams
 */

/**
 * @template {boolean} S
 * @template {any=} [D=undefined]
 * @template {Error=} [E=undefined]
 * @typedef {new (params: ResultParams<S, D, E>) => Result<S, D, E>} ResultConstructable
 */

/**
 * @template {boolean} S
 * @template {any=} [D=undefined]
 * @template {Error=} [E=undefined]
 */
export default class Result {
  /** @type {S} */
  #success;

  /** @type {D} */
  #data;

  /** @type {E} */
  #error;

  /** @param {ResultParams<S, D, E>} params */
  constructor({ success, data, error }) {
    this.#success = success;
    this.#data = data;
    this.#error = error;
  }

  /**
   * @returns {ResultProperties<S, D, E>}
   */
  getProperties() {
    return {
      success: this.#success,
      data: this.#data,
      error: this.#error
    };
  }
  
  get success() {
    return this.isSuccess();
  }
  
  get failure() {
    return this.isFailure();
  }

  isSuccess() {
    return this.#success;
  }

  /**
   * @returns {S extends false ? true : false}
   */
  isFailure() {
    // @ts-ignore
    return !this.#success;
  }

  getData() {
    return this.#data;
  }

  getError() {
    return this.#error;
  }

  /**
   * @param {object} params
   * @param {(data: D) => any} params.onSuccess
   * @param {(error: E) => any=} params.onFailure
   */
  match({
    onSuccess,
    onFailure
  }) {
    return this.isSuccess()
      ? onSuccess(this.getData())
      : onFailure?.(this.getError());
  }
}
