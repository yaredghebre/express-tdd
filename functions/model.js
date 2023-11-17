class Model {
  constructor(jsonPath) {
    if (!jsonPath)
      throw new Error("Specificare il nome del file json da usare!");
    this.jsonPath = jsonPath;
  }

  read() {
    const jsonData = require(this.jsonPath);

    return jsonData;
  }
  add(newData) {
    const data = this.read();
    data.push(newData);
    return data;
  }
}

module.exports = Model;
