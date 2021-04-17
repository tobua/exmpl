import React, { ReactNode, ReactChild, ReactElement } from 'react'
// Relative to dist folder after build.
import npmIcon from '../asset/npm.svg'
import githubIcon from '../asset/github.png'

export { Code } from './markup/Code'
export { Button } from './markup/Button'
export { Input } from './markup/Input'
export { Grid } from './markup/Grid'
export { Tabs } from './markup/Tabs'

const Title = ({ title }: { title: ReactChild }) => {
  if (typeof title === 'string') {
    return <h1>{title}</h1>
  }

  return title as ReactElement
}

const wrapperStyles = {
  fontFamily: 'sans-serif',
  maxWidth: window.innerWidth < 750 ? '95vw' : '75vw',
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
