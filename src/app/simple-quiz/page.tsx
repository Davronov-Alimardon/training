"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function SimpleQuiz() {
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    setAnswered(true);
    setCorrect(isCorrect);
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Simple Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Is London the capital of United Kingdom?</p>
        <div className="space-x-4">
          <Button onClick={() => handleAnswer(true)} disabled={answered}>
            True
          </Button>
          <Button onClick={() => handleAnswer(false)} disabled={answered}>
            False
          </Button>
        </div>
        {answered && <p className="mt-4">{correct ? "Correct answer!" : "Wrong answer."}</p>}
      </CardContent>
    </Card>
  );
}
