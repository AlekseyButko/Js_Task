let birthYear = prompt("Enter your birth year: ");
let city = prompt("Enter your city: ");
let favSport = prompt("Enter your favourite sport: ");

if (!birthYear) {
    alert("Unfortunately, you didn't write your birth year...");
} else if (!city) {
    alert("Unfortunately, you didn't write your city...");
} else if (!favSport) {
    alert("Unfortunately, you didn't write your favourite sport...");
} else {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    let cityMessage;
    if (city === "Kyiv") {
        cityMessage = "You live in the capital of Ukraine";
    } else if (city === "Washington") {
        cityMessage = "You live in the capital of the USA";
    } else if (city === "London") {
        cityMessage = "You live in the capital of Great Britain";
    } else {
        cityMessage = `You live in ${city}`;
    }

    let sportMessage;
    if (favSport === "Basketball") {
        sportMessage = "You like basketball, do you wanna be like Michael Jordan?";
    } else if (favSport === "Football") {
        sportMessage = "You like football, do you wanna be like Ronaldo?";
    } else if (favSport === "Tennis") {
        sportMessage = "You like tennis, do you wanna be like Federer?";
    } else {
        sportMessage = `Interesting choice of ${favSport}`;
    }

    alert(`You are ${age},\n${cityMessage}\n${sportMessage}`);
}
