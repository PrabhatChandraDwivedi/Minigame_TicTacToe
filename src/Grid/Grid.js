import React, { useRef, useEffect, useState } from "react";

export default function Grid({getGridCellHeight,getGridCellWidth}) {
  const cellRef = useRef(null);
  const [cellWidth, setCellWidth] = useState(0);
  const [cellHeight, setCellHeight] = useState(0);

  useEffect(() => {
    const updateCellSize = () => {
      if (cellRef.current) {
        const newCellWidth = cellRef.current.offsetWidth;
        const newCellHeight = cellRef.current.offsetHeight;
        setCellWidth(newCellWidth);
        setCellHeight(newCellHeight);
      }
    };
    window.addEventListener("resize", updateCellSize);
    updateCellSize();
    return () => {
      window.removeEventListener("resize", updateCellSize);
    };
  }, []);

  useEffect(() => {
    getGridCellHeight(cellHeight);
    getGridCellWidth(cellWidth);
  }, [cellHeight,cellWidth]);
  return (
    <div className="grid grid-cols-3 w-2/5 h-3/5">
      <div
        ref={cellRef}
        className="border-r-4 border-b-4 border-white text-center text-white flex h-auto"
      >
        1
      </div>
      <div className="border-r-4 border-b-4 border-white text-white flex h-auto">
        2
      </div>
      <div className="border-b-4 border-white text-white flex h-auto">3</div>
      <div className="border-r-4 border-b-4 border-white text-white flex h-auto">
        4
      </div>
      <div className="border-r-4 border-b-4 border-white text-white flex h-auto">
        5
      </div>
      <div className="border-b-4 border-white text-white flex h-auto">6</div>
      <div className="border-r-4 border-white text-white flex h-auto">7</div>
      <div className="border-r-4 border-white text-white flex h-auto">8</div>
      <div className="h-auto">9</div>
    </div>
  );
}