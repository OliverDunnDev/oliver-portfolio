export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

        <a
            href="https://plennock.github.io/Honours-Stage-Project/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
        >
            <h3>Quantum SafeML</h3>
            <p>A quantum-enhanced ML monitoring framework detecting classifier degradation.</p>
            <span>Python, Qiskit, Scikit-Learn</span>
        </a>

        <a href="https://plennock.github.io/Honours-Stage-Project/" className="project-card">
        <h3>Quantum SafeML</h3>
        <p>A quantum-enhanced ML monitoring framework detecting classifier degradation.</p>
        <span>Python, Qiskit, Scikit-Learn</span>
      </a>
      <div className="project-card">
        <h3>Virtual Gym Room (VR/AR)</h3>
        <p>Immersive gym experience in VR & AR for virtual workouts.</p>
        <span>Unity, C#, Oculus SDK</span>
      </div>
      <a href="https://oliverdunndev.github.io/movie-app/" className="project-card">
        <h3>Movie Database React App</h3>
        <p>A real time movie database searcher allowing users to look up any film they want, even selecting their favourites!</p>
        <span>Open soruce API, React, Javascript</span>
      </a>
      <div className="project-card">
        <h3>GroupMonkey</h3>
        <p>Team management app with scheduling & task tracking.</p>
        <span>React, Flask/Django, PostgreSQL</span>
      </div>
    </section>
  );
}
