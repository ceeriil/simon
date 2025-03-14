import React from "react";

export const Tag = ({ tag }: { tag: string }) => {
  return (
    <div>
      <div className="bg-[#8941FD] inline-block py-1.5 px-4 border-white border uppercase font-semibold text-[#FFBAF9]">
        {tag || "opensource"}
      </div>
    </div>
  );
};
