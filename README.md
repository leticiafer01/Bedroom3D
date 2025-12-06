# 🦜 BEDROOM 3D

Este projeto apresenta um **visualizador interativo 3D** desenvolvido com **HTML, CSS e JavaScript**, utilizando a biblioteca [Spline](https://spline.design/) para exibir cenas 3D. O usuário pode interagir com **botões invisíveis sobre a cena**, que mostram informações e links de projetos ao serem clicados.

---

## 🛸 Tecnologias Utilizadas

- **HTML5** – Estrutura da página, incluindo o visualizador Spline e os botões interativos.  
- **CSS3** – Estilização da página e dos elementos:
  - Tela cheia e fundo escuro
  - Posicionamento absoluto dos botões invisíveis
  - Tooltip com efeito de transição suave
- **JavaScript** – Lógica interativa:
  - Exibição de **tooltip** ao passar o mouse sobre os botões
  - Posicionamento dinâmico da tooltip conforme o cursor
  - Exibição de painel lateral com informações do projeto ao clicar
  - Fechamento do painel ao clicar fora

- **Spline Viewer** – Biblioteca externa para renderizar a cena 3D em tempo real.

---

## 🎍 O que foi feito

- Criação de uma **cena 3D interativa** incorporada via `<spline-viewer>`.  
- Implementação de **botões invisíveis** sobre a cena, que funcionam como hotspots clicáveis.  
- Desenvolvimento de uma **tooltip** que aparece ao passar o mouse sobre os botões, exibindo o nome do projeto.  
- Painel lateral que mostra **nome, descrição e link** do projeto ao clicar em um botão.  
- Lógica para fechar o painel ao clicar fora, garantindo uma experiência fluida.  

---

## 🪆 Como funciona

1. Cada botão invisível (`.project-button`) está posicionado sobre a cena 3D.  
2. Ao passar o mouse sobre um botão, a **tooltip** aparece próxima ao cursor.  
3. Ao clicar no botão, o **painel lateral** exibe as informações do projeto.  
4. Ao clicar fora do painel ou do botão, o painel é fechado automaticamente.  

---

## 🗂️ Arquivos principais

- `index.html` – Estrutura da página e inclusão do Spline Viewer  
- `style.css` – Estilo da página, botões e tooltip  
- `script.js` – Interatividade dos botões, tooltip e painel lateral 

---

## 🔗 Acesse aqui

[🫆](https://leticiafer01.github.io/Bedroom3D/)

