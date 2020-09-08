<p align="center">
  <img src="https://raw.githubusercontent.com/naminho/exmpl/master/logo.svg?sanitize=true" alt="exmpl">
</p>

# exmpl

> Quickly create stylish previews for your digital creations

## Installation

```
npm i exmpl
```

## Getting Started

Just add it to your `HTML` files

```html
<html>
  <head>
    <link href="node_modules/exmpl/dist/styles.css" rel="stylesheet" />
  </head>
  <body>
    <h1>Plugin Examples</h1>
    <ul>
      <li>
        <a href="first.html">First Feature</a>
      </li>
    </ul>
  </body>
</html>
```

or if you are already bundling your `CSS`

```
import 'exmpl'
```

## Variants

`styles-no-layout.css`

Without layout, useful when you want your own layout.

`styles-opt-out.css`

Opt-out of exmpl styling by setting a class attribute on the tags. Can be used
to mix documentation and already styled result markup.

`styles-opt-out-no-layout.css`

Combination of the two above.

## Development

To adapt the stylesheet simply change the `SASS` files inside `src` and and generate the new assets with

```
npm run build
```
