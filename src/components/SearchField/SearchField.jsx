import { useState } from "react"

export function SearchField() {
  const [text, setText] = useState("")

  function updateText(event) {
    console.log(event.target.value)
    setText(event.target.value)
  }

  return (
    <div>
      <input type="text" onChange={updateText} value={text} />

      <p>{text}</p>
    </div>
  )
}