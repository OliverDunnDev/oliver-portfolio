export default function Header() {
    return (
        <header className="hero">
            <div className="header-content">
                <img src="public/Oliver.png" alt="Oliver Dunn" className="profile-pic" />
                <div>
                    <h1 className="animated">Hi, I'm Oliver Dunn 👋</h1>
                    <p className="subtitle">Machine Learning | Web Dev | Quantum computing | .NET APIs</p>
                    <a href="#contact" className="cta">Let's Connect</a>
                </div>
            </div>
        </header>
    );
}

