import React from 'react'

export const Tag = ({text, style = {}}) => {

  return (
    <div
      style={{
        background: "#D6D6D6",
        borderRadius: "20px",
        width: "auto",
        display: "inline-block",
        padding: "10px",
        fontWeight: "bold",
        ...style
      }}
    >
      {text}
    </div>
  )
}
