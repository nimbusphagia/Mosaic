"use client"
import { useDebounce } from "@/_lib/hooks/use-debounce";
import { useState } from "react"
import useSWR from "swr"
import { SearchResults } from "./search-results";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function Searchbar() {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 500);
  const { data, isLoading } = useSWR(
    debouncedQuery.trim() ?
      `${process.env.NEXT_PUBLIC_API_URL}/profiles?nickname=${debouncedQuery.trim()}`
      : null,
    fetcher
  );


  return (
    <div className="border-1">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading && <p>...loading</p>}
      {!!data?.profiles.length &&
        <SearchResults
          profiles={data.profiles} />
      }
    </div>
  )
}


