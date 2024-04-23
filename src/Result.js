/**
 * @template {unknown=} T
 * @template {Error=} E
 * 
 * @implements {IResult<T, E>}
 */
export default class Result {
  /**
   * @template {unknown=} T
   * @template {Error=} E
   * 
   * @typedef {import('./IResult.js').IResult<T, E>} IResult
   */

  /**
   * @template {unknown=} T
   * @template {Error=} E
   * 
   * @typedef {import('./IResult.js').ResultProperties<T, E>} ResultProperties
   */

  /**
   * @template {unknown=} T
   * @template {Error=} E
   * 
   * @typedef {import('./IResult.js').ResultParams<T, E>} ResultParams
   */

  /** @type {ResultProperties<T, E>['success']} */
  #success;

  /** @type {ResultProperties<T, E>['data']} */
  #data;

  /** @type {ResultProperties<T, E>['error']} */
  #error;

  /** @param {ResultParams<T, E>} params */
  constructor({ success, data, error }) {
    this.#success = success;
    this.#data = data;
    this.#error = error;
  }

  getProperties() {
    return {
      success: this.#success,
      data: this.#data,
      error: this.#error
    };
  }

  get success() {
    return this.#success;
  }

  get failure() {
    return /** @type {E extends Error ? true : false} */ (!this.#success);
  }

  isSuccess() {
    return this.success;
  }

  /** @type {IResult<T, E>['isFailure']} */
  isFailure() {
    return this.failure;
  }

  getData() {
    return this.#data;
  }

  getError() {
    return this.#error;
  }

  /** @type {IResult<T, E>['match']} */
  async match({ onSuccess, onFailure }) {
    await this.success
      ? onSuccess?.(this.getData())
      : onFailure?.(this.getError());
  }
}
