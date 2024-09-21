//* React imports
import React from "react";

//* interface GhostProps
interface GhostProps {
  show: boolean;
}

export const GhostCard = ({ show }: GhostProps) => {
  return show ? (
    <div className="border-2 w-[100%] border-dotted rounded-md bg-transparent p-2.5"></div>
  ) : null;
};
