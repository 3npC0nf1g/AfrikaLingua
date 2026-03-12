"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

type Props = {
    onCountryDetected: (country: string | null) => void
}

export default function QueryHandler({ onCountryDetected }: Props) {
    const searchParams = useSearchParams()

    useEffect(() => {
        const country = searchParams.get("country")

        if (country === "cameroun") {
            onCountryDetected("cameroon")
        }
    }, [searchParams, onCountryDetected])

    return null
}