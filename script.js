function adicionarAoCarrinho(button) {
    let lancheElement = button.closest('.lanches').querySelector('.lanche');
    let valorElement = button.closest('.lanches').querySelector('.valor');
    let nome = lancheElement.innerText;
    let valor = valorElement.innerText;
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || { lanches: [], valores: [] };

    
    carrinho.lanches.push(nome);
    carrinho.valores.push(valor);


    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    visualizarCarrinho();
}

function visualizarCarrinho() {
    let lista_pedido = document.querySelector('#lista_pedido');
    let valor_total_element = document.querySelector('#valor_total');
    let formas_pagamento = document.querySelector('#formas_pagamento');
    let mensagem_pedido_concluido = document.querySelector('#mensagem_pedido_concluido');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || { lanches: [], valores: [] };

    console.log('Carrinho carregado:', carrinho);

    lista_pedido.innerHTML = '';
    valor_total_element.innerHTML = '';

    if (carrinho.lanches.length === 0) {
        lista_pedido.innerHTML = '<p>Seu carrinho está vazio.</p>';
        valor_total_element.innerHTML = '<p>Valor total: R$ 0,00</p>';
    } else {
        let total = 0;

        for (let i = 0; i < carrinho.lanches.length; i++) {
            let nome = carrinho.lanches[i];
            let valor = parseFloat(carrinho.valores[i].replace('R$ ', '').replace(',', '.'));

            total += valor;

            lista_pedido.innerHTML += `
                <div class="item-carrinho">
                    <p class="item-nome">${nome}</p>
                    <p class="item-preco">${carrinho.valores[i]}</p>
                    <button class="remover-btn">Remover</button>
                </div>
            `;
        }

        valor_total_element.innerHTML = `<p>Valor total: R$ ${total.toFixed(2)}</p>`;

        lista_pedido.querySelectorAll('.remover-btn').forEach((button, index) => {
            button.addEventListener('click', () => {
                removerItem(index);
                button.closest('.item-carrinho').remove();
                atualizarValorTotal();
            });
        });
    }
 
    document.querySelector('#pagamento_cartao').addEventListener('click', function() {
        formaPagamentoSelecionada = 'Cartão';
    });

    document.querySelector('#pagamento_dinheiro').addEventListener('click', function() {
        formaPagamentoSelecionada = 'Dinheiro';
    });

    document.querySelector('#pagamento_pix').addEventListener('click', function() {
        formaPagamentoSelecionada = 'PIX';
    });

    // Adiciona listener para o botão de limpar carrinho
    document.querySelector('#limpar_carrinho').addEventListener('click', limparCarrinho);

    // Adiciona listener para o botão de finalizar pedido
    document.querySelector('#finalizar_pedido').addEventListener('click', function() {
        limparCarrinho();
        mensagem_pedido_concluido.style.display = 'block';
        document.querySelector('#forma_pagamento_selecionada').innerText = `Forma de pagamento: ${formaPagamentoSelecionada}`;
    });
}

function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || { lanches: [], valores: [] };

    // Remove o item pelo índice fornecido
    carrinho.lanches.splice(index, 1);
    carrinho.valores.splice(index, 1);

    // Atualiza o localStorage com o carrinho modificado
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function limparCarrinho() {
    localStorage.removeItem('carrinho');
    visualizarCarrinho();
}

function atualizarValorTotal() {
    let valor_total_element = document.querySelector('#valor_total');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || { lanches: [], valores: [] };

    if (carrinho.lanches.length === 0) {
        valor_total_element.innerHTML = '<p>Valor total: R$ 0,00</p>';
    } else {
        let total = 0;

        for (let i = 0; i < carrinho.lanches.length; i++) {
            let valor = parseFloat(carrinho.valores[i].replace('R$ ', '').replace(',', '.')); // converte o valor para um número
            total += valor;
        }

        valor_total_element.innerHTML = `<p>Valor total: R$ ${total.toFixed(2)}</p>`;
    }
}

// Ao carregar a página lista_pedido.html, exibe o carrinho atual
document.addEventListener('DOMContentLoaded', function() {
    visualizarCarrinho();
});
