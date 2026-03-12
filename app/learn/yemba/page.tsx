import { Hand, UserCircle, Package, ChevronRight, Bot, Sparkles, Hash } from "lucide-react"
import { LessonCard } from "@/components/lesson-card"
import { CommunitySection } from "@/components/community-section"
import Link from "next/link"

const lessonsData = [
  {
    title: "Compter de 1 à 10",
    icon: <Hash className="h-6 w-6" />,
    color: "#7C5CBF",
    phrases: [
      { french: "Un (1)", yemba: "Wɔ́mɔ̀'ɔ́", audioUrl: "/audio/yemba/nombres/un.ogg" },
      { french: "Deux (2)", yemba: "Mepiā", audioUrl: "/audio/yemba/nombres/deux.ogg" },
      { french: "Trois (3)", yemba: "Métét", audioUrl: "/audio/yemba/nombres/trois.ogg" },
      { french: "Quatre (4)", yemba: "Lekua", audioUrl: "/audio/yemba/nombres/quatre.ogg" },
      { french: "Cinq (5)", yemba: "Métáá", audioUrl: "/audio/yemba/nombres/cinq.ogg" },
      { french: "Six (6)", yemba: "Ntokó", audioUrl: "/audio/yemba/nombres/six.ogg" },
      { french: "Sept (7)", yemba: "Saambiā", audioUrl: "/audio/yemba/nombres/sept.ogg" },
      { french: "Huit (8)", yemba: "Lefaá", audioUrl: "/audio/yemba/nombres/huit.ogg" },
      { french: "Neuf (9)", yemba: "Levu’ó", audioUrl: "/audio/yemba/nombres/neuf.ogg" },
      { french: "Dix (10)", yemba: "Legēm", audioUrl: "/audio/yemba/nombres/dix.ogg" },
    ],
    quizQuestions: [
      {
        question: "Comment dit-on '1' en Yemba?",
        options: ["Pɛ́", "Mɔ̀ʼ", "Tɛ́ʼ", "Kwàʼ"],
        correctAnswer: 1
      },
      {
        question: "Que signifie 'Tɔ́ʼ'?",
        options: ["Trois (3)", "Quatre (4)", "Cinq (5)", "Six (6)"],
        correctAnswer: 2
      },
      {
        question: "Comment dit-on '10' en Yemba?",
        options: ["Vʉ̀ʼ", "Hɔ́m", "Ghɔ̀m", "Sàmbá"],
        correctAnswer: 2
      },
      {
        question: "Que signifie 'Sàmbá'?",
        options: ["Cinq (5)", "Six (6)", "Sept (7)", "Huit (8)"],
        correctAnswer: 2
      }
    ]
  },
  {
    title: "Les Salutations",
    icon: <Hand className="h-6 w-6" />,
    color: "#C45C26",
    phrases: [
      { french: "Bonjour", yemba: "O ziɛ̀?", audioUrl: "/audio/yemba/salutations/bonjour.ogg" },
      { french: "Comment ça va?", yemba: "A lɛ akō", audioUrl: "/audio/yemba/salutations/comment-ca-va.ogg" },
      { french: "Ça va bien", yemba: "Á zɛ̄h pùp", audioUrl: "/audio/yemba/salutations/ca-va-bien.ogg" },
      { french: "Au revoir", yemba: "Ǐ π̄ mbā ōōō", audioUrl: "/audio/yemba/salutations/au-revoir.ogg" },
    ],
    quizQuestions: [
      {
        question: "Comment dit-on 'Bonjour' en Yemba?",
        options: ["Á zɛ̄h pùp", "O ziɛ̀?", "A lɛ akō", "Ǐ π̄ mbā ōōō"],
        correctAnswer: 1
      },
      {
        question: "Que signifie 'A lɛ akō'?",
        options: ["Au revoir", "Ça va bien", "Comment ça va?", "Bonjour"],
        correctAnswer: 2
      },
      {
        question: "Comment dit-on 'Ça va bien' en Yemba?",
        options: ["O ziɛ̀?", "A lɛ akō", "Á zɛ̄h pùp", "Ǐ π̄ mbā ōōō"],
        correctAnswer: 2
      }
    ]
  },
  {
    title: "Se Présenter",
    icon: <UserCircle className="h-6 w-6" />,
    color: "#2D8B6F",
    phrases: [
      { french: "Je m'appelle...", yemba: "Lìn ɛ̀ mɛ̀...", audioUrl: "/audio/yemba/presentation/je-mappelle.mp3" },
      { french: "Je viens de...", yemba: "Mɛ̀ fɔ́ʼ...", audioUrl: "/audio/yemba/presentation/je-viens-de.mp3" },
      { french: "J'habite à...", yemba: "Mɛ̀ cʉ̄ nɛ̀...", audioUrl: "/audio/yemba/presentation/jhabite-a.mp3" },
      { french: "Je suis heureux", yemba: "Mɛ̀ sɛ́ kù", audioUrl: "/audio/yemba/presentation/je-suis-heureux.mp3" },
      { french: "Enchanté de te rencontrer", yemba: "Mɛ̀ sɔ̀ŋ ɔ̄", audioUrl: "/audio/yemba/presentation/enchante.mp3" },
    ],
    quizQuestions: [
      {
        question: "Comment dit-on 'Je m'appelle...' en Yemba?",
        options: ["Mɛ̀ fɔ́ʼ...", "Lìn ɛ̀ mɛ̀...", "Mɛ̀ cʉ̄ nɛ̀...", "Mɛ̀ sɛ́ kù"],
        correctAnswer: 1
      },
      {
        question: "Que signifie 'Mɛ̀ sɛ́ kù'?",
        options: ["Je viens de...", "Je suis heureux", "J'habite à...", "Enchanté"],
        correctAnswer: 1
      },
      {
        question: "Comment dit-on 'Je viens de...' en Yemba?",
        options: ["Lìn ɛ̀ mɛ̀...", "Mɛ̀ cʉ̄ nɛ̀...", "Mɛ̀ fɔ́ʼ...", "Mɛ̀ sɔ̀ŋ ɔ̄"],
        correctAnswer: 2
      }
    ]
  },
  {
    title: "Objets du Quotidien",
    icon: <Package className="h-6 w-6" />,
    color: "#D4A84B",
    phrases: [
      { french: "L'eau", yemba: "Mɛ̀ndʉ̄", audioUrl: "/audio/yemba/objets/eau.mp3" },
      { french: "La nourriture", yemba: "Mɛ̀ʼjɛ́", audioUrl: "/audio/yemba/objets/nourriture.mp3" },
      { french: "La maison", yemba: "Ndâp", audioUrl: "/audio/yemba/objets/maison.mp3" },
      { french: "Le lit", yemba: "Mbʉ̀ə̀", audioUrl: "/audio/yemba/objets/lit.mp3" },
      { french: "La table", yemba: "Tɛ̀bə̀l", audioUrl: "/audio/yemba/objets/table.mp3" },
      { french: "La chaise", yemba: "Sìà", audioUrl: "/audio/yemba/objets/chaise.mp3" },
    ],
    quizQuestions: [
      {
        question: "Comment dit-on 'L'eau' en Yemba?",
        options: ["Ndâp", "Mɛ̀ndʉ̄", "Mɛ̀ʼjɛ́", "Sìà"],
        correctAnswer: 1
      },
      {
        question: "Que signifie 'Ndâp'?",
        options: ["Le lit", "L'eau", "La maison", "La table"],
        correctAnswer: 2
      },
      {
        question: "Comment dit-on 'La chaise' en Yemba?",
        options: ["Tɛ̀bə̀l", "Mbʉ̀ə̀", "Ndâp", "Sìà"],
        correctAnswer: 3
      },
      {
        question: "Que signifie 'Mɛ̀ʼjɛ́'?",
        options: ["La nourriture", "L'eau", "La maison", "Le lit"],
        correctAnswer: 0
      }
    ]
  }
]

export default function YembaLearnPage() {
  return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Link href="/" className="hover:text-foreground transition-colors">
                AfriLingua
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/?country=cameroun" className="hover:text-foreground transition-colors">
                Cameroun
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">Yemba</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">Y</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-foreground">Apprendre le Yemba</h1>
                <p className="text-sm text-muted-foreground">Région Ouest du Cameroun - 300,000+ locuteurs</p>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-2xl">
          {/* AI Voice Feature Banner */}
          <section className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground text-sm">IA Vocale AfriLingua</h3>
                  <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  MVP
                </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Les audios actuels sont des démonstrations. Le MVP intégrera notre IA vocale avec
                  prononciation native, correction d'accent et conversations interactives.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Section */}
          <section className="mb-8 p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Ta progression</span>
              <span className="text-sm text-muted-foreground">0 / 4 leçons</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "0%" }} />
            </div>
          </section>

          {/* Lessons */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Tes leçons
            </h2>
            <p className="text-muted-foreground mb-6">
              Clique sur une leçon pour commencer à apprendre
            </p>

            <div className="space-y-4">
              {lessonsData.map((lesson, index) => (
                  <LessonCard
                      key={index}
                      title={lesson.title}
                      icon={lesson.icon}
                      phrases={lesson.phrases}
                      quizQuestions={lesson.quizQuestions}
                      color={lesson.color}
                  />
              ))}
            </div>
          </section>

          {/* Community */}
          <section>
            <CommunitySection />
          </section>
        </main>

        <footer className="border-t border-border py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              AfriLingua - Préservons et partageons les langues africaines
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Fait avec amour pour la culture camerounaise
            </p>
          </div>
        </footer>
      </div>
  )
}
