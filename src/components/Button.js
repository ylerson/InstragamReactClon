import React from "react"

export const Button = ({value, nameClass, handle}) => {
  return (
    <button onClick={handle} className={nameClass}> {value}</button>
  )
}
