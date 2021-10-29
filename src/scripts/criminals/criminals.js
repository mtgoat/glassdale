//${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
export const criminal = (taco) => {
    return `
    <section class="crimCard">
            <ul class="criminals${taco.id}__ul">
            <li ="criminals${taco.id}__name"><h3>${taco.name}</h3></li>
            <li ="criminals${taco.id}__age">Age: ${taco.age}</li>
            <li ="criminals${taco.id}__crime">Crime: ${taco.conviction}</li>
            <li ="criminals${taco.id}__crime">Arrensting Officer: ${taco.arrestingOfficer}</li>
            <li ="criminals${taco.id}__startDate">Term start: ${new Date(taco.incarceration.start).toLocaleDateString('en-US')}
            </li>
            <li ="criminals${taco.id}__endDate">Term end: ${new Date(taco.incarceration.end).toLocaleDateString('en-US')}</li>
        </ul>
        </section>
            `
}