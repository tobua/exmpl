# exmpl

<img align="right" src="https://raw.githubusercontent.com/naminho/exmpl/master/logo.svg?sanitize=true" width="20%" alt="exmpl" />

Quickly create stylish previews for your digital creations

> See the [Version 1](https://github.com/tobua/exmpl/tree/release/1.0.3) branch for the old CSS based version documentation.

[![exmpl Demo](https://img.shields.io/static/v1?label=exmpl&message=Demo&color=brightgreen)](https://tobua.github.io/exmpl)
[![npm](https://img.shields.io/npm/v/exmpl)](https://npmjs.com/exmpl)

## Installation & Usage

```
npm i exmpl
```

```tsx
import React from 'react'
import { render } from 'react-dom'
import { Exmpl, Code } from 'exmpl'

render(
  <Exmpl title="exmpl Demo" npm="exmpl" github="tobua/exmpl">
    <p>This is the introduction.</p>
    <h2>Installation & Usage</h2>
    <Code>{`npm i exmpl`}</Code>
  </Exmpl>,
  document.body
)
```

`title` can be any React element, npm and github are optional and can be preprended with further icons.

```tsx
<Exmpl
  title={<h4>Title</h4>}
  icons={<a href="google.com">Google</a>}
  npm="exmpl"
/>
```
