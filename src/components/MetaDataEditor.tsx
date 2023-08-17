import React from "react";
import MovieSection from "./MovieSection";
import MovieDataFormRow from "./MovieDataFormRow";

const MetaDataEditor = () => {
  return (
    <MovieSection title="MetaData Editor">
      <div className="h-[15rem]">
        <form>
          <fieldset>
            <MovieDataFormRow title="Name">
              <input
                className="border border-black w-full outline-none  rounded px-1"
                type="text"
              />
            </MovieDataFormRow>
            <MovieDataFormRow title="Studio">
              <select className="border border-black w-full">
                <option>option 1</option>
                <option>option 1</option>
                <option>option 1</option>
                <option>option 1</option>
                <option>option 1</option>
              </select>
            </MovieDataFormRow>
            <MovieDataFormRow title="Series">
              <select className="border border-black w-full">
                <option>option 1</option>
                <option>option 1</option>
                <option>option 1</option>
                <option>option 1</option>
                <option>option 1</option>
              </select>
            </MovieDataFormRow>
            <MovieDataFormRow title="Series #">
              <input
                type="text"
                className="border border-black w-full outline-none rounded px-1"
              />
            </MovieDataFormRow>
            <div className="flex my-8 gap-x-1">
              <button
                type="submit"
                className="uppercase font-bold p-2 border w-1/2 rounded text-white bg-green-700 hover:bg-green-400"
              >
                Update
              </button>
              <button
                type="button"
                className="uppercase font-bold p-2 border w-1/2 rounded text-white bg-red-700 hover:bg-red-400"
              >
                remove
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </MovieSection>
  );
};

export default MetaDataEditor;
