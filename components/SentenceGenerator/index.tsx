"use client"

import { useState } from "react"
import GenerateSentencesButton from "../GenerateSentencesButton"

const SentenceGenerator = () => {
  const [sentences, setSentences] = useState<{
    sentences: { english: string; spanish: string }[]
  } | null>(null)
  const [showAnswers, setShowAnswers] = useState<boolean>(false)

  return (
    <div className="bg-white mt-12 p-6 rounded-lg flex flex-col gap-6">
      <div className="w-full flex justify-center">
        <GenerateSentencesButton {...{ setSentences }} />
      </div>

      {sentences && (
        <div className="">
          <div className="flex flex-col gap-4">
            {sentences.sentences.map((sentence, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-6 items-center justify-start"
                >
                  <p className="flex-1 text-right whitespace-nowrap text-blue-light font-bold text-2xl w-[250px]">
                    {sentence.english}
                  </p>
                  <input
                    type="text"
                    className="flex-1 px-2 py-1 text-blue-dark text-2xl  border border-blue-dark rounded"
                  />
                  <div className="flex-1">
                    {showAnswers && (
                      <p className="whitespace-nowrap text-green-500 font-bold text-2xl w-[250px]">
                        {sentence.spanish}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      <div className="w-full flex justify-center mt-6">
        <button
          className=" px-3 py-2 rounded uppercase font-bold text-white bg-blue-light"
          onClick={() => {
            setShowAnswers(true)
          }}
        >
          Check Answers
        </button>
      </div>
    </div>
  )
}

export default SentenceGenerator
