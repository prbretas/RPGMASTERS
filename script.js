let name
let age
let race
let classChar
let HealthPoints
let MagicPoints

/******************************************************* */


let selectedDice = 0;

function selectDice(sides) {
  selectedDice = sides;
  document.getElementById(
    "result"
  ).textContent = `Dado selecionado: d${sides}`;
}

function rollDice() {
  if (selectedDice === 0) {
    document.getElementById("result").textContent =
      "Por favor, selecione um dado primeiro.";
    return;
  }

  const numRolls = parseInt(document.getElementById("rolls").value);
  if (isNaN(numRolls) || numRolls < 1) {
    document.getElementById("result").textContent =
      "Digite um número válido de rolagens.";
    return;
  }

  let results = [];
  let total = 0;

  for (let i = 0; i < numRolls; i++) {
    const result = Math.floor(Math.random() * selectedDice) + 1;
    results.push(result);
    total += result;
  }

  document.getElementById("result").innerHTML =
    `<p>Resultados do d${selectedDice} (${numRolls}x): ${results.join(
      ", "
    )}</p>` + (numRolls > 1 ? `<p>Soma total: ${total}</p>` : "");
}