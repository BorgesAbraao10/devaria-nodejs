const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const minhaPrimeiraConstanteString = "My first constant";
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question("Tell us your age:", (input) => {
  leituraDeCampo = input;
  console.log(`O usuário digitou ${leituraDeCampo}`);
});
