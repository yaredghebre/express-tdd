const { test, expect } = require("@jest/globals");
const createSlug = require("../functions/createSlug");
const posts = require("../db/posts.json");

test("Dovrebbe ritornare una stringa", () => {
  const title = posts[0].title;
  const result = createSlug(title);
  expect(typeof result).toBe("string");
});

test("Dovrebbe ritornare una stringa in lowerCase", () => {
  const title = posts[0].title;
  const result = createSlug(title);
  expect(result).toBe("ciambellone");
});

test("Dovrebbe ritornare una stringa con gli spazi sostituiti da -", () => {
  const title = posts[1].title;
  const result = createSlug(title);
  expect(result).toBe("cracker-alla-barbabietola");
});

// test("Dovrebbe incrementare di 1 lo slug quando esiste già", () => {
//   const title = "Cracker alla Barbabietola";
//   const existingSlugs = ["cracker-alla-barbabietola"];

//   const result = createSlug(title, existingSlugs);
//   expect(result).toBe("cracker-alla-barbabietola-1");
// });

// test("Dovrebbe lanciare un errore se senza titolo o formato errato");

// test("Dovrebbe lanciare un errore se manca array dei post");
