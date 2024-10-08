function ProgressBar({ width, name }) {
  return (
    <div>
      <div className="mb-1 text-lg font-medium kavivanar">{name}</div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-4 bg-orange rounded-full"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}

function SoftSkills() {
  return (
    <div>
      <h2 class="title_skills text-center">Soft Skills</h2>
      <ProgressBar name={"Réactvité"} width={95} />
      <ProgressBar name={"Résolution de problème"} width={90} />
      <ProgressBar name={"Adaptabilité"} width={70} />
      <ProgressBar name={"Prise de recul"} width={90} />
      <ProgressBar name={"Sens de la communication"} width={90} />
      <ProgressBar name={"Créativité"} width={80} />
      <ProgressBar name={"Empathie"} width={80} />
    </div>
  );
}

function HardSkills() {
  return (
    <div>
      <h2 class="title_skills text-center">Hard Skills</h2>
      <ProgressBar name={"Développement web"} width={80} />
      <ProgressBar name={"Gestion de projet"} width={80} />
      <ProgressBar name={"Gestion de base de données"} width={90} />
      <ProgressBar name={"Création graphique"} width={80} />
      <ProgressBar name={"Développement mobile"} width={70} />
      <ProgressBar name={"Cybersécurité"} width={40} />
      <ProgressBar name={"Développement IA"} width={5} />
    </div>
  );
}
// Monter l'application React dans l'élément avec l'id "root"
ReactDOM.createRoot(document.getElementById("soft")).render(<SoftSkills />);
ReactDOM.createRoot(document.getElementById("hard")).render(<HardSkills />);
