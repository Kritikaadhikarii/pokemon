import React from 'react';

type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-10 py-2 border border-dark rounded-full bg-cool text-dark"
      />
    </div>
  );
};

export default SearchBar;
