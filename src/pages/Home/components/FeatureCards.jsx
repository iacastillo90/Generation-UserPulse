import "./FeatureCards.css";

// Decisión de diseño: 4 cards en grid 2×2 que colapsa a 1 col en mobile.
// Cada card tiene un ícono SVG con fondo accent suave, sin imágenes externas.
// Hover: lift de -6px + sombra difusa para efecto de profundidad premium.

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        tag: "Centralización",
        title: "Todos tus usuarios en un solo lugar",
        desc: "Deja de buscar datos dispersos. UserPulse unifica 100 perfiles reales en un directorio limpio, accesible y ordenado en segundos.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
            </svg>
        ),
        tag: "Búsqueda",
        title: "Encuentra cualquier perfil al instante",
        desc: "Filtrado en tiempo real por nombre, usuario, país o género. Sin recargas, sin esperas — la información aparece mientras escribes.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        tag: "Detalle",
        title: "Vista completa de cada usuario",
        desc: "Accede a email, teléfono, ubicación, edad y fecha de registro en una vista de detalle estructurada y elegante sin fricciones.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        tag: "Rendimiento",
        title: "Datos en tiempo real desde la API",
        desc: "Conexión directa a randomuser.me — cada sesión trae datos frescos. Arquitectura SPA que carga el directorio completo en una sola petición.",
    },
];

function FeatureCards() {
    return (
        <section className="features-section">
            <div className="features-header text-center">
                <span className="features-eyebrow">¿Por qué UserPulse?</span>
                <h2 className="features-title">Gestión de usuarios, <em>redefinida</em></h2>
                <p className="features-lead">
                    Un directorio centralizado no es un lujo — es la base de cualquier operación eficiente.
                </p>
            </div>

            <div className="features-grid">
                {features.map((f, i) => (
                    <article key={i} className="feature-card">
                        <div className="fc-icon-wrapper" aria-hidden="true">
                            {f.icon}
                        </div>
                        <span className="fc-tag">{f.tag}</span>
                        <h3 className="fc-title">{f.title}</h3>
                        <p className="fc-desc">{f.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default FeatureCards;
