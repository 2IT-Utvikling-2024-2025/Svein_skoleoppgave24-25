

export default function Inputs() {
    return (
        <div className="Inputs">
            <div>
                <label htmlFor="tid">Tid</label>
                <input type="number" name="tid" />
                <label htmlFor="koer">Antall køer</label>
                <input type="number" name="koer" />
                <label htmlFor="prko">per kø</label>
                <input type="number" name="prko" />
                <label htmlFor="scantid">Tid for scanning</label>
                <input type="number" name="scantid" />
                <label htmlFor="express">express kø</label>
                <input type="checkbox" name="express" />
            </div>
            <button>Start</button>
        </div>
    )
}