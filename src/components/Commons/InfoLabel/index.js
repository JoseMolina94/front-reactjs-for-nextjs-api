import React from "react"

export const InfoLabel = props => {
  const {
    label,
    infoValue,
    isLink = false,
    style = {}
  } = props

  return (
    <p style={style}>
      <strong>{label}:</strong> {isLink ? <a href={infoValue} target="_blank">{infoValue}</a> : infoValue}
    </p>
  )
}
