"use client"

import { useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PhraseCardProps {
  french: string
  yemba: string
  audioText: string
}

export function PhraseCard({ french, yemba, audioText }: PhraseCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = () => {
    if ('speechSynthesis' in window) {
      setIsPlaying(true)
      const utterance = new SpeechSynthesisUtterance(audioText)
      utterance.rate = 0.7
      utterance.pitch = 1
      utterance.onend = () => setIsPlaying(false)
      utterance.onerror = () => setIsPlaying(false)
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-md">
      <div className="flex-1 space-y-1">
        <p className="text-muted-foreground text-sm">{french}</p>
        <p className="text-foreground font-semibold text-lg">{yemba}</p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={playAudio}
        disabled={isPlaying}
        className="h-12 w-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary shrink-0"
      >
        {isPlaying ? (
          <VolumeX className="h-5 w-5 animate-pulse" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
        <span className="sr-only">Écouter la prononciation</span>
      </Button>
    </div>
  )
}
