# ⚗️ Transmutação Interativa: Fullmetal Alchemist

Um projeto web interativo desenvolvido para demonstrar a manipulação do DOM e a aplicação de transições de estado via CSS e JavaScript. Com o tema do anime Fullmetal Alchemist, o projeto simula a quebra do tabu da "Transmutação Humana", alternando dinamicamente o tema visual e o conteúdo de texto da página através de um único botão.

## 🚀 Tecnologias e Conceitos Aplicados

* **HTML5:** Estruturação dos elementos com identificadores (`id`) específicos para facilitar a captura via script.
* **CSS3:** * Uso intensivo da propriedade `transition` para garantir mudanças de cor suaves e fluidas.
  * Estruturação de variáveis de cor (`:root`) divididas entre "Estado Normal" e "Estado Transmutado".
  * Alternância de temas baseada na injeção de uma classe `.transmutado` na tag `<body>`.
* **JavaScript (Vanilla):** * Captura de eventos de clique (`addEventListener`).
  * Manipulação de classes CSS utilizando o método `classList.toggle()`.
  * Atualização dinâmica de conteúdo textual no DOM (`textContent`) com base em condicionais (if/else).

## 💻 Como executar o projeto

O projeto é inteiramente estático (Client-side).

1. Clone o repositório para o seu ambiente local:
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
Abra a pasta correspondente ao projeto.

Execute o arquivo index.html em qualquer navegador moderno.

👨‍💻 Autor
Desenvolvido por Pedro Budasz.