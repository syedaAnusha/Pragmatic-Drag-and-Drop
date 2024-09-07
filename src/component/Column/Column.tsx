//* React Import
import { Fragment, useEffect, useRef, useState } from "react";

//* CardProps Import
import { CardContentProps } from "@/interface/interfaces";
import { Card } from "../Card";

//* Pragmatic Drag-Drop & other Imports
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";

//* interface ColumnProps
interface ColumnProps {
  title: string;
  cardContent: CardContentProps[];
}

export const Column = ({ title, cardContent }: ColumnProps) => {
  //* use Hooks
  const ref = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    invariant(el);
    return dropTargetForElements({
      element: el,
      onDragEnter: () => setIsDraggedOver(true),
      onDragLeave: () => setIsDraggedOver(false),
      onDrop: () => setIsDraggedOver(false),
    });
  }, []);
  return (
    <div
      aria-label="column"
      ref={ref}
      className={`w-[25%] border-2 rounded-md ${
        isDraggedOver ? "bg-slate-50" : "bg-slate-300"
      }  p-2.5 flex flex-col gap-2 `}
    >
      <h1 aria-label="column-title" className="text-center text-[2rem]">
        {title}
      </h1>
      {cardContent.map((card, index) => (
        <Fragment key={index}>
          <Card Content={card} />
        </Fragment>
      ))}
    </div>
  );
};
