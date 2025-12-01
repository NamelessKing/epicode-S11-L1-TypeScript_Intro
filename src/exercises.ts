// src/exercises.ts

// =======================
// 1) Quali sono i tipi primitivi principali in TypeScript?
// Risposta (solo commento):
// string, number, boolean, null, undefined, symbol, bigint, any, unknown, never

// =======================
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome,
// un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const myName: string = "Tanjin";
const myAge: number = 30; // cambia con la tua età reale
const isStudyingTypeScript: boolean = true;

console.log("2)", myName, myAge, isStudyingTypeScript);

// =======================
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }

const greet = (name: string): string => {
  return "Ciao " + name;
};

console.log("3)", greet(myName));

// =======================
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log("4)", sum(2, 3));

// =======================
// 5) Crea una funzione che accetti un prezzo e restituisca
// il prezzo con IVA (22%). Usa i tipi appropriati.

const addVat = (price: number): number => {
  const vatRate = 0.22;
  return price * (1 + vatRate);
};

console.log("5)", addVat(100)); // 122

// =======================
// 6) Crea una funzione che concateni due stringhe
// e restituisca la lunghezza totale.

const concatAndLength = (s1: string, s2: string): number => {
  const result = s1 + s2;
  return result.length;
};

console.log("6)", concatAndLength("Hello", "World"));

// =======================
// 7) Cos'è un Type Union e come si scrive?
// Risposta (solo commento):
// Un Type Union è un tipo che permette a una variabile di contenere
// valori appartenenti a più tipi diversi.
// Sintassi: type ID = string | number;

// =======================
// 8) Crea una variabile che possa contenere un numero, null o undefined.

let maybeNumber: number | null | undefined;

maybeNumber = 10;
maybeNumber = null;
maybeNumber = undefined;

console.log("8)", maybeNumber);

// =======================
// 9) Crea un tipo per rappresentare i giorni della settimana
// usando union di stringhe letterali.

type Weekday =
  | "lunedi"
  | "martedi"
  | "mercoledi"
  | "giovedi"
  | "venerdi"
  | "sabato"
  | "domenica";

let today: Weekday = "lunedi";

console.log("9)", today);

// =======================
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]

const numbers1: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

console.log("10)", numbers1, numbers2);

// =======================
// 11) Crea una tupla per definire un array di 5 elementi,
// i primi 3 devono essere stringhe e gli ultimi due numeri.

type MyTuple = [string, string, string, number, number];

const tupleExample: MyTuple = ["a", "b", "c", 1, 2];

console.log("11)", tupleExample);

// =======================
// 12) Qual è la differenza tra type e interface?
// Risposta (solo commento, versione breve):
// - interface: pensata per descrivere la forma degli oggetti,
//   supporta extends e declaration merging.
// - type: alias più generale; può descrivere union, tuple, primitive, ecc.
//   Per oggetti spesso sono intercambiabili, ma type è più flessibile.

// =======================
// 13) Definisci un'interfaccia in TypeScript per un oggetto
// dotato di proprietà "firstname", "lastname", e "age".

interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

const personExample: Person = {
  firstname: "Giada",
  lastname: "Aldrigo",
  age: 21,
};

console.log("13)", personExample);

// =======================
// 14) Crea un'interfaccia per un utente con email obbligatoria
// e telefono opzionale.

interface User {
  email: string;
  phone?: string;
}

const user1: User = { email: "user@example.com" };
const user2: User = { email: "user2@example.com", phone: "3331234567" };

console.log("14)", user1, user2);

// =======================
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface Student {
  name: string;
  grade: number;
}

const students: Student[] = [
  { name: "Marco", grade: 28 },
  { name: "Giada", grade: 30 },
];

console.log("15)", students);

// =======================
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Vehicle {
  brand: string;
  model: string;
  year: number;
}

interface Car extends Vehicle {
  doors: number;
  isElectric: boolean;
}

// =======================
// 17) Crea un oggetto che implementi l'interfaccia Auto.

const myCar: Car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
  doors: 4,
  isElectric: true,
};

console.log("17)", myCar);

// =======================
// 18) Cosa sono i Generics in TypeScript?
// Risposta (solo commento):
// I Generics permettono di definire strutture (funzioni, classi, interfacce)
// che lavorano con tipi diversi, parametrizzati tramite placeholder come <T>.

// =======================
// 19) È possibile avere più tipi generici in un'interfaccia?
// Risposta (solo commento):
// Sì, si possono usare più parametri generici, es. <T, U> o <T, K, V>.

// =======================
// 20) Crea un'interfaccia generica per una risposta API.

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// esempio di utilizzo:

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todoResponse: ApiResponse<Todo[]> = {
  data: [
    { id: 1, title: "Learn TS", completed: false },
    { id: 2, title: "Study Redux", completed: false },
  ],
  status: 200,
  message: "OK",
};

console.log("20)", todoResponse);
