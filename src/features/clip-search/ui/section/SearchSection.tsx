"use client";

import { ChangeEvent, KeyboardEvent, useState } from "react";

import { SearchBox, SearchResultBox } from "../../components";
import { useSearchClip } from "../../hooks";

export const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, data, hasSearched, search } = useSearchClip();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = () => {
    search(searchQuery);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search(searchQuery);
    }
  };

  return (
    <div className='flex w-full flex-col gap-4'>
      <SearchBox searchQuery={searchQuery} onChange={handleChange} onKeyDown={handleKeyDown} onSubmit={handleSubmit} />
      <SearchResultBox data={data} hasSearched={hasSearched} isLoading={isLoading} />
    </div>
  );
};
