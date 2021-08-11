const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi

console.log('================Blogiausias pazymys pradzia======================');
let lowestMark = Math.min(...data[0].marks);
for (var i = 0; i < data.length; i++) {
    let minMark = Math.min(...data[i].marks);
    if (minMark <= lowestMark) {
        lowestMark = minMark;
    }
}

for (var i = 0; i < data.length; i++) {
    if (Math.min(...data[i].marks) == lowestMark) {
        console.log('Mokinys ' + data[i].name);
        console.log('Maziausias pazymys ' + lowestMark);
    }
}

console.log('================Blogiausias pazymys pabaiga======================');

// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi
console.log('================Geriausias pazymys pradzia======================');
let highestMark = Math.max(...data[0].marks);
for (var i = 0; i < data.length; i++) {
    let maxMark = Math.max(...data[i].marks);
    if (maxMark >= highestMark) {
        highestMark = maxMark;
    }
}

for (var i = 0; i < data.length; i++) {
    if (Math.max(...data[i].marks) == highestMark) {
        console.log('Mokinys ' + data[i].name);
        console.log('Didziausias pazymys ' + highestMark);
    }
}

console.log('================Geriausias pazymys pabaiga======================');

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki

const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;


console.log('================Blogiausias pazymiu vidurkis pradzia======================');

let lowestAvg = average(data[0].marks);
for (var i = 0; i < data.length; i++) {
    let marksAvg = average(data[i].marks);
    if (marksAvg <= lowestAvg) {
        lowestAvg = marksAvg;
    }
}

for (var i = 0; i < data.length; i++) {
    if (average(data[i].marks) == lowestAvg) {
        console.log('Mokinys ' + data[i].name);
        console.log('Blogiausias pazymiu vidurkis ' + lowestAvg);
    }
}

console.log('================Blogiausias pazymiu vidurkis pabaiga======================');

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki

console.log('================Geriausias pazymiu vidurkis pradzia======================');

let highestAvg = average(data[0].marks);
for (var i = 0; i < data.length; i++) {
    let marksAvg = average(data[i].marks);
    if (marksAvg >= highestAvg) {
        highestAvg = marksAvg;
    }
}

for (var i = 0; i < data.length; i++) {
    if (average(data[i].marks) == highestAvg) {
        console.log('Mokinys ' + data[i].name);
        console.log('Geriausias pazymiu vidurkis ' + highestAvg);
    }
}

console.log('================Geriausias pazymiu vidurkis pabaiga======================');

// Isspausdinti mokinio varda, jei jis turi pazymi 8
console.log('================Pazymys 8 pradzia======================');

for (var i = 0; i < data.length; i++) {
    let haveEight = false;
    for (var j = 0; j < data[i].marks.length; j++) {
        if (data[i].marks[j] == 8) {
            haveEight = true;

        }
    }

    if (haveEight) {
        console.log('Mokinys ' + data[i].name);
        console.log('Pazymys 8');
    }

}


console.log('================Pazymys 8 pabaiga======================');


// Isspausdinti mokinio varda, jei jis neturi pazymio 7
console.log('================Neturi pazymio 7 pradzia======================');

for (var i = 0; i < data.length; i++) {
    let haveSeven = false;
    for (var j = 0; j < data[i].marks.length; j++) {
        if (data[i].marks[j] == 7) {
            haveSeven = true;
        }
    }

    if (!haveSeven) {
        console.log('Mokinys ' + data[i].name);
    }
}

console.log('================Neturi pazymio 7 pabaiga======================');