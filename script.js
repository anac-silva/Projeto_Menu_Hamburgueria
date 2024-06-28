function carrinho() {
    let nome = document.getElementById('lanche').innerText
    let valor = document.getElementById('valor').innerText
    let res = document.querySelector('#res')
    res.innerText = ` ${nome} adicionado ao carrinho.`

    let pedido = []
    let valor_total = []
    pedido.push(nome)
    valor_total.push(valor)
    res.innerText += `Pedido total:`
    for (c=0; c<pedido.length; c++){
        res.innerText += `${pedido[c]} no valor de ${valor_total}`
    }
        
}




