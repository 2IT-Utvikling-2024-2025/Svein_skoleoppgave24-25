export default function MainContent() {
  return (
    <div className="bg-gradient-to-t to-slate-900 from-zinc-700">
      <details>
        <summary>interesser</summary>
        <div>
            <h3>Mine interesser:</h3>
            <div className="programContent">
                <h4>Programmering:</h4>
                <p></p>
                </div>
                <div className="gamingContent">
                    <h4>Gaming:</h4>
                    <p></p>
                </div>
        </div>
      </details>
      <details>
        <summary>Projekter</summary>
        <div></div>
      </details>
    </div>
  );
}
