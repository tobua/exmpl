import React from 'react'

const codeStyles = {
  fontFamily: 'monospace',
  // Firefox has less line height otherwise.
  lineHeight: '120%',
  padding: 10,
  overflow: 'auto',
  background: '#EEEEEE',
}

type PreProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>

export const Code = ({
  style = {},
  children,
  ...props
}: PreProps & { children: string }) => (
  <pre style={{ ...codeStyles, ...style }} {...props}>
    {children}
  </pre>
)
