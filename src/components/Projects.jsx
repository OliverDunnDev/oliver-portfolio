export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Quantum SafeML</h3>
        <p>A quantum-enhanced ML monitoring framework detecting classifier degradation.</p>
        <span>Python, Qiskit, Scikit-Learn</span>
      </div>
      <div className="project-card">
        <h3>Virtual Gym Room (VR/AR)</h3>
        <p>Immersive gym experience in VR & AR for virtual workouts.</p>
        <span>Unity, C#, Oculus SDK</span>
      </div>
      <div className="project-card">
        <h3>Traffic Services API</h3>
        <p>Real-time traffic data service using a robust REST API.</p>
        <span>ASP.NET Core, SQL Server</span>
      </div>
      <div className="project-card">
        <h3>GroupMonkey</h3>
        <p>Team management app with scheduling & task tracking.</p>
        <span>React, Flask/Django, PostgreSQL</span>
      </div>
    </section>
  );
}
