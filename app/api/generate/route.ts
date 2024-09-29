import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  const phrases = [
    "to the house",
    "with a friend",
    "from the park",
    "at a party",
    "for the exam",
  ];

  const prompt = phrases.join("\n");

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content:
            "Generate 10 random sentences following the same structure as these 5 sentences but using different words, also include the spanish translations, do not include anything else in the response and return it in a json format pairing the english sentence with the spanish translation: " +
            prompt,
        },
      ],
    });
    if (response.choices[0].message.content) {
      const sentences = JSON.parse(response.choices[0].message.content);

      return NextResponse.json({ sentences });
    } else {
      return NextResponse.json({ error: "No content" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: (error as any).message },
      { status: 500 },
    );
  }
}
