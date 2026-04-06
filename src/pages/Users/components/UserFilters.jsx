import "./UserFilters.css";

// Genera lista de países únicos desde los datos cargados
function getUniqueCountries(users) {
    const countries = users.map((u) => u.location.country);
    return [...new Set(countries)].sort();
}

function UserFilters({ users, filters, onChange }) {
    const countries = getUniqueCountries(users);

    const handleChange = (key, value) => {
        onChange({ ...filters, [key]: value });
    };

    const activeCount = Object.values(filters).filter(
        (v) => v !== "" && v !== "all"
    ).length;

    const clearAll = () =>
        onChange({ gender: "all", country: "", ageMin: "", ageMax: "" });

    return (
        <div className="user-filters-bar">
            {/* ── Label ── */}
            <div className="filters-label">
                <svg className="filters-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L13 10.414V15a1 1 0 01-.553.894l-4 2A1 1 0 017 17v-6.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                Filtros
                {activeCount > 0 && (
                    <span className="filters-active-badge">{activeCount}</span>
                )}
            </div>

            <div className="filters-controls">
                {/* ── Género ── */}
                <div className="filter-group">
                    <label className="filter-label" htmlFor="filter-gender">Género</label>
                    <div className="filter-pills">
                        {["all", "male", "female"].map((opt) => (
                            <button
                                key={opt}
                                id={opt === "all" && "filter-gender"}
                                className={`filter-pill ${filters.gender === opt ? "active" : ""}`}
                                onClick={() => handleChange("gender", opt)}
                                type="button"
                            >
                                {opt === "all" ? "Todos" : opt === "male" ? "Hombre" : "Mujer"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── País ── */}
                <div className="filter-group">
                    <label className="filter-label" htmlFor="filter-country">País</label>
                    <div className="filter-select-wrapper">
                        <select
                            id="filter-country"
                            className="filter-select"
                            value={filters.country}
                            onChange={(e) => handleChange("country", e.target.value)}
                        >
                            <option value="">Todos los países</option>
                            {countries.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        <svg className="select-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* ── Rango de edad ── */}
                <div className="filter-group">
                    <label className="filter-label">Edad</label>
                    <div className="filter-age-range">
                        <input
                            type="number"
                            className="filter-age-input"
                            placeholder="Mín"
                            min="18"
                            max="99"
                            value={filters.ageMin}
                            onChange={(e) => handleChange("ageMin", e.target.value)}
                            aria-label="Edad mínima"
                        />
                        <span className="age-dash">—</span>
                        <input
                            type="number"
                            className="filter-age-input"
                            placeholder="Máx"
                            min="18"
                            max="99"
                            value={filters.ageMax}
                            onChange={(e) => handleChange("ageMax", e.target.value)}
                            aria-label="Edad máxima"
                        />
                    </div>
                </div>

                {/* ── Limpiar ── */}
                {activeCount > 0 && (
                    <button className="filters-clear-btn" onClick={clearAll} type="button">
                        Limpiar filtros
                    </button>
                )}
            </div>
        </div>
    );
}

export default UserFilters;
