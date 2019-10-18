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

    console.log(index, item);
})