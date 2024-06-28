function adicionarAoCarrinho(button) {
    let lancheElement = button.closest('.lanches').querySelector('.lanche');
    let valorElement = button.closest('.lanches').querySelector('.valor');
    let nome = lancheElement.innerText;
    let valor = valorElement.innerText;
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || { lanches: [], valores: [] };

    
    carrinho.lanches.push(nome);
    carrinho.valores.push(valor);


    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    window.alert(`${nome} adicionado ao carrinho no valor de ${valor}.`);

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
        formas_pagamento.style.display = 'none';
    } else {
        let total = 0;

        for (let i = 0; i < carrinho.lanches.length; i++) {
            let nome = carrinho.lanches[i];
            let valor = parseFloat(carrinho.valores[i].replace('R$ ', '').replace(',', '.')); // converte o valor para um número

            total += valor;

            lista_pedido.innerHTML += `
                <div class="item-carrinho">
                    <p>${nome} no valor de ${carrinho.valores[i]}</p>
                    <button class="remover-btn">Remover</button>
                </div>
            `;
        }

        valor_total_element.innerHTML = `<p>Valor total: R$ ${total.toFixed(2)}</p>`;
        formas_pagamento.style.display = 'block';

        lista_pedido.querySelectorAll('.remover-btn').forEach((button, index) => {
            button.addEventListener('click', () => {
                removerItem(index);
                button.closest('.item-carrinho').remove();
                atualizarValorTotal();
            });
        });
    }

    // Adiciona um listener para o botão Finalizar Pedido
    document.querySelector('#finalizar_pedido').addEventListener('click', function() {
        formas_pagamento.style.display = 'block';
        mensagem_pedido_concluido.style.display = 'none';
    });

    // Adiciona listeners para os botões de pagamento
    document.querySelector('#pagamento_cartao').addEventListener('click', function() {
        exibirMensagemPedidoConcluido('Cartão');
    });

    document.querySelector('#pagamento_dinheiro').addEventListener('click', function() {
        exibirMensagemPedidoConcluido('Dinheiro');
    });

    document.querySelector('#pagamento_pix').addEventListener('click', function() {
        exibirMensagemPedidoConcluido('PIX');
    });
}

function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || { lanches: [], valores: [] };

    // Remove o item pelo índice fornecido
    carrinho.lanches.splice(index, 1);
    carrinho.valores.splice(index, 1);

    // Atualiza o localStorage com o carrinho modificado
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Mensagem de confirmação
    window.alert('Item removido do carrinho.');
}
function exibirMensagemPedidoConcluido(formaPagamento) {
    let formas_pagamento = document.querySelector('#formas_pagamento');
    let mensagem_pedido_concluido = document.querySelector('#mensagem_pedido_concluido');

    formas_pagamento.style.display = 'none';
    mensagem_pedido_concluido.style.display = 'block';
    window.alert(`Pedido finalizado com sucesso! Pagamento: ${formaPagamento}`);
}

// Função para atualizar o valor total do carrinho
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
    exibirCarrinho();
});
