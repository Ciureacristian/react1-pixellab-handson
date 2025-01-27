const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
  Folosind metoda map pe arrayul skills, returneaza
  si afiseaza in consola un array in care fiecare
  consoana este scrisa cu litera mare (vocalele nu)
`);
const vowels = ['a', 'e', 'i', 'o', 'u'];
const arrVowels = person.skills.map((skill) => {
  const letters = skill.split('');
  const upperCaseVowels = letters.map((letter) => {
    if (vowels.includes(letter)) {
      return letter.toUpperCase();
    }

    return letter;
  });

  return upperCaseVowels.join('');
});

console.log(arrVowels);

console.warn(`
  Folosind map pe arrayul friends, returneaza un array
  in care fiecare pozitie contine propozitia
  “Ma numesc {name} {surname} si am {age} ani.  ”
`);
const sentences = person.friends.map((friend) => {
  const { name, surname, age } = friend;

  return `Ma numesc ${name} ${surname} si am ${age} ani.`;
});
console.log(sentences);

console.warn(`
Folosind map pe arrayul friends, returneaza un array in care fiecare
 pozitie contine propozitia
“Diferenta de varsta dintre {friendName} si {personName} este {diff}”`);
const ageDifferenceSentences = person.friends.map((friend) => {
  const ageDifference = Math.abs(person.age - friend.age);
  return `Diferenta de varsta dintre ${friend.name} si ${person.name} este ${ageDifference} de ani.`;
});

console.log(ageDifferenceSentences);

console.warn(`
Returneaza si afiseaza un array in care fiecare pozitie contine diferenta
 dintre varsta persoanei si lungimea cuvantului de pe arrayul skill `);
const ageSkillDifferences = person.skills.map((skill) =>
  Math.abs(person.age - skill.length),
);

console.log(ageSkillDifferences);
