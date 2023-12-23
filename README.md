# Result
Result

- [Features](#features);
- [Usage](#usage).
    - [Prepare](#prepare);
    - [Commands](#commands).
        - [Result factory](#result-factory);
            - [ok](#ok);
            - [fail](#fail).
        - [Result](#result).
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
Create factory with Result class.

```js
const resultFactory = new ResultFactory({
  Result
});
```

### Commands
- [Result factory](#result-factory);
- [Result](#result).

#### Result factory
- [ok](#ok);
- [fail](#fail).

##### ok
```js
result.ok();
```

```js
result.ok('Data');
```

##### fail
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

#### isSuccess
```js
const isSuccess = result.isSuccess();
```

#### isFailure
```js
const isFailure = result.isFailure();
```

#### getData
```js
const data = result.getData();
```

#### getError
```js
const error = result.getError();
```

#### match
```js
result.match({
  onSuccess: () => {},
  onFailure: () => {}
});
```
