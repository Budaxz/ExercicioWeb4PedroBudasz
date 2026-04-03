const btnTransmutar = document.getElementById('btn-transmutar');
const titulo = document.getElementById('mensagem-titulo');
const texto = document.getElementById('mensagem-texto');

// Adicionando o evento de clique ao botão
btnTransmutar.addEventListener('click', () => {
    
    // O toggle liga/desliga a classe 'transmutado' no body da página
    document.body.classList.toggle('transmutado');

    // Verifica se a classe acabou de ser ativada
    if (document.body.classList.contains('transmutado')) {
        // Altera os textos para o cenário de falha na alquimia
        titulo.textContent = "A Porta da Verdade foi Aberta!";
        texto.textContent = "Transmutação Humana falhou. Custo cobrado: Um braço, uma perna e o corpo do seu irmão.";
        btnTransmutar.textContent = "Fechar a Porta da Verdade";
    } else {
        // Volta para os textos originais
        titulo.textContent = "A Lei da Troca Equivalente";
        texto.textContent = '"A humanidade não pode obter algo sem primeiro dar algo em troca. Para obter, algo de valor igual deve ser perdido."';
        btnTransmutar.textContent = "Realizar Transmutação";
    }
});