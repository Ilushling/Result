import assert from 'node:assert';
import { describe, it } from 'node:test';

import Result from '../src/Result.js';
import ResultFactory from '../src/ResultFactory.js';

const resultFactory = new ResultFactory({
  Result
});

describe('Result', () => {
  describe('Is', () => {
    it('Success', () => {
      const result = resultFactory.ok();

      assert.ok(result.success);
    });

    it('Failure', () => {
      const error = new Error('Test');

      const result = resultFactory.fail(error);

      assert.ok(result.failure);
    });
  });

  describe('Get', () => {
    it('Data', () => {
      const data = 1;

      const result = resultFactory.ok(data);

      assert.strictEqual(result.getData(), data);
    });

    it('Error', () => {
      const error = new Error('Test');

      const result = resultFactory.fail(error);

      assert.strictEqual(result.getError(), error);
    });
  });

  describe('Match', () => {
    it('Success', () => {
      const result = resultFactory.ok();

      result.match({
        onSuccess: () => assert.ok(true),
        onFailure: () => assert.fail('onFailure must not be called')
      });
    });

    it('Failure', () => {
      const error = new Error('Test');

      const result = resultFactory.fail(error);

      result.match({
        onSuccess: () => assert.fail('onSuccess must not be called'),
        onFailure: () => assert.ok(true)
      });
    });
  });
});
