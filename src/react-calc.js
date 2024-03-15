import React from 'react'
import MathJS from 'mathjs'

function togglePositives() { showPositives = !showPositives; }

const Math = props => {
  const lang = props.lang
  const equation = props.children[0]
  const result = MathJS.evaluate(equation)
  if (equation) {
    try {
      return React.createElement("span", null, (result < 0 && showPositives ? "" : "+") + result);
    } catch (e) {
      return <span>{e.message}</span>
    }
  } else {
    return <span>Invalid inline math expression</span>
  }
}

export default Math