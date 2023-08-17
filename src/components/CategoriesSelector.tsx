import React, { useContext } from "react";
import MovieSection from "./MovieSection";
import StateContext from "../state/StateContext";

const CategoriesSelector = () => {
  const { state } = useContext(StateContext);
  return (
    <MovieSection title="Categories Selector">
      <div className="grid grid-cols-3 lg:h-[18rem] overflow-y-scroll">
        {state?.categories.map((category, index) => (
          <label key={index} className="h-auto">
            <input type="checkbox" key={index} value={category} />
            {category}
          </label>
        ))}
      </div>
    </MovieSection>
  );
};

export default CategoriesSelector;
