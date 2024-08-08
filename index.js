import ResultModel from './src/Model.js';
import ResultModelFactory from './src/ModelFactory.js';

/**
 * @import { IResultModel } from './src/IModel.js'
 * @import { IResultModelFactory } from './src/IModelFactory.js'
 */

export {
  ResultModelFactory,
  ResultModel
};

/**
 * @template {unknown} [T=undefined]
 * @template {Error=} [E=undefined]
 * 
 * @typedef {IResultModel<T, E>} IResultModel
 */

/**
 * @typedef {IResultModelFactory} IResultModelFactory
 */
