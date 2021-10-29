export const location = (taco) => {
    return `
    <section class="locatCard">
    <h3 class="location-${taco.id}">${taco.facilityName}</h3>
    </section>
    `
}