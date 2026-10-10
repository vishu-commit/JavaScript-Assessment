let score = 85;
let grade;

// Using if...else to evaluate the score
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// Using switch to determine the letter grade
switch (grade) {
    case "A":
        grade = "A";
        break;
    case "B":
        grade = "B";
        break;
    case "C":
        grade = "C";
        break;
    case "D":
        grade = "D";
        break;
    default:
        grade = "F";
}

// Using ternary operator to check pass or fail
let status = score >= 40 ? "Passed" : "Failed";

console.log("Score:", score);
console.log("Grade:", grade);
console.log("Status:", status);