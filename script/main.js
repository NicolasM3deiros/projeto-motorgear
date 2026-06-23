// main.js

// 1. Validação do Formulário (Usado em form.html)
function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '') {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }

    // Uso de Expressão Regular (Regex) para validar o formato do e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    if (mensagem === '') {
        alert('Por favor, digite a sua mensagem.');
        return false;
    }

    return true; // Permite o envio do formulário
}

// 2. Recuperação de Dados via GET (Usado em formAction.html)
function carregarDadosGET() {
    // Pega os parâmetros da URL gerados pelo formulário
    const parametros = new URLSearchParams(window.location.search);
    
    // Verifica se os parâmetros existem antes de tentar exibi-los
    if (parametros.has('nome') && parametros.has('email')) {
        const nome = parametros.get('nome');
        const email = parametros.get('email');
        const mensagem = parametros.get('mensagem');

        // Injeta os valores no HTML da página de destino
        document.getElementById('resNome').textContent = nome;
        document.getElementById('resEmail').textContent = email;
        document.getElementById('resMensagem').textContent = mensagem;
    }
}

// Executa a função de carregar dados apenas se estiver na página formAction
if (window.location.pathname.includes('formAction.html')) {
    window.addEventListener('DOMContentLoaded', carregarDadosGET);
}