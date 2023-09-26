document
  .querySelector(".form-login")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "123") {
      window.location.href = "produtos.html";
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  });

