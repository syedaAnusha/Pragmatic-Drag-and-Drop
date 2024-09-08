//* React Import
import { useEffect, useRef, useState } from "react";

//* Pragmatic & other Imports
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";

//* CardProps Import
import { CardContentProps } from "@/interface/interfaces";

//* interface CardProps
interface CardProps {
  content: CardContentProps;
}

export const Card = ({ content }: CardProps) => {
  //* use Hooks
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    invariant(el);
    return draggable({
      element: el,
      onDragStart: () => setIsDragging(true),
      onDrop: () => setIsDragging(false),
      getInitialData: () => ({ card: content }),
    });
  }, []);

  return (
    <div
      aria-label="card"
      ref={ref}
      className={`border-2 w-fit border-dotted rounded-md border-cyan-600 cursor-grab p-2.5 ${
        isDragging ? "opacity-10" : "opacity-100"
      }`}
    >
      <section aria-label="card-title" className="text-[1.5rem]">
        {content.title}
      </section>
      <p aria-label="card-description">{content.description}</p>
    </div>
  );
};
