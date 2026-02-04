# 🏆 Calculadora de Partidas Rankeadas

## 📌 Descrição

Este projeto consiste na implementação de uma **Calculadora de Partidas Rankeadas**, desenvolvida em **JavaScript puro**, com o objetivo de praticar conceitos fundamentais de lógica de programação.

A aplicação calcula o **saldo de vitórias** de um jogador com base na quantidade de vitórias e derrotas informadas, o qual determina seu **nível ranqueado**, conforme regras previamente definidas.

---

## 🎯 Objetivo

Criar uma função que:

* Receba como parâmetros:

  * Quantidade de **vitórias**
  * Quantidade de **derrotas**
* Calcule o saldo de rankeadas utilizando a fórmula:

  ```
  saldo = vitórias - derrotas
  ```
* Determine o nível do jogador com base no número de vitórias
* Exiba uma mensagem final no formato:

  ```
  O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}
  ```

---

## 🧠 Regras de Classificação

| Vitórias | Nível    |
| -------- | -------- |
| < 10     | Ferro    |
| 11 – 20  | Bronze   |
| 21 – 50  | Prata    |
| 51 – 80  | Ouro     |
| 81 – 90  | Diamante |
| 91 – 100 | Lendário |
| ≥ 101    | Imortal  |

---

## 🛠️ Conceitos Utilizados

O projeto utiliza exclusivamente **JavaScript puro**, contemplando:

* ✔ Variáveis
* ✔ Operadores aritméticos e lógicos
* ✔ Estruturas de decisão (`if / else if / else`)
* ✔ Funções
* ✔ **Laços de repetição** (`for`)
* ✔ Manipulação de arrays e objetos simples

---

## 🔁 Simulação de Múltiplos Jogadores

O código simula o processamento de múltiplos jogadores através de um array de objetos, garantindo o reaproveitamento da função principal.

---

## ▶️ Execução

### Pré-requisitos

* Node.js (opcional) ou qualquer navegador com console JavaScript

### Executar no Node.js

```bash
node script.js
```

### Executar no navegador

1. Abra o console do navegador
2. Cole o código
3. Observe a saída no console

---

## 🖨️ Exemplo de Saída

```text
O Herói tem de saldo de 6 está no nível de Ferro
O Herói tem de saldo de 10 está no nível de Bronze
O Herói tem de saldo de 28 está no nível de Prata
O Herói tem de saldo de 47 está no nível de Ouro
O Herói tem de saldo de 62 está no nível de Lendário
O Herói tem de saldo de 80 está no nível de Imortal
```

---

## 📁 Estrutura do Projeto

```text
📦 calculadora-rankeadas
 ┣ 📄 script.js
 ┗ 📄 README.md
```

---

## 📌 Observações Técnicas

* O **nível do jogador é determinado exclusivamente pelo número de vitórias**.
* O **saldo de vitórias é exibido apenas como informação complementar**
* Não são utilizadas bibliotecas externas ou frameworks
