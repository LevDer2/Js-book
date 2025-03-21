// const dinosaurs = ["T-rex", "Velociraptor", "Stegosaurs", "Tricerators", "Brachiosaurs", "Pteradon", "Apatosaurs", "Diplodocus"];
// console.log(dinosaurs);
// const dinosaursAndNumbers = [3, "dinosaurs", ["tricerators", "stegator", 367], 10];
// console.log(dinosaursAndNumbers[2][2]);

// const maniacs = ["Yakoo", "Google", "Microsoft"];
// console.log(maniacs [maniacs.length - 1]);

let animals = [];
animals.push("Cat");
animals.push("Dog");
animals.push("Llama");
animals.unshift("Polar Bear");
animals.unshift("Monkey");
console.log(animals);

const lastAnimals = animals.pop();
animals.pop();
animals.unshift(lastAnimals);
console.log(lastAnimals);
console.log(animals);
const firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);
