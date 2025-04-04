import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

function PlayCard({ question, answer,id }) {
  let [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{setIsVisible(false)},[id])

  return (
    <Card
      className="w-full h-full backdrop-blur-xl shadow-lg bg-blue-200 flex flex-col items-center justify-center rounded-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      onClick={() => setIsVisible(!isVisible)}
    >
      <CardContent className="h-full w-full flex items-center justify-center text-center">
        <h3 className="text-3xl">{isVisible ? answer : question}</h3>
      </CardContent>
    </Card>
  );
}

export default PlayCard;
