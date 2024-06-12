#!/usr/bin/node
function printSquare(size) {
    if (isNaN(size)) {
        console.log("Missing size");
    } else {
        for (let i = 0; i < size; i++) {
            console.log("#".repeat(size));
        }
    }
}

if (process.argv.length !== 3) {
    console.log("Usage: ./1-print_square.js <size>");
} else {
    printSquare(parseInt(process.argv[2]));
}
