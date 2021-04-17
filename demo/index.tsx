import React from 'react'
import { render } from 'react-dom'
import { Exmpl, Code, Button, Input, Grid, Tabs } from 'exmpl'

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
    <p>React Components to quickly create a preview.</p>
    <h2>Installation & Usage</h2>
    <Code>{`npm i exmpl`}</Code>
    <Code>{usageCode}</Code>
    <h2>Elements</h2>
    <h3>Button</h3>
    <Button onClick={() => alert('Hello')}>Click me</Button>
    <h3>Input</h3>
    <Input placeholder="First name" />
    <h3>50 / 50 Grid</h3>
    <p>100 Grid below 750 pixel viewport.</p>
    <Grid>
      <p>Left</p>
      <p>Right</p>
    </Grid>
    <h3>Tabs</h3>
    <Tabs labels={['Options', 'Integration', 'Test Cases']}>
      <p>Options content</p>
      <p>Integration content</p>
      <p>Test cases content</p>
    </Tabs>
    <h3>Code</h3>
    <Code>{`npm i exmpl`}</Code>
  </Exmpl>,
  document.body
)
