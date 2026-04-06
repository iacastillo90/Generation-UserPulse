import './EmptyState.css';

function EmptyState({ title = "Sin resultados", message = "No se encontraron resultados para tu búsqueda." }) {
    return (
        <div className="empty-state text-center animated-fadeInUp">
            <div className="empty-icon-wrapper mb-4 mx-auto">
                <svg className="empty-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
                </svg>
            </div>
            <h4 className="empty-title mb-2">{title}</h4>
            <p className="empty-message mb-0">{message}</p>
        </div>
    );
}

export default EmptyState;
