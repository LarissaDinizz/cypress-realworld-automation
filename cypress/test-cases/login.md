# Casos de Teste - Login

## CT-LOGIN-001 - Login com credenciais válidas

**Pré-condição:** Usuário cadastrado.

**Passos:**
1. Acessar a aplicação.
2. Informar um usuário válido.
3. Informar uma senha válida.
4. Clicar em Login.

**Resultado esperado:**
O usuário deve acessar a aplicação com sucesso e visualizar a página principal.

**Status:** ✅ Automatizado com Cypress

---

## CT-LOGIN-002 - Login com credenciais inválidas

**Pré-condição:** Usuário cadastrado.

**Passos:**
1. Acessar a aplicação.
2. Informar credenciais inválidas.
3. Clicar em Login.

**Resultado esperado:**
O sistema deve impedir o acesso e apresentar uma mensagem de erro.

**Status:** ✅ Automatizado com Cypress