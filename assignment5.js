function calculateArea(length = 5, width = 4) {
    return length * width;
}

const rectangleArea = (length = 5, width = 4) => {
    return length * width;
};

// Standard function with default values
console.log("Standard Function Area (Default 5x4):", calculateArea());

// Arrow function with custom values
console.log("Arrow Function Area (Custom 10x3):", rectangleArea(10, 3));

// Demonstrating block scope
{
    let blockVar = 10;
}

try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)");
}