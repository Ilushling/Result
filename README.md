# Result
Result model with model factory and match on success & on failure callbacks.

- [Features](#features);
- [Usage](#usage):
    - [Prepare](#prepare);
        - [Create model factory](#create-model-factory);
        - [Import types](#import-types).
    - [Commands](#commands):
        - [Result factory](#result-factory):
            - [Ok](#ok);
            - [Fail](#fail).
        - [Result](#result):
            - [isSuccess](#isSuccess);
            - [isFailure](#isFailure);
            - [getData](#getData);
            - [getError](#getError);
            - [match](#match).

## Features
1) Data in success;
2) Error in failure;
3) Match with onSuccess & onFailure callbacks;
4) Factory.

## Usage
- [Prepare](#prepare);
- [Commands](#commands).

### Prepare
#### Create model factory
```js
import { ResultModelFactory, ResultModel } from 'sufa';

const resultModelFactory = new ResultModelFactory({
  Model: ResultModel
});
```

#### Import types
```js
/**
 * @import { IResultModelFactory, IResultModel } from 'sufa'
 */
```

### Commands
#### Result factory
##### Ok
```js
const okResult = resultModelFactory.ok();
const okDataResult = resultModelFactory.ok('data');
```

##### Fail
```js
const error = new Error('Message');

result.fail(error);
```

#### Result
- [isSuccess](#isSuccess);
- [isFailure](#isFailure);
- [getData](#getData);
- [getError](#getError);
- [match](#match).

##### isSuccess
```js
const isSuccess = result.success;
```

##### isFailure
```js
const isFailure = result.failure;
```

##### getData
```js
const data = result.getData();
```

##### getError
```js
const error = result.getError();
```

##### match
```js
result.match({
  onSuccess: () => {},
  onFailure: () => {}
});
```
