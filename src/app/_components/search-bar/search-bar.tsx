"use client"
import { useState, useTransition } from "react"
import { SearchResults } from "./search-results";
import { searchAction } from "./search-action";
import { ProfileLazy } from "@/_types/profile";
import { SearchIcon } from "lucide-react";
import styles from "./search-bar.module.css"

type SearchbarProps = {
  containerClass?: string,
}
export function Searchbar({ containerClass }: SearchbarProps) {
  const [results, setResults] = useState<ProfileLazy[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (formData: FormData) => {
    startTransition(async () => {
      setShow(true);
      const profiles = await searchAction(formData);
      setResults(profiles);
    })
  }

  return (
    <div className={`${styles.container} ${containerClass ?? ""}`}>
      <form
        className={styles.bar}
        action={handleSearch}
      >
        <input
          name="query"
          type="text"
          id="query-input"
          onBlur={() => setShow(false)}
        />
        <button
          type="submit"
        >
          <SearchIcon />
        </button>
      </form>
      {show &&
        <div className={styles["results-container"]}>
          {isPending && <p>...loading</p>}

          {!!results?.length ?
            <SearchResults
              profiles={results} />
            :
            <p className="text-center">No profiles found</p>
          }
        </div>

      }
    </div>
  )
}


