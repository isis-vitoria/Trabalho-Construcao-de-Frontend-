document.getElementById("formAdocao").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const mensagem = document.getElementById("mensagem");
  
    if (!nome || !telefone || !motivo) {
      mensagem.textContent = "Por favor, preencha todos os campos!";
      mensagem.style.color = "red";
      return;
    }
  
    mensagem.textContent = "Formulário enviado com sucesso! 🐾";
    mensagem.style.color = "green";
  
    document.getElementById("formAdocao").reset();
  });
  