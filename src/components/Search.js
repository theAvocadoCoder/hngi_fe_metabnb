// import { Form } from "react-router-dom"

export default function Search() {
  return (
    <form id="search-form" role="search">
      <input
        id="q"
        aria-label="Search for location"
        placeholder="Search for location"
        type="search"
        name="q"
      />
      <div
        id="search-spinner"
        aria-hidden
        hidden={true}
      />
      <div
        className="sr-only"
        aria-live="polite"
      ></div>
      <button type="submit">Search</button>
    </form>
  )
}