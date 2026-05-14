// script.js

function lerNumeroValido(mensagem) {
  let valor = prompt(mensagem);
  while (valor === null || valor.trim() === "" || isNaN(Number(valor))) {
    valor = prompt(mensagem);
  }
  return Number(valor);
}

const nome = prompt("Qual é o seu nome?") || "";

const renda = lerNumeroValido("Qual é a sua renda mensal?");

let qDespesas = lerNumeroValido("Quantas despesas você vai informar? (1 a 5)");
if (qDespesas < 1) qDespesas = 1;
if (qDespesas > 5) qDespesas = 5;
qDespesas = Math.floor(qDespesas);

let totalDespesas = 0;
for (let i = 1; i <= qDespesas; i++) {
  const v = lerNumeroValido(`Despesa ${i}:`);
  totalDespesas += v;
}

let mensagem;
if (totalDespesas > renda) {
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  const sobra = renda - totalDespesas;
  if (sobra >= 0.3 * renda) {
    mensagem = "✅ Ótimo: boa margem de sobra.";
  } else {
    mensagem = "🙂 Ok: dá para melhorar a sobra.";
  }
}

const sobraFinal = renda - totalDespesas;
const resumo =
  `Nome: ${nome}\n` +
  `Renda: R$ ${renda.toFixed(2)}\n` +
  `Total de despesas: R$ ${totalDespesas.toFixed(2)}\n` +
  `Sobra: R$ ${sobraFinal.toFixed(2)}\n` +
  `${mensagem}`;

console.log("---- Resumo do Orçamento ----\n" + resumo);
alert(resumo);
