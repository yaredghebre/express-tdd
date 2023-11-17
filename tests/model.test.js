const { test, expect } = require("@jest/globals");
const Model = require("../functions/model");

// mock gestisce i casi in cui il codice da eseguire tenta di importare un modulo

jest.mock(
  // modulo da importare
  "./db/dati.json",
  () => {
    return [
      {
        title: "Primo post",
        slug: "primo-post",
      },
    ];
  },
  {
    // modulo virtuale per il mock
    virtual: true,
  }
);

test("Model dovrebbe essere una classe", () => {
  expect(typeof Model).toBe("function");
});

test("L’istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell’istanza", () => {
  // nella dichiarazione di instance e nel lancio dell'errore dalla classae Model, questa va inserita in una funzione
  // arrow function
  const instance = () => new Model();
  expect(instance).toThrowError("Specificare il nome del file json da usare!");
});

test("L’istanza di model dovrebbe avere il metodo read", () => {
  const instance = new Model("test.json");

  expect(typeof instance.read).toBe("function");
  expect(instance.read).toBeDefined();
  expect(instance).toHaveProperty("read");
});

test("L’istanza di model dovrebbe avere il metodo add", () => {
  const instance = new Model("test.json");

  expect(typeof instance.read).toBe("function");
  expect(instance.read).toBeDefined();
  expect(instance).toHaveProperty("add");
});

test("read dovrebbe ritornare un array", () => {
  const instance = new Model("./db/dati.json");
  const result = instance.read();

  expect(result).toBeInstanceOf(Array);
  expect(result instanceof Array).toBe(true);
});

test("add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista", () => {
  const instance = new Model(".db/dati.json");
  const result = instance.add({
    title: "Secondo post",
    slug: "secondo-post",
  });

  expect(result).toBeInstanceOf(Array);
  expect(result.length).toBe(2);
});
