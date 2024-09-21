//* React Import
import React, { useEffect, useRef, useState } from "react";

//* Drag & Drop Imports
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";

//* Custom Component Imports
import { GhostCard } from "../Card/GhostCard";

//* interface EmptyZoneProps
interface EmptyZoneProps {
  columnId: number;
}
export const EmptyDropZone = ({ columnId }: EmptyZoneProps) => {
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
      getData: () => ({ columnId, cardId: -1 }),
    });
  }, []);

  return (
    <div ref={ref} className="w-[100%] bg-transparent flex-grow">
      <GhostCard show={isDraggedOver} />
    </div>
  );
};
