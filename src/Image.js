import React from "react";

function Image({ src }) {
  return (
    <div className="bg-amber-200 p-8 border-amber-400 border-4 flex items-center justify-center">
      <p className="text-amber-400 text-2xl font-semibold ">{src}</p>
    </div>
  );
}

export default Image;
