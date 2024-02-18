import { useState, type CSSProperties } from 'react'

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
}

const buttonStyles = (active: boolean) =>
  ({
    background: 'none',
    border: 'none',
    outline: 'none',
    fontWeight: active ? 'bold' : 'normal',
    cursor: active ? 'auto' : 'pointer',
    padding: '10px 0',
  }) as CSSProperties

type Props = {
  labels: string[]
  initialTab?: number
  onChange?: (label: string, index: number) => void
} & Omit<JSX.IntrinsicElements['div'], 'onChange'>

export function Tabs({ labels, children, initialTab = 0, style = {}, onChange, ...props }: Props) {
  const [index, setIndex] = useState(initialTab)

  if (!children || !Array.isArray(children) || children.length === 0) {
    return null
  }

  const content = index in children ? children[index] : <p>Content not found.</p>

  return (
    <>
      <div style={{ ...wrapperStyle, ...style }} {...props}>
        {labels.map((label, currentIndex) => (
          <button
            key={currentIndex}
            type="button"
            style={buttonStyles(currentIndex === index)}
            onClick={() => {
              setIndex(currentIndex)

              if (typeof onChange === 'function') {
                onChange(labels[currentIndex], currentIndex)
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {content}
    </>
  )
}
