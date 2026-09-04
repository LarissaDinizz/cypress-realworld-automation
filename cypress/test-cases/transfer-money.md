# CT-TRANSFER-001 — Enviar dinheiro com saldo suficiente

## Objetivo

Validar que o usuário consegue enviar dinheiro para outro usuário quando possui saldo suficiente.

## Pré-condições

* Usuário cadastrado.
* Usuário possui saldo suficiente para realizar a transferência.
* Destinatário cadastrado no sistema.

## Passos

1. Acessar o Real World App.
2. Fazer login com um usuário válido.
3. Acessar a funcionalidade de transferência.
4. Selecionar um destinatário.
5. Informar um valor de transferência dentro do saldo disponível.
6. Adicionar uma nota para a transferência.
7. Confirmar o envio.

## Resultado esperado

A transferência deve ser realizada com sucesso e o sistema deve apresentar a confirmação do envio.

## Resultado obtido

A transferência foi realizada com sucesso e o sistema apresentou a confirmação do envio.

## Status

✅ **PASS — Comportamento conforme o esperado.**

# CT-TRANSFER-002 — Enviar dinheiro com saldo insuficiente

## Objetivo

Validar que o sistema impede o envio de dinheiro quando o valor da transferência é superior ao saldo disponível.

## Pré-condições

* Usuário cadastrado.
* Usuário possui saldo disponível inferior ao valor da transferência.
* Destinatário cadastrado no sistema.

## Passos

1. Acessar o Real World App.
2. Fazer login com um usuário válido.
3. Acessar a funcionalidade de transferência.
4. Selecionar um destinatário.
5. Informar um valor superior ao saldo disponível.
6. Adicionar uma nota para a transferência.
7. Confirmar o envio.

## Resultado esperado

O sistema deve impedir a transferência e apresentar uma mensagem de erro informando que o saldo é insuficiente.

## Resultado obtido

A transferência foi aceita pelo sistema e nenhuma mensagem de erro foi exibida.

## Status

❌ **FAIL — Comportamento não conforme o esperado.**

## Defeito identificado

O sistema permite realizar uma transferência com valor superior ao saldo disponível.
