import { useState } from "react";
import { Data } from "./Data";

const Search = () => {
    const [search, setSearch] = useState("");

    const filteredData = Data.filter((coffee) => {
        const query = search.trim().toLowerCase();

        return (
            coffee.name.toLowerCase().includes(query) ||
            coffee.type.toLowerCase().includes(query)
        );
    });

    return (
        <section className="container">
            <header className="shopHeader">
                <p className="eyebrow">THE DAILY POUR</p>
                <h1>Find Your <span>Perfect Coffee.</span></h1>
                <p className="subtitle">Explore the classics, one cup at a time.</p>
            </header>

            <label className="searchWrap">
                <span className="searchIcon" aria-hidden="true">⌕</span>
                <input
                    type="search"
                    placeholder="Search coffee by name or type..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    aria-label="Search coffee by name or type"
                />
                {search && (
                    <button
                        className="clearSearch"
                        type="button"
                        onClick={() => setSearch("")}
                        aria-label="Clear search"
                    >
                        ×
                    </button>
                )}
            </label>

            <div className="resultsBar">
                <span>OUR COFFEE MENU</span>
                <span>{filteredData.length} {filteredData.length === 1 ? "drink" : "drinks"}</span>
            </div>

            <div className="type tableHeading" aria-hidden="true">
                <h3>COFFEE</h3>
                <h3>TYPE</h3>
                <h3>IMAGE</h3>
            </div>

            <div className="coffeeList">
                {filteredData.map((coffee) => (
                    <article className="itemCard" key={coffee.name}>
                        <div className="coffeeName">
                            <span className="coffeeDot" />
                            <p>{coffee.name}</p>
                        </div>
                        <p className="coffeeType">{coffee.type}</p>
                        <div className="coffeeImage">
                            <img src={coffee.img} alt={coffee.name} loading="lazy" />
                        </div>
                    </article>
                ))}
            </div>

            {filteredData.length === 0 && (
                <div className="emptyState">
                    <span className="emptyCup">☕</span>
                    <h2>No coffee found</h2>
                    <p>Try another name or coffee type.</p>
                    <button type="button" onClick={() => setSearch("")}>Show all coffee</button>
                </div>
            )}
        </section>
    );
};

export default Search;
