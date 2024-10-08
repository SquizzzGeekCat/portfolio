function ProgressBar({ width }) {
  return (
    <div>
      <div className="mb-1 text-lg font-medium">Large</div>
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
      <h2>Soft Skills</h2>
      <ProgressBar width={45} />
      <ProgressBar width={70} />
      <ProgressBar width={90} />
    </div>
  );
}

function HardSkills() {
  return (
    <div>
      <h2>Hard Skills</h2>
      <ProgressBar width={45} />
      <ProgressBar width={70} />
      <ProgressBar width={90} />
    </div>
  );
}
// Monter l'application React dans l'élément avec l'id "root"
ReactDOM.createRoot(document.getElementById("soft")).render(<SoftSkills />);
ReactDOM.createRoot(document.getElementById("hard")).render(<SoftSkills />);
