import { Link } from "react-router-dom";
import "./UserCard.css";

function UserCard({ user }) {
    const fullName = `${user.name.first} ${user.name.last}`;
    const photo = user.picture.large;
    const userId = user.login.uuid; 
    const location = `${user.location.city}, ${user.location.country}`;
    const username = `@${user.login.username}`;
    const age = user.dob.age;

    return (
        <div className="user-card-wrapper">
            <div className="user-card-header">
                <img
                    src={photo}
                    alt={fullName}
                    className="user-card-img"
                />
                <div className="user-card-overlay" />
            </div>

            <div className="user-card-body">
                <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="user-card-name" title={fullName}>
                        {fullName}
                    </span>
                    <span className="user-verified-badge">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>

                <p className="user-card-username text-accent mb-1">
                    {username}
                </p>
                <p className="user-card-bio mb-3">
                    📍 {location}
                </p>

                <hr className="user-card-divider" />

                <div className="d-flex align-items-center justify-content-between mt-3">
                    <span className="user-card-stats">{age} yrs</span>

                    <Link to={`/user/${userId}`} className="user-card-btn">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
