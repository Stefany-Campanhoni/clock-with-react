import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const currentTime = new Date()

  const [hours, setHours] = useState(currentTime.getHours())
  const [minutes, setMinutes] = useState(currentTime.getMinutes())
  const [seconds, setSeconds] = useState(currentTime.getSeconds())

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1)

      if (seconds == 59) {
        setSeconds(0)
        setMinutes(minutes + 1)
      }
      if (minutes == 59) {
        setMinutes(0)
        setHours(hours + 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <div className="App">
      <p>
        {hours > 9 ? hours : "0" + hours}:
        {minutes > 9 ? minutes : "0" + minutes}
        <span>:{seconds > 9 ? seconds : "0" + seconds}</span>
      </p>
    </div>
  )
}

export default App
