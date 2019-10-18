let dwarves = ['Bifur', 'Bofur', 'Bombur', 'Fili', 'Kili', 'Oin', 'Gloin', 'Thorin',
    'Balin', 'Dwalin', 'Nori', 'Dori'];

/* dwarves.forEach(output);

function output(item, index, array) {
    console.log(index, item);
} */

dwarves.forEach(function (item, index, array) {
    if (item === 'Thorin') {
        item = item.toUpperCase();
    } else {
        item = item.toLowerCase();
    }

    //console.log(index, item);
})

let grades = [12, 12, 32, 43, 42, 23];

/*for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
} */
/* 
grades.forEach(function (item, i, array) {
    console.log(i, item);
}) */

let grades1 = [
    [12, 13, 32, 43, 42, 23],
    [12, 43, 14, 43, 33, 23, 44, 77, 88,],
    [12, 18, 55, 43, 42, 19]
];

/* for (let i = 0; i < grades1.length; i++) {
    for (let k = 0; k < grades1[i].length; k++) {
        console.log(grades1[i][k]);
    }
    console.log("~~~~~~~")
} */

grades1.forEach(function (row) {
    row.forEach(function (col) {
        console.log(col)
    })
    console.log("----")
}
)


