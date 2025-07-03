# :hamburger: Best Burguer - Sistema de Pedidos

## :pencil: Descrição
Este projeto é um sistema de pedidos para a lanchonete "Best Burguer". Ele permite que os clientes visualizem o cardápio, adicionem itens ao carrinho, visualizem o carrinho de compras, escolham a forma de pagamento e finalizem o pedido. O sistema é composto por páginas HTML, um arquivo CSS para estilização e um script JavaScript para manipulação do carrinho de compras.

## :file_folder: Estrutura do Projeto
O projeto é composto pelos seguintes arquivos:

    1. Index.html: Página principal com o cardápio de   lanches.
    2. Pedidos.html: Página para visualizar o carrinho de compras e finalizar o pedido.
    3. style.css: Arquivo de estilo CSS para a estilização das páginas.
    4. script.js: Script JavaScript responsável por adicionar itens ao carrinho, visualizar o carrinho e manipular as formas de pagamento.

## :round_pushpin: Funcionalidades
### Página Principal (Index.html)
* Exibe o cardápio de lanches.
* Permite adicionar lanches ao carrinho de compras.

### Página de Pedidos (pedidos.html)
* Exibe os itens adicionados ao carrinho.
* Mostra o valor total do pedido.
* Oferece opções de pagamento (Cartão, Dinheiro, PIX).
* Permite finalizar o pedido ou limpar o carrinho.

### Script JavaScript (script.js)
* **adicionarAoCarrinho(button):** Adiciona um lanche ao carrinho e atualiza o localStorage.
* **visualizarCarrinho():** Exibe os itens do carrinho, calcula o valor total e configura os eventos para os botões de pagamento e finalização.
* **removerItem(index):** Remove um item específico do carrinho.
* **limparCarrinho():** Limpa todos os itens do carrinho.
* **atualizarValorTotal():** Atualiza o valor total do carrinho.

### Arquivo de Estilo (style.css)
* Define a aparência e o layout das páginas, incluindo o cabeçalho, corpo, itens do carrinho e botões.
* Utiliza variáveis CSS para cores e fontes, garantindo consistência visual.

## 📷 Demonstração
![Captura de tela 2024-07-08 153813](https://github.com/user-attachments/assets/b838db4b-798f-49ed-a659-5ca4ee98ed80)


## :grey_question: Como Usar
* Abrir o arquivo Index.html: Esta é a página principal onde você pode ver o cardápio e adicionar lanches ao carrinho.
* Navegar para pedidos.html: Aqui você pode ver o carrinho de compras, escolher a forma de pagamento e finalizar o pedido.

### Exemplo de Uso
    1. Abra o arquivo Index.html em seu navegador.
    2. Adicione alguns lanches ao carrinho clicando no botão "Adicionar ao Carrinho".
    3. Navegue para a página de pedidos (pedidos.html) para visualizar seu carrinho.
    4. Escolha a forma de pagamento e clique em "Finalizar Pedido".

## :computer: Tecnologias Utilizadas
* HTML5: Para a estrutura das páginas.
* CSS3: Para estilização das páginas.
* JavaScript: Para a lógica de manipulação do carrinho de compras e interatividade.

## Autor
Nome: Ana Carolina Merloti
Contato: desenvolvedora.ana.silva@gmail.com


