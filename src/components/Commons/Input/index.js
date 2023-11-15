import React, { useState, useEffect } from 'react'
import "./styles.css"

export const Input = (props) => {
  const {
    name = "",
    value = "",
    onChangeFunc = (props) => {},
    type = "text",
    style = {},
    label = ""
  } = props
  const [inputValue, setInputValue] = useState(value)

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    onChangeFunc({name, value: inputValue})
  }, [inputValue])

  return (
    <div className="input-container">
      <p
        className="input-label"
        style={{
          fontSize: style?.fontSize && "calc(style?.fontSize - 6px)"
        }}
      >
        {label}
      </p>
      {
        type !== "textarea"
        ? <input
          type={type}
          name={name}
          value={inputValue}
          onChange={onChange}
          style={style}
        />
        : <textarea
            name={name}
            value={inputValue}
            onChange={onChange}
          />
      }


    </div>
  )
}
