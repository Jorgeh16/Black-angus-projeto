let carrinho = [];

const produtos = [

    // PROMOÇÃO DA SEMANA
    {
        id: 1,
        nome: "Burguer da Semana",
        descricao: "Blend 160g, queijo cheddar, cebola caramelizada e molho da casa. Só essa semana.",
        preco: 27.90,
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        categoria: "promocao"
    },
    {
        id: 2,
        nome: "Combo da Semana",
        descricao: "Burguer da Semana + batata frita + refrigerante lata.",
        preco: 36.90,
        imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        categoria: "promocao"
    },

    // BURGUERS CLÁSSICOS
    {
        id: 3,
        nome: "Black Angus Classic",
        descricao: "Hambúrguer artesanal, queijo, alface, tomate e molho especial.",
        preco: 29.90,
        imagem: "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
        categoria: "hamburgueres"
    },
    {
        id: 4,
        nome: "Black Angus Bacon",
        descricao: "Hambúrguer artesanal, queijo, bacon crocante e molho especial.",
        preco: 34.90,
        imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9",
        categoria: "hamburgueres"
    },
    {
        id: 5,
        nome: "Black Angus Cheddar",
        descricao: "Hambúrguer artesanal, cheddar cremoso e molho especial.",
        preco: 32.90,
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        categoria: "hamburgueres"
    },
    {
        id: 6,
        nome: "Fictício Argentino",
        descricao: "Pão brioche, 160g de carne, cheddar derretido, cebola crispy e maionese de bacon.",
        preco: 35.90,
        imagem: "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
        categoria: "hamburgueres"
    },

    // ENTRADINHAS
    {
        id: 7,
        nome: "Croqueta da Casa",
        descricao: "Bolinho de carne desfiada empanado com farofa panko. 6 unidades.",
        preco: 32.90,
        imagem: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d",
        categoria: "entradinhas"
    },
    {
        id: 8,
        nome: "Onion Rings",
        descricao: "Anéis de cebola empanados e fritos até ficarem crocantes.",
        preco: 21.90,
        imagem: "https://images.unsplash.com/photo-1639024471283-03518883512d",
        categoria: "entradinhas"
    },
    {
        id: 9,
        nome: "Batata Bacon e Cheddar",
        descricao: "Batata frita coberta com bacon crocante e cheddar cremoso.",
        preco: 29.90,
        imagem: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d",
        categoria: "entradinhas"
    },

    // COMBOS ESPECIAIS
    {
        id: 10,
        nome: "Combo Classic",
        descricao: "Black Angus Classic + batata frita + refrigerante lata.",
        preco: 42.90,
        imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        categoria: "combos"
    },
    {
        id: 11,
        nome: "Combo Casal",
        descricao: "2 hambúrgueres artesanais + 2 batatas + 2 refrigerantes lata.",
        preco: 74.90,
        imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        categoria: "combos"
    },
    {
        id: 12,
        nome: "Combo Família",
        descricao: "4 hambúrgueres + batata grande + refrigerante 1,5L.",
        preco: 109.90,
        imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        categoria: "combos"
    },

    // HOT-DOGS
    {
        id: 13,
        nome: "Dog Clássico",
        descricao: "Pão temperado, salsicha artesanal, queijo cheddar, cebola crispy e maionese da casa.",
        preco: 26.90,
        imagem: "https://images.unsplash.com/photo-1612392062631-94dd858cba88",
        categoria: "hotdogs"
    },
    {
        id: 14,
        nome: "Dog Combo",
        descricao: "Dog Clássico + batata frita + refrigerante lata.",
        preco: 36.90,
        imagem: "https://images.unsplash.com/photo-1612392062631-94dd858cba88",
        categoria: "hotdogs"
    },

    // BLACK KIDS
    {
        id: 15,
        nome: "Combo Kids",
        descricao: "Mini burguer, queijo mussarela e picles. Acompanha batata pequena e suco.",
        preco: 28.90,
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        categoria: "kids"
    },

    // SOBREMESAS
    {
        id: 16,
        nome: "Brownie com Sorvete",
        descricao: "Brownie quentinho acompanhado de sorvete cremoso.",
        preco: 19.90,
        imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
        categoria: "sobremesas"
    },
    {
        id: 17,
        nome: "Milk Shake Chocolate",
        descricao: "Milk shake cremoso sabor chocolate belga.",
        preco: 22.90,
        imagem: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
        categoria: "sobremesas"
    },

    // BEBIDAS
    {
        id: 18,
        nome: "Refrigerante Lata",
        descricao: "Coca-Cola, Guaraná ou Fanta, gelada, 350ml.",
        preco: 6.50,
        imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
        categoria: "bebidas"
    },
    {
        id: 19,
        nome: "Suco Natural",
        descricao: "Suco natural de laranja ou limão, 400ml.",
        preco: 9.90,
        imagem: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
        categoria: "bebidas"
    },
    {
        id: 20,
        nome: "Água sem Gás",
        descricao: "Água mineral sem gás, 500ml.",
        preco: 4.50,
        imagem: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
        categoria: "bebidas"
    },

    // ADICIONAIS
    {
        id: 21,
        nome: "Blend Extra de Carne",
        descricao: "Adicione mais um blend de 160g ao seu lanche.",
        preco: 10.00,
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        categoria: "adicionais"
    },
    {
        id: 22,
        nome: "Queijo Empanado",
        descricao: "Porção extra de queijo empanado e crocante.",
        preco: 10.00,
        imagem: "https://images.unsplash.com/photo-1639024471283-03518883512d",
        categoria: "adicionais"
    },
    {
        id: 23,
        nome: "Embalagem para Viagem",
        descricao: "Embalagem reforçada para transporte do pedido.",
        preco: 3.00,
        imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        categoria: "adicionais"
    }
];

const listaProdutos = document.getElementById("lista-produtos");

const tituloSecao = document.getElementById("titulo-secao");

const taxaEntrega = 5.00;

document.getElementById("taxa-entrega").textContent = formatarMoeda(taxaEntrega);

const nomesCategorias = {
    promocao: "Promoção da Semana",
    hamburgueres: "Burguers Clássicos",
    entradinhas: "Entradinhas Especiais",
    combos: "Combos Especiais",
    hotdogs: "Hot-Dogs",
    kids: "Black Kids",
    sobremesas: "Sobremesas",
    bebidas: "Bebidas",
    adicionais: "Adicionais"
};

function filtrarCategoria(categoria) {

    document.querySelectorAll(".categorias button").forEach(function(botao) {
        botao.classList.remove("active");
    });

    document.getElementById("btn-" + categoria).classList.add("active");

    tituloSecao.textContent = nomesCategorias[categoria];

    const produtosFiltrados = produtos.filter(function(produto) {
        return produto.categoria === categoria;
    });

    renderizarProdutos(produtosFiltrados);

}

function renderizarProdutos(produtosParaExibir) {

    listaProdutos.innerHTML = "";

    if (produtosParaExibir.length === 0) {

        listaProdutos.innerHTML = `
            <p class="text-secondary">Nenhum item nessa categoria ainda.</p>
        `;

        return;

    }

    produtosParaExibir.forEach(function(produto) {

    listaProdutos.innerHTML += `

        <div class="col-12 col-md-6 col-lg-4">

            <div class="card h-100 shadow-sm">

                <img
                    src="${produto.imagem}"
                    class="card-img-top"
                    alt="${produto.nome}"
                    style="height: 220px; object-fit: cover;"
                >

                <div class="card-body d-flex flex-column">

                    <h3 class="card-title fs-5">
                        ${produto.nome}
                    </h3>

                    <p class="card-text text-secondary">
                        ${produto.descricao}
                    </p>

                    <strong class="fs-5 mt-auto mb-3">
                        R$ ${produto.preco.toFixed(2).replace(".", ",")}
                    </strong>

                    <button
                        class="btn btn-dark w-100"
                        onclick="adicionarAoCarrinho(${produto.id})"
                    >
                        Adicionar
                    </button>

                </div>

            </div>

        </div>

    `;

    });

}

filtrarCategoria("promocao");

function adicionarAoCarrinho(id) {

    const produto = produtos.find(function(produto) {
        return produto.id === id;
    });

    if (!produto) {
        console.error("Produto não encontrado:", id);
        return;
    }

    const itemExistente = carrinho.find(function(item) {
        return item.id === id;
    });

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade: 1
        });
    }

    atualizarCarrinho();

    console.log("Carrinho:", carrinho);

}

function atualizarCarrinho() {

    const container = document.getElementById("itens-carrinho");

    const contador = document.getElementById("contador-carrinho");


    container.innerHTML = "";


    let subtotal = 0;

    let quantidadeTotal = 0;


    carrinho.forEach(function(item) {

        subtotal += item.preco * item.quantidade;

        quantidadeTotal += item.quantidade;


        container.innerHTML += `

            <div class="border-bottom pb-3 mb-3">

                <div class="d-flex gap-3">

                    <img
                        src="${item.imagem}"
                        width="70"
                        height="70"
                        class="rounded"
                        style="object-fit: cover;"
                    >


                    <div class="flex-grow-1">

                        <strong>
                            ${item.nome}
                        </strong>


                        <div>
                            R$ ${item.preco
                                .toFixed(2)
                                .replace(".", ",")}
                        </div>


                        <div class="d-flex align-items-center gap-2 mt-2">

                            <button
                                class="btn btn-sm btn-outline-dark"
                                onclick="alterarQuantidade(${item.id}, -1)"
                            >
                                −
                            </button>


                            <span>
                                ${item.quantidade}
                            </span>


                            <button
                                class="btn btn-sm btn-outline-dark"
                                onclick="alterarQuantidade(${item.id}, 1)"
                            >
                                +
                            </button>


                            <button
                                class="btn btn-sm btn-outline-danger ms-auto"
                                onclick="removerDoCarrinho(${item.id})"
                            >
                                🗑️
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        `;

    });


    const total = subtotal + taxaEntrega;


    document.getElementById("subtotal").textContent =
        formatarMoeda(subtotal);


    document.getElementById("total").textContent =
        formatarMoeda(total);


    contador.textContent = quantidadeTotal;

}

function alterarQuantidade(id, quantidade) {

    const item = carrinho.find(function(item) {
        return item.id === id;
    });


    if (!item) {
        return;
    }


    item.quantidade += quantidade;


    if (item.quantidade <= 0) {

        carrinho = carrinho.filter(function(item) {
            return item.id !== id;
        });

    }


    atualizarCarrinho();

}

function removerDoCarrinho(id) {

    carrinho = carrinho.filter(function(item) {
        return item.id !== id;
    });


    atualizarCarrinho();

}

function formatarMoeda(valor) {

    return valor.toLocaleString("pt-BR", {

        style: "currency",

        currency: "BRL"

    });

}

function abrirCheckout() {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio.");

        return;

    }


    gerarResumoCheckout();


    const modal = new bootstrap.Modal(
        document.getElementById("modalCheckout")
    );


    modal.show();

}

function gerarResumoCheckout() {

    const resumo =
        document.getElementById("resumo-checkout");


    resumo.innerHTML = "";


    let subtotal = 0;


    carrinho.forEach(function(item) {

        const totalItem =
            item.preco * item.quantidade;


        subtotal += totalItem;


        resumo.innerHTML += `

            <div class="d-flex justify-content-between">

                <span>
                    ${item.quantidade}x ${item.nome}
                </span>

                <strong>
                    ${formatarMoeda(totalItem)}
                </strong>

            </div>

        `;

    });


    const total = subtotal + taxaEntrega;


    resumo.innerHTML += `

        <div class="d-flex justify-content-between mt-2">

            <span>
                Entrega
            </span>

            <span>
                ${formatarMoeda(taxaEntrega)}
            </span>

        </div>

    `;


    document.getElementById("total-checkout")
        .textContent = formatarMoeda(total);

}

function usarLocalizacao() {

    if (!navigator.geolocation) {

        alert(
            "Seu navegador não suporta localização."
        );

        return;

    }


    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            const latitude =
                posicao.coords.latitude;


            const longitude =
                posicao.coords.longitude;


            const mapsUrl =
                `https://www.google.com/maps?q=${latitude},${longitude}`;


            window.open(mapsUrl, "_blank");

            // TODO: converter latitude/longitude em endereço legível
            // (reverse geocoding via Nominatim/OpenStreetMap ou Google Geocoding API)
            document.getElementById("endereco").value =
                `Localização: ${latitude}, ${longitude}`;

        },


        function() {

            alert(
                "Não foi possível obter sua localização."
            );

        }

    );

}

function finalizarPedido() {

    const nome =
        document.getElementById("nome-cliente").value.trim();


    const telefone =
        document.getElementById("telefone-cliente").value.trim();


    const endereco =
        document.getElementById("endereco").value.trim();


    const numero =
        document.getElementById("numero").value.trim();


    const complemento =
        document.getElementById("complemento").value.trim();


    const pagamentoSelecionado =
        document.querySelector(
            'input[name="pagamento"]:checked'
        );


    if (!nome) {

        alert("Informe seu nome.");

        return;

    }


    if (!telefone) {

        alert("Informe seu telefone.");

        return;

    }


    if (!endereco) {

        alert("Informe seu endereço.");

        return;

    }


    if (!numero) {

        alert("Informe o número.");

        return;

    }


    if (!pagamentoSelecionado) {

        alert("Escolha uma forma de pagamento.");

        return;

    }


    const botaoConfirmar = document.querySelector(
        '#modalCheckout .btn-success'
    );

    botaoConfirmar.disabled = true;


    const pagamento =
        pagamentoSelecionado.value;


    let subtotal = 0;


    carrinho.forEach(function(item) {

        subtotal += item.preco * item.quantidade;

    });


    const total =
        subtotal + taxaEntrega;


    const pedido = {

        cliente: {

            nome: nome,

            telefone: telefone

        },

        endereco: {

            endereco: endereco,

            numero: numero,

            complemento: complemento

        },

        pagamento: pagamento,

        itens: carrinho,

        subtotal: subtotal,

        taxaEntrega: taxaEntrega,

        total: total

    };


    console.log("PEDIDO:", pedido);


    alert(
        "Pedido criado com sucesso!"
    );

    carrinho = [];
    atualizarCarrinho();
    bootstrap.Modal.getInstance(document.getElementById("modalCheckout")).hide();

    document.getElementById("nome-cliente").value = "";
    document.getElementById("telefone-cliente").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("complemento").value = "";

    const pagamentoAnterior = document.querySelector(
        'input[name="pagamento"]:checked'
    );
    if (pagamentoAnterior) {
        pagamentoAnterior.checked = false;
    }

    botaoConfirmar.disabled = false;

};