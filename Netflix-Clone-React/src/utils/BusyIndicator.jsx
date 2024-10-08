import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
const BusyIndicator = () => {
    debugger;
  const color = "#3026b9";

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.66)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <BeatLoader
          color={color}
          loading={true}
          size={10}
          aria-label="Loading Spinner"
          data-testid=""
        />
      </div>
    </div>
  );
};

export default BusyIndicator;
