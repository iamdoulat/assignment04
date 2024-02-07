function calculateMoney(ticketSale) {
        if (ticketSale < 0) {
        return "Please enter correct ticket quantity.";
    }
    const ticketValue = 120;
    const totalIncome = ticketSale * ticketValue;

    const guardCost = 500;
    const staffLunchBill = 50;
    const totalLunchBill = 8 * staffLunchBill;

    const DailyNetIncome = totalIncome - guardCost - totalLunchBill;

    return DailyNetIncome;
}

// Example usage:
const ticketSale = 10; // Number of tickets sold
const result = calculateMoney(ticketSale);
console.log("Net income after deducting expenses: Taka:" + result);



function checkName(name) {
    if (typeof name !== 'string') {
        return "Only name allowed";
    }
    const smallLetter = name.toLowerCase();
    const lastLetter = smallLetter[smallLetter.length - 1];
    const endLetter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (endLetter.includes(lastLetter)) {
        return "Good name";

    } else {
        return "Bad name";
    }
}

// Example usage:
console.log(checkName(123));
console.log(checkName("Roide")); // Output: Good name
console.log(checkName("Roidm")); // Output: Good name


function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Please enter an array.";
    }

    const result = array.filter(word => typeof word === 'number' && !isNaN(word));

    return result;
}

// Example usage:
console.log(deleteInvalids([1, 'hello', 3, NaN, undefined, 5])); // Output: [1, 3, 5]
console.log(deleteInvalids("not an array")); // Output: Error: Please enter an array.


function password(obj) {
    if (typeof obj !== 'object' || Object.keys(obj).length !== 3) {
        return "Wrong input check carefully.";
    }

    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
        return "Wrong input check carefully.";
    }

    if (typeof obj.birthYear !== 'number' || obj.birthYear.toString().length !== 4) {
        return "Wrong - Birth year should be 4-digit";
    }

    const capitalizedSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

    const password = `${capitalizedSiteName}#${obj.name}@${obj.birthYear}`;

    return password;
}

// Example usage:
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
console.log(password({ name: "kolimuddin", birthYear: 199, siteName: "google" }));
console.log(password({ birthYear: 1999, siteName: "google" }));



function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "Invalid input";
    }

    const netIncome = arr.reduce((total, payment) => total + payment, 0);
    const totalTax = arr.filter(payment => payment >= 3000).reduce((totalTax, payment) => totalTax + (payment * 0.2), 0);
    const expenses = totalTax + livingCost;
    const savings = netIncome - expenses;

    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}

// Example usage:
console.log(monthlySavings([1000, 2000, 3000], 5401)); // Output: 5400
