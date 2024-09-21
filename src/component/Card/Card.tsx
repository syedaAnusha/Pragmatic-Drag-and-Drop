/* eslint-disable @typescript-eslint/no-unused-vars */
//* React Import
import { useEffect, useRef, useState } from "react";

//* Pragmatic & other Imports
import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";

//* CardProps Import
import { CardContentProps } from "@/interface/interfaces";

//* interface CardProps
interface CardProps {
  columnId: number;
  content: CardContentProps;
}

export const Card = ({ content, columnId }: CardProps) => {
  //* use Hooks
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);

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

  useEffect(() => {
    const el = ref.current;
    invariant(el);
    return dropTargetForElements({
      element: el,
      onDragEnter: () => setIsDraggedOver(true),
      onDragLeave: () => setIsDraggedOver(false),
      onDrop: () => setIsDraggedOver(false),
      getData: () => ({ columnId, cardId: content.id }),
    });
  }, []);

  return (
    <div
      aria-label="card"
      ref={ref}
      className={`border-2 w-fit border-dotted rounded-md border-cyan-600 cursor-grab p-2.5 ${
        isDragging ? "opacity-10" : "opacity-100"
      } ${isDraggedOver ? "bg-slate-500" : "bg-gray-300"}`}
    >
      <section aria-label="card-title" className="text-[1.5rem]">
        {content.title}
      </section>
      <p aria-label="card-description">{content.description}</p>
    </div>
  );
};
