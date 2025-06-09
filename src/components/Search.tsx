"use client";

export default function Search() {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div className="flex items-center justify-center w-20">
      <label htmlFor="search" className="sr-only">Search</label>
      <input
        placeholder="Search for..."
        onChange={(e) => handleSearch(e.target.value)}
        className="ddc-border px-4 py-1"
      />
    </div>
  );
}
