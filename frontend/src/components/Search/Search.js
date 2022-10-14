import "./Search.css";

export default function Search({ search }) {
  return (
    <section className="search">
      <form className="search__form" onSubmit={search}>
        <div className="search__container">
          <input
            maxLength="70"
            className="search__input"
            type="text"
            id="searchInput"
            name="searchInput"
            autoComplete="off"
          />
          <button className="search__button" type="submit"></button>
        </div>
      </form>
    </section>
  );
}
