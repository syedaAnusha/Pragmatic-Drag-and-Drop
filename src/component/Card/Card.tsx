//* React Import
import React from "react";

//* CardProps Import
import { CardContentProps } from "@/interface/interfaces";

//* interface CardProps
interface CardProps {
  content: CardContentProps;
}

export const Card = ({ content }: CardProps) => {
  return (
    <div
      aria-label="card"
      className="border-2 w-fit border-dotted rounded-md border-cyan-600 cursor-grab p-2.5"
    >
      <section aria-label="card-title" className="text-[1.5rem]">
        {content.card_title}
      </section>
      <p aria-label="card-description">{content.card_description}</p>
    </div>
  );
};
