//* React Import
import React from "react";

//* CardProps Import
import { CardContentProps } from "@/interface/interfaces";

//* interface CardProps
interface CardProps {
  Content: CardContentProps;
}

export const Card = ({ Content }: CardProps) => {
  return (
    <div
      aria-label="card"
      className="border-2 w-fit border-dotted rounded-md border-cyan-600 cursor-grab p-2.5"
    >
      <section aria-label="card-title" className="text-[1.5rem]">
        {Content.card_title}
      </section>
      <p aria-label="card-description">{Content.card_description}</p>
    </div>
  );
};
