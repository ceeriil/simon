import React from "react";

const BlockPatternContainer: React.FC = () => {
  // Define the pattern array
  const pattern1 = [
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
  ];

  // Function to render a block based on its size
  const renderBlock = (size: string, index: number) => {
    const baseStyle = {
      backgroundColor: "#666666",
      margin: "0 3px",
    };

    let width = 0;
    let height = 12;

    switch (size) {
      case "xs":
        width = 6;
        break;
      case "s":
        width = 12;
        break;
      case "m":
        width = 18;
        break;
      case "w":
        width = 24;
        break;
      case "w-lg":
        width = 36;
        break;
      default:
        width = 6;
    }

    return (
      <div
        key={index}
        style={{
          ...baseStyle,
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#111111",
        display: "flex",
        alignItems: "center",
        padding: "1rem 0",
        width: "100%",
      }}
    >
      {pattern1.map((size, index) => renderBlock(size, index))}
    </div>
  );
};

export default BlockPatternContainer;
