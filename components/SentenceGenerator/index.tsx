"use client";

import { useState } from "react";
import GenerateSentencesButton from "../molecules/GenerateSentencesButton";
import Button from "../atoms/Button";

const SentenceGenerator = () => {
  const [sentences, setSentences] = useState<{
    sentences: { english: string; spanish: string }[];
  } | null>(null);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);

  return (
    <div className="mt-12 flex flex-col gap-6 border-4 border-grey-dark p-6">
      <div className="flex w-full justify-center">
        <GenerateSentencesButton {...{ setSentences }} />
      </div>

      {sentences && (
        <div className="">
          <div className="flex flex-col gap-4">
            {sentences.sentences.map((sentence, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-start gap-6"
                >
                  <p className="w-[250px] flex-1 whitespace-nowrap text-right text-2xl font-bold text-grey-dark">
                    {sentence.english}
                  </p>
                  <input
                    type="text"
                    className="flex-1 border-2 border-grey-light px-2 py-1 text-2xl text-grey-dark"
                  />
                  <div className="flex-1">
                    {showAnswers && (
                      <p className="w-[250px] whitespace-nowrap text-2xl font-bold text-emerald-green">
                        {sentence.spanish}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="mt-6 flex w-full justify-center">
        <Button
          onClick={() => {
            setShowAnswers(true);
          }}
        >
          Check Answers
        </Button>
      </div>
    </div>
  );
};

export default SentenceGenerator;
