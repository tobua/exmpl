import { type CSSProperties, useState, useEffect } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'inline-flex',
  verticalAlign: 'top',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '#EEEEEE',
  paddingLeft: 3,
  paddingRight: 3,
  height: 40,
}

const labelStyles = {
  fontSize: 10,
  marginLeft: 3,
  marginBottom: 2,
}

const inputStyles = {
  border: 'none',
  // borderBottom: '1px solid black',
  background: 'none',
  outline: 'none',
}

const generateRandomID = () => Math.random().toString(36).substr(2, 9)

export function Input({
  id = generateRandomID(),
  value = '',
  style = {},
  onChange,
  onValue,
  ...props
}: JSX.IntrinsicElements['input'] & { label?: string; onValue?: (value: any) => void }) {
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  return (
    <div style={{ ...wrapperStyles, ...style }}>
      <label htmlFor={id} style={labelStyles}>
        {props.label ?? props.placeholder}
      </label>
      <input
        id={id}
        style={inputStyles}
        {...props}
        value={currentValue}
        onChange={(event) => {
          setCurrentValue(event.target.value)

          if (onValue) {
            onValue(event.target.value)
          }

          if (onChange && typeof onChange === 'function') {
            onChange(event)
          }
        }}
      />
    </div>
  )
}
