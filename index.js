import Result from './src/Result.js';
import ResultFactory from './src/ResultFactory.js';

export {
  ResultFactory,
  Result
};

/**
 * @template {unknown} [T=undefined]
 * @template {Error=} [E=undefined]
 * 
 * @typedef {import('./src/IResult.js').IResult<T, E>} IResult
 */

/**
 * @typedef {import('./src/IResultFactory.js').IResultFactory} IResultFactory
 */
