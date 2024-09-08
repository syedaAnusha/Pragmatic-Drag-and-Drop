/* eslint-disable @typescript-eslint/no-unused-vars */
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
  columnId: number;
  name: string;
  content: CardContentProps[];
}

export const Column = ({ columnId, name, content }: ColumnProps) => {
  //* use Hooks
  const ref = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    invariant(el);
    return dropTargetForElements({
      element: el,
      getData: () => ({ columnId }),
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
        {name}
      </h1>
      {content.map((card) => (
        <Card key={card.id} content={card} />
      ))}
    </div>
  );
};
