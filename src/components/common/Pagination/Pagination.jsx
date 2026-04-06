import './Pagination.css';

// Genera el array de páginas con elipsis cuando hay muchas
function buildPages(current, total) {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    const pages = [];
    if (current <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', total);
    } else if (current >= total - 3) {
        pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total);
    } else {
        pages.push(1, '...', current - 1, current, current + 1, '...', total);
    }
    return pages;
}

function Pagination({ current, total, onChange }) {
    if (total <= 1) return null;

    const pages = buildPages(current, total);

    return (
        <nav className="custom-pagination" aria-label="Paginación de usuarios">
            {/* Botón anterior */}
            <button
                className="page-btn page-nav"
                onClick={() => onChange(current - 1)}
                disabled={current === 1}
                aria-label="Página anterior"
            >
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Números */}
            {pages.map((page, idx) =>
                page === '...' ? (
                    <span key={`ellipsis-${idx}`} className="page-ellipsis">···</span>
                ) : (
                    <button
                        key={page}
                        className={`page-btn page-number ${page === current ? 'active' : ''}`}
                        onClick={() => onChange(page)}
                        aria-label={`Ir a página ${page}`}
                        aria-current={page === current ? 'page' : undefined}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Botón siguiente */}
            <button
                className="page-btn page-nav"
                onClick={() => onChange(current + 1)}
                disabled={current === total}
                aria-label="Página siguiente"
            >
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
        </nav>
    );
}

export default Pagination;
