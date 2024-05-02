// Define function to calculate percentage of internship time
function calculateInternshipPercentage(totalWeeks, internshipWeeks) {
    return (internshipWeeks / totalWeeks) * 100;
}

// Given data
const schoolYearStartMonth = 9; // September
const schoolYearEndMonth = 6; // June
const totalWeeksInYear = 40; // Total weeks in a school year (considering no seasonal or public holidays)
const internshipDuration = 8; // Duration of internship in weeks

// Calculate total weeks in a school year
const schoolYearMonths = schoolYearEndMonth - schoolYearStartMonth + 1;
const totalWeeks = schoolYearMonths * 4; // Assuming 4 weeks in a month

// Calculate internship percentage
const internshipPercentage = calculateInternshipPercentage(totalWeeks, internshipDuration);

// Display result
console.log("Percentage of time spent on industrial internship during each school year:", internshipPercentage.toFixed(2), "%");
