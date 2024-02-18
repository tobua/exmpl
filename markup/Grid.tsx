import type { CSSProperties } from 'react'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: window.innerWidth < 750 ? 'column' : 'row',
}

const elementStyle = {
  flex: '1 1 0%',
}

export function Grid({ style = {}, children, ...props }: JSX.IntrinsicElements['div']) {
  if (!children || !Array.isArray(children) || children.length === 0) {
    return null
  }

  if (children.length === 1) {
    return <div style={{ ...wrapperStyle, ...style }}>{children}</div>
  }

  return (
    <div style={{ ...wrapperStyle, ...style }} {...props}>
      <div style={elementStyle}>{children[0]}</div>
      <div style={elementStyle}>{children[1]}</div>
    </div>
  )
}
