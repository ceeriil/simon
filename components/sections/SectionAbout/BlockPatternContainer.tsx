import React from "react";

// =====================================
// ⬢ Constants
// =====================================
const PATTERN = [
  "w",
  "s",
  "m",
  "xs",
  "xs",
  "xs",
  "xs",
  "xs",
  "w",
  "xs",
  "xs",
  "xs",
  "xs",
  "xs",
  "xs",
  "s",
  "s",
  "xs",
  "xs",
  "xs",
  "xs",
  "xs",
  "xs",
  "w",
  "xs",
  "xs",
  "xs",
  "xs",
  "xs",
  "xs",
  "w",
  "s",
  "w-lg",
  "s",
  "m",
  "xs",
  "xs",
  "xs",
  "w",
  "xs",
  "xs",
  "xs",
  "xs",
  "xs",
  "xs",
] as const;

const WIDTHS: Record<string, number> = {
  xs: 6,
  s: 12,
  m: 18,
  w: 24,
  "w-lg": 36,
};

// Generate unique keys for each block without using array index
let blockId = 0;
const PATTERN_WITH_KEYS = PATTERN.map(size => {
  blockId += 1;
  return {
    size,
    key: `hud-block-${blockId}`,
  };
});

// =====================================
// ⬢ Main
// =====================================
const BlockPatternContainer: React.FC = () => {
  return (
    <div className="flex items-center w-full bg-[#111111] py-4">
      {PATTERN_WITH_KEYS.map(({ size, key }) => (
        <div
          key={key}
          className="hud-block mx-[3px] h-3 bg-[#666]"
          style={{ width: WIDTHS[size] ?? 6 }}
        />
      ))}
    </div>
  );
};

export default BlockPatternContainer;
