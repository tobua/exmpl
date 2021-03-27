import React, { ReactNode, ReactChild, ReactElement } from 'react'
// Relative to dist folder after build.
import npmIcon from '../asset/npm.svg'
import githubIcon from '../asset/github.png'

const Title = ({ title }: { title: ReactChild }) => {
  if (typeof title === 'string') {
    return <h1>{title}</h1>
  }

  return title as ReactElement
}

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
  flexWrap: 'wrap' as 'wrap',
}

const linkStyles = (end: boolean) => ({
  width: 30,
  height: 30,
  marginLeft: end ? 0 : 10,
  display: 'block',
})

interface Props {
  title?: string | ReactChild
  npm?: string
  github?: string
  icons?: ReactChild
  children: ReactNode
}

export const Exmpl = ({
  title = 'Demo',
  npm,
  github,
  icons,
  children,
}: Props) => (
  <div style={wrapperStyles}>
    <header style={headerStyles}>
      <Title title={title} />
      <nav style={navStyles}>
        {icons}
        {npm && (
          <a href={`https://npmjs.com/${npm}`}>
            <img alt="npm Link" style={linkStyles(true)} src={npmIcon} />
          </a>
        )}
        {github && (
          <a href={`https://github.com/${github}`}>
            <img alt="github Link" style={linkStyles(false)} src={githubIcon} />
          </a>
        )}
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
