# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `Destino-saludo`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `fecha`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@e76147da8e5c81eaf017dede5645551d4b94427b
with:
  Destino-saludo: 'Mona the Octocat'
```
