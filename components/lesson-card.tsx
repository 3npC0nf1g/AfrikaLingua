"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Volume2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhraseCard } from "./phrase-card"
import { Quiz } from "./quiz"

interface Phrase {
  french: string
  yemba: string
  audioUrl: string
}

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
}

interface LessonCardProps {
  title: string
  icon: React.ReactNode
  phrases: Phrase[]
  quizQuestions: QuizQuestion[]
  color: string
}

export function LessonCard({ title, icon, phrases, quizQuestions, color }: LessonCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const playAllAudio = async () => {
    for (const phrase of phrases) {
      await new Promise<void>((resolve) => {
        const audio = new Audio(phrase.audioUrl)
        audio.onended = () => resolve()
        audio.onerror = () => resolve()
        audio.play().catch(() => resolve())
      })
      // Small pause between phrases
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }

  return (
      <Card className={`overflow-hidden border-2 transition-all duration-300 ${isExpanded ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}`} style={{ borderColor: isExpanded ? color : 'transparent' }}>
        <CardHeader
            className="cursor-pointer select-none"
            onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                  className="p-3 rounded-xl text-card"
                  style={{ backgroundColor: color }}
              >
                {icon}
              </div>
              <div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <p className="text-sm text-muted-foreground">{phrases.length} expressions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {quizCompleted && (
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
              )}
              {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
          </div>
        </CardHeader>

        {isExpanded && (
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {phrases.map((phrase, index) => (
                    <PhraseCard
                        key={index}
                        french={phrase.french}
                        yemba={phrase.yemba}
                        audioUrl={phrase.audioUrl}
                    />
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                    onClick={playAllAudio}
                    variant="outline"
                    className="flex-1 gap-2"
                >
                  <Volume2 className="h-4 w-4" />
                  Écouter tout
                </Button>
                <Button
                    onClick={() => setShowQuiz(true)}
                    className="flex-1"
                    style={{ backgroundColor: color }}
                >
                  Faire le Quiz
                </Button>
              </div>

              {showQuiz && (
                  <Quiz
                      questions={quizQuestions}
                      phrases={phrases}
                      onComplete={() => {
                        setQuizCompleted(true)
                        setShowQuiz(false)
                      }}
                      onClose={() => setShowQuiz(false)}
                      color={color}
                  />
              )}
            </CardContent>
        )}
      </Card>
  )
}
