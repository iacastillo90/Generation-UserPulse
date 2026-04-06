import { Link } from "react-router-dom";
import { useState } from "react";

function UserCard({ user, darkMode = false }) {
    const [following, setFollowing] = useState(false);

    const fullName = `${user.name.first} ${user.name.last}`;
    const photo = user.picture.large;
    const userId = user.login.uuid; 
    const location = `${user.location.city}, ${user.location.country}`;
    const username = `@${user.login.username}`;

    const theme = darkMode
        ? {
            card: {
            background: "linear-gradient(145deg, #1e2a2a 0%, #16211f 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
            },
            overlay: "linear-gradient(to top, rgba(20,30,28,0.98) 38%, rgba(20,30,28,0.55) 65%, transparent 100%)",
            name: { color: "#e8f0ee" },
            badge: { background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.18)" },
            checkColor: "#a0c4b8",
            bio: { color: "#7ea89c" },
            divider: "rgba(255,255,255,0.08)",
            statsColor: "#6b9a8e",
            statsIcon: "#4d7a6d",
            btnBg: "rgba(255,255,255,0.1)",
            btnBorder: "rgba(255,255,255,0.18)",
            btnColor: "#e8f0ee",
            btnHoverBg: "rgba(255,255,255,0.18)",
        }
        : {
            card: {
            background: "linear-gradient(145deg, #f0f4f3 0%, #e8eded 100%)",
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
            },
            overlay: "linear-gradient(to top, rgba(235,242,240,0.98) 38%, rgba(235,242,240,0.55) 65%, transparent 100%)",
            name: { color: "#1a2e2a" },
            badge: { background: "rgba(0,0,0,0.06)", border: "1.5px solid rgba(0,0,0,0.10)" },
            checkColor: "#2d7a5e",
            bio: { color: "#5a7870" },
            divider: "rgba(0,0,0,0.08)",
            statsColor: "#5a7870",
            statsIcon: "#2d7a5e",
            btnBg: "rgba(0,0,0,0.06)",
            btnBorder: "rgba(0,0,0,0.12)",
            btnColor: "#1a2e2a",
            btnHoverBg: "rgba(0,0,0,0.12)",
        };

    return (
        <div
            style={{
                width: 230,
                borderRadius: 28,
                overflow: "hidden",
                position: "relative",
                fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
                ...theme.card,
                transition: "all 0.35s ease",
            }}
        >

            <div style={{ width: "100%", height: 260, position: "relative", overflow: "hidden" }}>
                <img
                src={photo}
                alt={fullName}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: theme.overlay }} />
            </div>

            <div style={{ padding: "0 18px 18px", marginTop: -32, position: "relative", zIndex: 2 }}>

                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 2 }}>
                    <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: -0.3, ...theme.name, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {fullName}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, borderRadius: "50%", flexShrink: 0, ...theme.badge }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke={theme.checkColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>

                <p style={{ fontSize: 11, fontWeight: 600, margin: "0 0 4px", color: theme.checkColor }}>
                {username}
                </p>
                <p style={{ fontSize: 12, lineHeight: 1.4, margin: "0 0 14px", ...theme.bio }}>
                📍 {location}
                </p>

                <div style={{ height: 1, background: theme.divider, marginBottom: 14 }} />


                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: theme.statsColor }}>{user.dob.age} yrs</span>
                    </div>


                    <Link
                        to={`/user/${userId}`}
                        style={{
                        marginLeft: "auto",
                        padding: "6px 12px",
                        borderRadius: 50,
                        border: `1px solid ${theme.btnBorder}`,
                        background: theme.btnBg,
                        color: theme.btnColor,
                        fontSize: 11,
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        }}
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
