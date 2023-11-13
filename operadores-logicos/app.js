const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Esse programa vai checar se você é maior de 18 anos e tem habilitação para entrar no Kart"
);
console.log(
  "Além das suas verificações, precisamos consfirmar se está na lista de reserva"
);

readline.question("Qual ano você nasceu?", (ano) => {
  if (ano > 2004) {
    console.log("Você não tem 18 anos");
  } else {
    readline.question("Você tem habilitação? (Sim/Não)", (temHabilitacao) => {
      if (!(temHabilitacao.toUpperCase() === "SIM")) {
        console.log("Você não tem habilitação para entrar no Kart");
      } else {
        readline.question("Qual é o seu nome?", (nome) => {
          switch (nome) {
            case "Douglas":
              console.log("Bem vindo ao Kart Douglas");
              break;
            case "Rafael":
              console.log("Bem vindo ao Kart Rafael ");
              break;
            default:
              console.log(
                "Seu nome não foi identificado na lista de presença."
              );
          }
        });
      }
    });
  }
});
