//* React Import
import React, { useEffect, useRef } from "react";

//* Drag & Drop Imports
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";

//* interface EmptyZoneProps
interface EmptyZoneProps {
  columnId: number;
}
export const EmptyDropZone = ({ columnId }: EmptyZoneProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    invariant(el);

    return dropTargetForElements({
      element: el,
      getData: () => ({ columnId, cardId: -1 }),
    });
  }, []);

  return <div ref={ref} className="w-[100%] bg-transparent flex-grow" />;
};
