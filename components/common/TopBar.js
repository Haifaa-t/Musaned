"use client"

import { useEffect, useState } from "react"
import {
  Cloud,
  Calendar,
  Clock,
  MapPin,
  Mic,
  ZoomIn,
  ZoomOut,
  Eye,
} from "lucide-react"

export default function SecondNavHeader() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const optionsDate = { day: 'numeric', month: 'short', year: 'numeric' }
      const optionsTime = { hour: 'numeric', minute: '2-digit', hour12: true }

      const formattedDate = now.toLocaleDateString("en-GB", optionsDate).replace(/ /g, "-")
      const formattedTime = now.toLocaleTimeString("en-GB", optionsTime)

      setDate(formattedDate)
      setTime(formattedTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const handleMic = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser.")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = "en-US"
    recognition.interimResults = false

    recognition.onstart = () => {
      console.log("Listening...")
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      console.log(" You said:", transcript)
      alert(" You said: " + transcript)
    }

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error)
    }

    recognition.start()
  }

  const handleZoomIn = () => {
    document.body.style.zoom = `${(parseFloat(document.body.style.zoom || "1") + 0.1).toFixed(1)}`
  }

  const handleZoomOut = () => {
    document.body.style.zoom = `${(parseFloat(document.body.style.zoom || "1") - 0.1).toFixed(1)}`
  }

  return (
    <div className="hidden sm:flex w-full h-[40px] bg-[#F3F4F6] px-4 sm:px-8 items-center justify-center">
      <div className="max-w-[1280px] w-full h-[32px] flex items-center justify-between text-[12px] leading-[16px] font-normal text-[#1F2A37]">
        {/* Left */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-[#384250]" />
            <span>Cloudy</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#384250]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#384250]" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#384250]" />
            <span>Al-Riyadh</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-[#161616]">
          <button onClick={handleMic}>
            <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button onClick={handleZoomOut}>
            <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button onClick={handleZoomIn}>
            <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button>
            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}


