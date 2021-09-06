// Write your solution here!

const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}


(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
 });


function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


function destructivelyRemoveLastCat() {
    cats.pop();
}
  
(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  
function  destructivelyRemoveFirstCat() {
    cats.shift();
}

(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function appendCat(name) {
    const newCatsArray = [
        ...cats, name
    ];
    return newCatsArray;
}

(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function prependCat(name) {
    const newCatsArray = [
        name, ...cats
    ];
    return newCatsArray;
}

(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


function removeLastCat() {
    return cats.slice(0,-1);
    
}

function removeFirstCat() {
    return cats.slice(1);
}

