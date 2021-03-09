import React from 'react'
import { render } from 'react-dom'
import { Exmpl, Code } from 'exmpl'

const usageCode = `import React from 'react'
import { render } from 'react-dom'
import { Exmpl, Code } from 'exmpl'

render(
  <Exmpl title="exmpl Demo" npm="exmpl" github="tobua/exmpl">
    <p>This is the introduction.</p>
    <h2>Installation & Usage</h2>
    <Code>{\`npm i exmpl\`}</Code>
  </Exmpl>,
  document.body
)`

render(
  <Exmpl title="exmpl Demo" npm="exmpl" github="tobua/exmpl">
    <p>This is the introduction.</p>
    <h2>Installation & Usage</h2>
    <Code>{`npm i exmpl`}</Code>
    <Code>{usageCode}</Code>
  </Exmpl>,
  document.body
)
