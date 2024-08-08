/**
 * @import { IResultModelFactory } from './IModelFactory.js'
 * 
 * @import { ResultModelConstructable } from './Model.js'
 * 
 * @import { IResultModel } from './IModel.js'
 */

/**
 * @implements {IResultModelFactory}
 */
export default class ResultModelFactory {
  /**
   * @typedef {ResultModelFactoryDependencies} ResultModelFactoryParams
   * @typedef {ResultModelFactoryDependencies} ResultModelFactoryProperties
   * 
   * @typedef {object} ResultModelFactoryDependencies
   * @property {ResultModelConstructable} Model
   */

  /** @type {ResultModelFactoryProperties['Model']} */
  #Model;

  /** @param {ResultModelFactoryParams} params */
  constructor({ Model }) {
    this.#Model = Model;
  }

  /**
   * @template {unknown} T
   * 
   * @overload
   * @param {T} data
   * @returns {IResultModel<T, undefined>}
   * 
   * @overload
   * @returns {IResultModel<T, undefined>}
   * 
   * @param {T=} data
   * @returns {IResultModel<T | undefined, undefined>}
   * 
   * @type {IResultModelFactory['ok']}
   */
  ok(data) {
    return new this.#Model({
      success: true,
      data,
      error: undefined
    });
  }

  /** @type {IResultModelFactory['fail']} */
  fail(error) {
    return new this.#Model({
      success: /** @type {typeof error extends Error ? false : true} */ (false),
      data: undefined,
      error
    });
  }
}
