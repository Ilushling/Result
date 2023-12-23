/**
 * @typedef {object} ResultProperties
 * @property {boolean} success
 * @property {any=} data
 * @property {Error=} error
 * 
 * @typedef {ResultProperties} ResultParams
 */
export default class Result {
  /** @type {boolean} */
  #success;

  /** @type {any=} */
  #data;

  /** @type {Error=} */
  #error;

  /** @param {ResultParams} params */
  constructor({ success, data, error }) {
    this.#success = success;
    this.#data = data;
    this.#error = error;
  }

  /**
   * @returns {ResultProperties}
   */
  getProperties() {
    return {
      success: this.#success,
      data: this.#data,
      error: this.#error
    };
  }

  getData() {
    return this.#data;
  }

  getError() {
    return this.#error;
  }

  isSuccess() {
    return this.#success;
  }

  isFailure() {
    return !this.#success;
  }

  /**
   * @param {object} params
   * @param {(data: any) => any} params.onSuccess
   * @param {(error: Error) => any} params.onFailure
   */
  match({
    onSuccess,
    onFailure
  }) {
    return this.isSuccess()
      ? onSuccess(this.getData())
      : onFailure(/** @type {Error} */(this.getError()));
  }
}
