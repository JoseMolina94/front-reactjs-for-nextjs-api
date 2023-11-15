import React, { useState, useEffect } from 'react'
import "./styles.css"

export const CheckBox = (props) => {
  const {
    name = "",
    value = "",
    onChangeFunc = (props) => {},
    style = {},
    label = "",
    required = false
  } = props
  const [inputValue, setInputValue] = useState(value)

  const onChange = (e) => {
    setInputValue(e.target.checked)
  }

  useEffect(() => {
    onChangeFunc({name, value: inputValue})
  }, [inputValue])

  return (
    <div className="checkbox-container">
      <p
        className="checkbox-label"
        style={{
          fontSize: style?.fontSize && "calc(style?.fontSize - 6px)"
        }}
      >
        {label}
      </p>

      <input
        className="checkbox"
        type="checkbox"
        name={name}
        value={inputValue}
        onChange={onChange}
        style={style}
        required={required}
      />
    </div>
  )
}
