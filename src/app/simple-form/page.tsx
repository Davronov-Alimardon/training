"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Please enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
      {submitted && <p className="mt-4">Hello, {name}!</p>}
    </div>
  );
}
