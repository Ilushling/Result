/**
 * @import { IResultModel } from './IModel.js'
 */

/**
 * @typedef {new <T extends unknown | undefined, E extends Error | undefined>
 *  (params: ResultModelParams<T, E>) => IResultModel<T, E>
 * } ResultModelConstructable
 */

/**
 * @template {unknown} T
 * @template {Error=} E
 * 
 * @implements {IResultModel<T, E>}
 */
export default class ResultModel {
  /**
   * @template {unknown} T
   * @template {Error=} E
   * 
   * @typedef {ResultModelStates<T, E>} ResultModelParams
   */

  /**
   * @template {unknown} T
   * @template {Error=} E
   * 
   * @typedef {ResultModelStates<T, E>} ResultModelProperties
   */

  /**
   * @template {unknown} T
   * @template {Error=} E
   * 
   * @typedef {object} ResultModelStates
   * @property {E extends Error ? false : true} success
   * @property {T} data
   * @property {E} error
   */

  /** @type {ResultModelProperties<T, E>['success']} */
  #success;

  /** @type {ResultModelProperties<T, E>['data']} */
  #data;

  /** @type {ResultModelProperties<T, E>['error']} */
  #error;

  /** @param {ResultModelParams<T, E>} params */
  constructor({ success, data, error }) {
    this.#success = success;
    this.#data = data;
    this.#error = error;
  }

  /** @type {IResultModel<T, E>['getProperties']} */
  getProperties() {
    return {
      success: this.#success,
      data: this.#data,
      error: this.#error
    };
  }

  /** @type {IResultModel<T, E>['success']} */
  get success() {
    return this.#success;
  }

  /** @type {IResultModel<T, E>['failure']} */
  get failure() {
    return /** @type {E extends Error ? true : false} */ (!this.#success);
  }

  /** @type {IResultModel<T, E>['isSuccess']} */
  isSuccess() {
    return this.success;
  }

  /** @type {IResultModel<T, E>['isFailure']} */
  isFailure() {
    return this.failure;
  }

  /** @type {IResultModel<T, E>['getData']} */
  getData() {
    return this.#data;
  }

  /** @type {IResultModel<T, E>['getError']} */
  getError() {
    return this.#error;
  }

  /** @type {IResultModel<T, E>['match']} */
  async match({ onSuccess, onFailure }) {
    await this.success
      ? onSuccess?.(this.getData())
      : onFailure?.(this.getError());
  }
}
