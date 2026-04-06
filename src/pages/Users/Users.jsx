import "./Users.css";

import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import EmptyState from "../../components/common/EmptyState/EmptyState";
import Pagination from "../../components/common/Pagination/Pagination";
import UserCard from "../../components/common/UserCard/UserCard";
import UserFilters from "./components/UserFilters";
import axios from "axios";

const USERS_PER_PAGE = 20;

const INITIAL_FILTERS = { gender: "all", country: "", ageMin: "", ageMax: "" };

function Users() {
    const [users, setUsers]     = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch]   = useState("");
    const [filters, setFilters] = useState(INITIAL_FILTERS);
    const [currentPage, setPage] = useState(1);

    useEffect(() => {
        const apiUrl = "https://randomuser.me/api/?seed=userpulse&results=100";
        const fetchUsers = async () => {
            try {
                const response = await axios.get(apiUrl);
                setUsers(response.data.results);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    // ── Lógica de filtrado combinado ──
    const filtered = users.filter((user) => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
        const username = user.login.username.toLowerCase();
        const query    = search.toLowerCase().trim();

        // Búsqueda por texto
        if (query && !fullName.includes(query) && !username.includes(query)) return false;
        // Filtro género
        if (filters.gender !== "all" && user.gender !== filters.gender) return false;
        // Filtro país
        if (filters.country && user.location.country !== filters.country) return false;
        // Filtro edad mínima
        if (filters.ageMin !== "" && user.dob.age < Number(filters.ageMin)) return false;
        // Filtro edad máxima
        if (filters.ageMax !== "" && user.dob.age > Number(filters.ageMax)) return false;

        return true;
    });

    const handleSearch = (value) => { setSearch(value); setPage(1); };
    const handleFilters = (newFilters) => { setFilters(newFilters); setPage(1); };

    const totalPages = Math.ceil(filtered.length / USERS_PER_PAGE);
    const startIdx   = (currentPage - 1) * USERS_PER_PAGE;
    const paginated  = filtered.slice(startIdx, startIdx + USERS_PER_PAGE);

    const handlePageChange = (page) => {
        setPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (loading) {
        return (
            <div className="users-loading-wrapper">
                <div className="users-spinner" role="status" aria-label="Cargando"></div>
                <p className="users-loading-label">Cargando usuarios...</p>
            </div>
        );
    }

    return (
        <div className="users-page">
            <Container>
                {/* ── Header ── */}
                <div className="users-header">
                    <div className="users-title-block">
                        <span className="users-eyebrow">Directorio</span>
                        <h1 className="users-title">
                            Todos los usuarios
                            <span className="users-counter">{filtered.length}</span>
                        </h1>
                        {totalPages > 1 && (
                            <p className="users-page-indicator">
                                Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
                                <span className="page-range-label">
                                    — mostrando {startIdx + 1}–{Math.min(startIdx + USERS_PER_PAGE, filtered.length)}
                                </span>
                            </p>
                        )}
                    </div>

                    {/* ── Search bar ── */}
                    <div className="users-search-bar" role="search">
                        <svg className="users-search-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                        <input
                            type="search"
                            className="users-search-input"
                            placeholder="Buscar por nombre o usuario..."
                            aria-label="Buscar usuarios"
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        {search && (
                            <button className="users-search-clear" onClick={() => handleSearch("")} aria-label="Limpiar búsqueda">
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* ── Filtros ── */}
                {users.length > 0 && (
                    <UserFilters
                        users={users}
                        filters={filters}
                        onChange={handleFilters}
                    />
                )}

                {/* ── Grid / EmptyState ── */}
                {filtered.length === 0 ? (
                    <EmptyState
                        title="Sin resultados"
                        message="No se encontraron usuarios con los filtros seleccionados. Intenta ajustar los criterios de búsqueda."
                    />
                ) : (
                    <>
                        <div className="users-grid">
                            <Row className="g-4">
                                {paginated.map((user) => (
                                    <Col key={user.login.uuid} xs={12} sm={6} md={4} lg={3}>
                                        <UserCard user={user} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <Pagination
                            current={currentPage}
                            total={totalPages}
                            onChange={handlePageChange}
                        />
                    </>
                )}
            </Container>
        </div>
    );
}

export default Users;