//* React Import
import React from "react";

//* CardProps Import
import { CardContentProps } from "@/interface/interfaces";

export const Card = ({ card_title, card_description }: CardContentProps) => {
  return (
    <div
      aria-label="card"
      className="border-2 w-fit border-dotted rounded-md border-cyan-600 cursor-grab p-2.5"
    >
      <section aria-label="card-title" className="text-[1.5rem]">
        {card_title}
      </section>
      <p aria-label="card-description">{card_description}</p>
    </div>
  );
};
