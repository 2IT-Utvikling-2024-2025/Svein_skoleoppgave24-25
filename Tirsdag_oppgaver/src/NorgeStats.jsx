

export default function NorgeStats() {

    const NorgeStats = [{
        year: 2021,
        population: 5421241
    }, {
        year: 2020,
        population: 5389293
    }, {
        year: 2019,
        population: 5356198
    }, {
        year: 2018,
        population: 5312343
    }, {
        year: 2017,
        population: 5271949
    }, {
        year: 2016,
        population: 5228912
    }, {
        year: 2015,
        population: 5185108
    }, {
        year: 2014,
        population: 5141684
    }, {
        year: 2013,
        population: 5096083
    }, {
        year: 2012,
        population: 5056103
    }]

    return (
        <div>
            <h1>Norge's befolkning 1.62</h1>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    {NorgeStats.map((year) => <tr key={year.year}><td>{year.year}</td><td>{year.population}</td></tr>)}
                </tbody>
            </table>
        </div>
    )

}