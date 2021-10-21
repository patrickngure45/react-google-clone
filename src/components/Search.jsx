import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce/lib';
import { useResultContext } from '../contexts/ResultsContextProvider';
import Links from './Links';

const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 300);
  useEffect(() => {
    if (debounceValue) setSearchTerm(debounceValue);
    // eslint-disable-next-line
  }, [debounceValue]);
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        className="sm:96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg  "
        placeholder="Search Guggle or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className=" absolute right-4 top-1.5 text-2xl text-blue-500 "
          onClick={() => setText('')}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
