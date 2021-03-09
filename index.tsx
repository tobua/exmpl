import React, { ReactNode } from 'react'
// Relative to dist folder after build.
import npmIcon from '../asset/npm.svg'
import githubIcon from '../asset/github.png'

const wrapperStyles = {
  fontFamily: 'sans-serif',
  maxWidth: '75vw',
  margin: '0 auto',
}

const headerStyles = { display: 'flex' }

const navStyles = {
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
}

const linkStyles = (end: boolean) => ({
  width: 30,
  height: 30,
  marginLeft: end ? 0 : 10,
})

interface Props {
  title?: string
  npm?: string
  github?: string
  children: ReactNode
}

export const Exmpl = ({ title = 'Demo', npm, github, children }: Props) => (
  <div style={wrapperStyles}>
    <header style={headerStyles}>
      <h1>{title}</h1>
      <nav style={navStyles}>
        <a href={`https://npmjs.com/${npm}`}>
          <img alt="npm Link" style={linkStyles(true)} src={npmIcon} />
        </a>
        <a href={`https://github.com/${github}`}>
          <img alt="github Link" style={linkStyles(false)} src={githubIcon} />
        </a>
      </nav>
    </header>
    {children}
  </div>
)

const codeStyles = {
  fontFamily: 'monospace',
  border: '1px solid black',
  borderRadius: 8,
  padding: 10,
  boxShadow: 'inset 0 0 3px #000000',
  overflow: 'auto',
}

export const Code = ({ children }: { children: string }) => (
  <pre style={codeStyles}>{children}</pre>
)
