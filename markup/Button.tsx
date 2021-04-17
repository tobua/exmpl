import React from 'react'

const styles = {
  background: 'black',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  paddingLeft: 10,
  paddingRight: 10,
  height: 40,
}

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = ({ type, style = {}, ...props }: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button style={{ ...styles, ...style }} type={type ?? 'button'} {...props} />
)
