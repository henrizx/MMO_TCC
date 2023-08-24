document.addEventListener('DOMContentLoaded', function () {
  // Seu código JavaScript aqui


    const btnCadastrar = document.getElementById('btn-cadastrar');
    const btnFechar = document.getElementById('btn-fechar');
    const popup = document.getElementById('popup');
    const cadastroForm = document.getElementById('cadastro-form');

    btnCadastrar.addEventListener('click', exibirPopup);

    btnFechar.addEventListener('click', fecharPopup);

    cadastroForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // ... (seu código JavaScript existente para lidar com o envio do formulário) ...
    });

    function exibirPopup() {
      popup.style.display = 'flex';
    }

    function fecharPopup() {
      popup.style.display = 'none';
    }
  });
