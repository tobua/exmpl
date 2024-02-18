const styles = {
  background: 'black',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  paddingLeft: 10,
  paddingRight: 10,
  height: 40,
}

export function Button({ type, style = {}, ...props }: JSX.IntrinsicElements['button']) {
  return <button type="button" style={{ ...styles, ...style }} {...props} />
}
