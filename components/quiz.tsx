"use client"

import { useState } from "react"
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, X, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

interface QuizProps {
  questions: QuizQuestion[]
  phrases: Phrase[]
  onComplete: () => void
  onClose: () => void
  color: string
}

export function Quiz({ questions, phrases, onComplete, onClose, color }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const playPhrase = (audioUrl: string) => {
    const audio = new Audio(audioUrl)
    audio.play().catch(() => {})
  }

  const playAllPhrases = async () => {
    for (const phrase of phrases) {
      await new Promise<void>((resolve) => {
        const audio = new Audio(phrase.audioUrl)
        audio.onended = () => resolve()
        audio.onerror = () => resolve()
        audio.play().catch(() => resolve())
      })
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
    setShowResult(true)
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setIsFinished(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setIsFinished(false)
  }

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100)
    const isPassed = percentage >= 70

    return (
        <Card className="border-2" style={{ borderColor: color }}>
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl">Quiz Terminé!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div
                className="text-6xl font-bold"
                style={{ color: isPassed ? 'var(--secondary)' : 'var(--destructive)' }}
            >
              {percentage}%
            </div>
            <p className="text-muted-foreground">
              {score} / {questions.length} réponses correctes
            </p>
            <p className="text-lg font-medium">
              {isPassed
                  ? "Excellent travail! Tu maîtrises bien cette leçon!"
                  : "Continue à pratiquer, tu vas y arriver!"}
            </p>
            <div className="flex gap-3 pt-4">
              <Button
                  variant="outline"
                  onClick={restartQuiz}
                  className="flex-1 gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </Button>
              <Button
                  onClick={() => {
                    if (isPassed) onComplete()
                    onClose()
                  }}
                  className="flex-1"
                  style={{ backgroundColor: color }}
              >
                {isPassed ? "Terminer" : "Fermer"}
              </Button>
            </div>
          </CardContent>
        </Card>
    )
  }

  return (
      <Card className="border-2" style={{ borderColor: color }}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} / {questions.length}
              </p>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                      backgroundColor: color
                    }}
                />
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardTitle className="text-lg">
            {questions[currentQuestion].question}
          </CardTitle>

          {/* Audio Help Section */}
          <div className="p-3 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground mb-2 font-medium">Besoin d'aide? Réécoute les phrases :</p>
            <div className="flex flex-wrap gap-2">
              {phrases.map((phrase, index) => (
                  <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => playPhrase(phrase.audioUrl)}
                      className="text-xs h-7 gap-1"
                  >
                    <Volume2 className="h-3 w-3" />
                    {phrase.yemba}
                  </Button>
              ))}
            </div>
            <Button
                variant="ghost"
                size="sm"
                onClick={playAllPhrases}
                className="mt-2 text-xs h-7 gap-1 w-full"
            >
              <Volume2 className="h-3 w-3" />
              Écouter tout
            </Button>
          </div>

          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === questions[currentQuestion].correctAnswer
              let buttonStyle = "w-full justify-start text-left h-auto py-3 px-4"

              if (showResult) {
                if (isCorrect) {
                  buttonStyle += " bg-secondary/20 border-secondary text-secondary-foreground"
                } else if (isSelected && !isCorrect) {
                  buttonStyle += " bg-destructive/20 border-destructive text-destructive"
                }
              }

              return (
                  <Button
                      key={index}
                      variant="outline"
                      className={buttonStyle}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                  >
                <span className="flex items-center gap-3 w-full">
                  <span className="flex-1">{option}</span>
                  {showResult && isCorrect && (
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 text-destructive shrink-0" />
                  )}
                </span>
                  </Button>
              )
            })}
          </div>

          {showResult && (
              <Button
                  onClick={nextQuestion}
                  className="w-full gap-2"
                  style={{ backgroundColor: color }}
              >
                {currentQuestion < questions.length - 1 ? (
                    <>
                      Question suivante
                      <ArrowRight className="h-4 w-4" />
                    </>
                ) : (
                    "Voir les résultats"
                )}
              </Button>
          )}
        </CardContent>
      </Card>
  )
}
