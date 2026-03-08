"use client"

import { useState } from "react"
import { ChevronRight, Globe, MapPin, Languages, BookOpen, Users, Sparkles, Mic, Bot, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const africanCountries = [
  { id: "cameroon", name: "Cameroun", flag: "🇨🇲", languages: 280, available: true },
  { id: "senegal", name: "Sénégal", flag: "🇸🇳", languages: 36, available: false },
  { id: "nigeria", name: "Nigeria", flag: "🇳🇬", languages: 520, available: false },
  { id: "ethiopia", name: "Éthiopie", flag: "🇪🇹", languages: 90, available: false },
  { id: "kenya", name: "Kenya", flag: "🇰🇪", languages: 68, available: false },
  { id: "ghana", name: "Ghana", flag: "🇬🇭", languages: 80, available: false },
]

const cameroonLanguages = [
  { id: "yemba", name: "Yemba", region: "Ouest", speakers: "300,000+", available: true },
  { id: "ewondo", name: "Ewondo", region: "Centre", speakers: "500,000+", available: false },
  { id: "duala", name: "Duala", region: "Littoral", speakers: "200,000+", available: false },
  { id: "fulfulde", name: "Fulfulde", region: "Nord", speakers: "1,000,000+", available: false },
  { id: "bassa", name: "Bassa", region: "Centre/Littoral", speakers: "300,000+", available: false },
  { id: "ghomala", name: "Ghomala'", region: "Ouest", speakers: "400,000+", available: false },
]

export default function HomePage() {
  const [step, setStep] = useState<"welcome" | "country" | "language">("welcome")
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const handleCountrySelect = (countryId: string) => {
    if (countryId === "cameroon") {
      setSelectedCountry(countryId)
      setStep("language")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => { setStep("welcome"); setSelectedCountry(null) }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Languages className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h1 className="font-bold text-lg text-foreground">AfriLingua</h1>
              <p className="text-xs text-muted-foreground">Langues africaines</p>
            </div>
          </button>
          {step !== "welcome" && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setStep(step === "language" ? "country" : "welcome")}
            >
              Retour
            </Button>
          )}
        </div>
      </header>

      {/* Welcome Screen */}
      {step === "welcome" && (
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center py-12 md:py-20">
            <div className="inline-flex items-center gap-2 bg-accent/50 text-accent-foreground px-4 py-2 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Plus de 2000 langues africaines</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Apprenez les langues <br />
              <span className="text-primary">africaines</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
              Découvrez la richesse linguistique du continent africain. 
              Des leçons interactives avec IA vocale et une communauté pour pratiquer.
            </p>
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => setStep("country")}
            >
              Commencer l'aventure
              <ChevronRight className="w-4 h-4" />
            </Button>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
            <Card className="text-center py-6">
              <CardContent className="p-0">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">54</p>
                <p className="text-sm text-muted-foreground">Pays</p>
              </CardContent>
            </Card>
            <Card className="text-center py-6">
              <CardContent className="p-0">
                <Languages className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">2000+</p>
                <p className="text-sm text-muted-foreground">Langues</p>
              </CardContent>
            </Card>
            <Card className="text-center py-6">
              <CardContent className="p-0">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">1M+</p>
                <p className="text-sm text-muted-foreground">Apprenants</p>
              </CardContent>
            </Card>
          </section>

          {/* AI Voice Technology Highlight */}
          <section className="max-w-3xl mx-auto mb-16">
            <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-6 md:p-8">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      <Bot className="w-4 h-4" />
                      <span>Technologie IA</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      Apprenez avec notre IA Vocale
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Notre assistant vocal intelligent vous guide dans votre apprentissage avec une prononciation 
                      authentique et des corrections en temps réel. Plus besoin de chercher un locuteur natif !
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Volume2 className="w-4 h-4 text-primary" />
                        Prononciation authentique par IA
                      </li>
                      <li className="flex items-center gap-2">
                        <Mic className="w-4 h-4 text-primary" />
                        Correction de votre accent en temps réel
                      </li>
                      <li className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Conversations interactives guidées
                      </li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center p-6 md:p-8 bg-primary/5">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                          <Bot className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                        </div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                        <Mic className="w-3 h-3 text-secondary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Prototype Notice */}
            <div className="mt-4 p-4 bg-accent/30 rounded-lg border border-accent">
              <p className="text-sm text-center text-muted-foreground">
                <span className="font-semibold text-foreground">Version Prototype :</span> Les audios actuels sont des démonstrations. 
                Le MVP final intégrera notre IA vocale avec prononciation native et feedback personnalisé.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Comment ca marche</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">1. Choisissez un pays</h4>
                <p className="text-sm text-muted-foreground">
                  Sélectionnez le pays africain dont vous souhaitez apprendre une langue.
                </p>
              </Card>
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Languages className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">2. Choisissez une langue</h4>
                <p className="text-sm text-muted-foreground">
                  Explorez les langues disponibles et commencez votre apprentissage.
                </p>
              </Card>
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">3. Apprenez et pratiquez</h4>
                <p className="text-sm text-muted-foreground">
                  Suivez des leçons interactives avec audio et testez vos connaissances.
                </p>
              </Card>
            </div>
          </section>
        </main>
      )}

      {/* Country Selection */}
      {step === "country" && (
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Choisissez un pays</h2>
              <p className="text-muted-foreground">
                Sélectionnez le pays dont vous souhaitez apprendre une langue
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {africanCountries.map((country) => (
                <Card 
                  key={country.id}
                  className={`relative overflow-hidden transition-all ${
                    country.available 
                      ? "hover:border-primary hover:shadow-md cursor-pointer" 
                      : "opacity-60 cursor-not-allowed"
                  }`}
                  onClick={() => country.available && handleCountrySelect(country.id)}
                >
                  <CardContent className="p-4">
                    <div className="text-4xl mb-3">{country.flag}</div>
                    <h3 className="font-semibold text-foreground">{country.name}</h3>
                    <p className="text-sm text-muted-foreground">{country.languages} langues</p>
                    {!country.available && (
                      <span className="absolute top-2 right-2 text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                        Bientot
                      </span>
                    )}
                    {country.available && (
                      <span className="absolute top-2 right-2 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        Disponible
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Plus de pays seront ajoutés prochainement. Rejoignez la communauté pour être informé !
            </p>
          </div>
        </main>
      )}

      {/* Language Selection */}
      {step === "language" && selectedCountry === "cameroon" && (
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <span>Afrique</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">Cameroun</span>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🇨🇲</div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Langues du Cameroun</h2>
              <p className="text-muted-foreground">
                Le Cameroun compte plus de 280 langues. Choisissez celle que vous souhaitez apprendre.
              </p>
            </div>

            <div className="grid gap-4">
              {cameroonLanguages.map((language) => (
                <Card 
                  key={language.id}
                  className={`relative overflow-hidden transition-all ${
                    language.available 
                      ? "hover:border-primary hover:shadow-md" 
                      : "opacity-60"
                  }`}
                >
                  {language.available ? (
                    <Link href={`/learn/${language.id}`} className="block">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-lg font-bold text-primary">
                              {language.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{language.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Région {language.region} - {language.speakers} locuteurs
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                            Disponible
                          </span>
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Link>
                  ) : (
                    <CardContent className="p-4 flex items-center justify-between cursor-not-allowed">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-lg font-bold text-muted-foreground">
                            {language.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{language.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Région {language.region} - {language.speakers} locuteurs
                          </p>
                        </div>
                      </div>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                        Bientot
                      </span>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>AfriLingua - Préservons et partageons les langues africaines</p>
        </div>
      </footer>
    </div>
  )
}
