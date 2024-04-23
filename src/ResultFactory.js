/**
 * @implements {IResultFactory}
 */
export default class ResultFactory {
  /**
   * @typedef {import('./IResultFactory.js').IResultFactory} IResultFactory
   */

  /**
   * @typedef {import('./IResultFactory.js').ResultFactoryParams} ResultFactoryParams
   * @typedef {import('./IResultFactory.js').ResultFactoryProperties} ResultFactoryProperties
   */

  /** @type {ResultFactoryProperties['Result']} */
  #Result;

  /** @param {ResultFactoryParams} params */
  constructor({ Result }) {
    this.#Result = Result;
  }

  /** @type {IResultFactory['ok']} */
  ok(data) {
    //@ts-ignore
    return new this.#Result({
      success: true,
      data,
      error: undefined
    });
  }

  /**
   * @type {IResultFactory['fail']}
   */
  fail(error) {
    return new this.#Result({
      success: /** @type {typeof error extends Error ? false : true} */ (false),
      data: undefined,
      error
    });
  }
}
