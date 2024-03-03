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
 * @typedef {import('./IResult.js').ResultProperties<D, E>} ResultProperties
 */

/**
 * @template {any=} D
 * @template {Error=} E
 * 
 * @typedef {import('./IResult.js').ResultParams<D, E>} ResultParams
 */

/**
 * @template {any=} D
 * @template {Error=} E
 * 
 * @implements {IResult<D, E>}
 */
export default class Result {
  /** @type {ResultProperties<D, E>['success']} */
  #success;

  /** @type {ResultProperties<D, E>['data']} */
  #data;

  /** @type {ResultProperties<D, E>['error']} */
  #error;

  /** @param {ResultParams<D, E>} params */
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
    return this.isSuccess();
  }

  get failure() {
    return this.isFailure();
  }

  isSuccess() {
    return this.#success;
  }

  /** @type {import('./IResult.js').IResult<D, E>['isFailure']} */
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

  /** @type {import('./IResult.js').IResult<D, E>['match']} */
  match({ onSuccess, onFailure }) {
    this.success
      ? onSuccess?.(this.getData())
      : onFailure?.(this.getError());
  }
}
