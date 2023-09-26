const listaProdutos = () => {
  return fetch("http://localhost:3000/produtos")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const getProdutoPorId = (id) => {
  return fetch(`http://localhost:3000/produtos/${id}`)
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const atualizarProduto = (id, produtoAtualizado) => {
  return fetch(`http://localhost:3000/produtos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produtoAtualizado),
  })
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const criarProduto = (novoProduto) => {
  return fetch("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(novoProduto),
  })
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const deletarProduto = (idProduto) => {
  return fetch(`http://localhost:3000/produtos/${idProduto}`, {
      method: "DELETE",
    }
  )
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

export const produtoServicos = {
  listaProdutos,
  getProdutoPorId,
  atualizarProduto,
  criarProduto,
  deletarProduto,
};

