const codeStyles = {
  fontFamily: 'monospace',
  // Firefox has less line height otherwise.
  lineHeight: '120%',
  padding: 10,
  overflow: 'auto',
  background: '#EEEEEE',
}

export function Code({
  style = {},
  children,
  ...props
}: JSX.IntrinsicElements['pre'] & { children: string }) {
  return (
    <pre style={{ ...codeStyles, ...style }} {...props}>
      {children}
    </pre>
  )
}
