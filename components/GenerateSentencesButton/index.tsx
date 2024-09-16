"use client"

import { Dispatch, SetStateAction } from "react"

const GenerateSentencesButton = ({
  setSentences,
}: {
  setSentences: Dispatch<
    SetStateAction<{
      sentences: { english: string; spanish: string }[]
    } | null>
  >
}) => {
  const generateSentences = async () => {
    const response = await fetch("/api/generate")
    const data = await response.json()
    setSentences(data.sentences)
  }
  return (
    <button
      className=" px-3 py-2 rounded uppercase font-bold text-white bg-blue-light"
      onClick={generateSentences}
    >
      generate
    </button>
  )
}

export default GenerateSentencesButton
