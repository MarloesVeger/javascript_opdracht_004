const age = 26;
const isFemale = false;
const driverStatus = "bob";
const firstName = "Sarah";
const totalAmount = 24;
if (age >= 18) {
    console.log("Welcome to the ladiesnight");
} else {
    console.log("You are not allowed to enter");
}
if (isFemale) {
    console.log("This is a lady");
} else {
    console.log("This is not a lady");
}
if (driverStatus === "bob") {
    console.log("Driver has status BOB and is allowed to drive");
} else {
    console.log("Driver has no BOB status ans is not allowed to drive")
}
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Helaas geen korting voor jou!");
}
if (firstName === "Bram" || firstName === "Sarah") {
    console.log("Recht op gratis biertje");
} else {
    console.log("geen gratis biertje");
}
if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Je krijgt een gratis portie (vega)bitterballen");
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Je krijgt een gratis portie nachos");
} else if (totalAmount >= 100) {
    console.log("Je krijgt een gratis flesje champagne");
} else {
    console.log("Bij besteding van 25 euro of meer krijg je van ons een portie (vega)bitterballen")
}
