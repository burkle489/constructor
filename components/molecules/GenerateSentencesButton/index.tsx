"use client";

import { Dispatch, SetStateAction } from "react";
import Button from "../../atoms/Button";

const GenerateSentencesButton = ({
  setSentences,
}: {
  setSentences: Dispatch<
    SetStateAction<{
      sentences: { english: string; spanish: string }[];
    } | null>
  >;
}) => {
  const generateSentences = async () => {
    const response = await fetch("/api/generate");
    const data = await response.json();
    setSentences(data.sentences);
  };
  return <Button onClick={generateSentences}>generate</Button>;
};

export default GenerateSentencesButton;
