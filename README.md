# exmpl

<img align="right" src="https://raw.githubusercontent.com/tobua/exmpl/main/logo.svg" width="20%" alt="exmpl" />

Quickly create stylish previews for your digital creations

- For packages published to npm or on GitHub
- Quick way to scaffold a preview or demo
- `Button`, `Input`, `Grid`, `Code` and `Tabs` elements

## Usage with React

```tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Exmpl, Code } from 'exmpl'

createRoot(document.body).render(
  <Exmpl title="exmpl Demo" npm="exmpl" github="tobua/exmpl">
    <p>This is the introduction.</p>
    <h2>Installation & Usage</h2>
    <Code>{`npm i exmpl`}</Code>
  </Exmpl>
)
```

`title` can be any React element, npm and github are optional and can be preprended with further icons.

```tsx
<Exmpl title={<h4>Title</h4>} icons={<a href="google.com">Google</a>} npm="exmpl" />
```

## Elements

Includes `Button`, `Input`, `Grid`, `Code` and `Tabs` elements, refer to the [Demo](https://github.com/tobua/exmpl/blob/main/demo/index.tsx) for usage documentation.
