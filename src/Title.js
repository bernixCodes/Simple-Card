import React from "react";

function Title({ title }) {
  return (
    <div className="border-2 border-orange-600 text-orange-700 text-3xl font-semibold py-2 px-6">
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
