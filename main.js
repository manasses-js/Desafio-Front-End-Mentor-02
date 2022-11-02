let bill = document.getElementById('bill');
let nop = document.getElementById('nop');
let totalGorjetaPorPessoa = document.querySelector('.um');
let valorTotalPorPessoa = document.querySelector('.dois');
let reset = document.getElementById('btn');
let custom = document.querySelector('.custom');

let botao = document.getElementById('cinco');
let botao2 = document.getElementById('dez');
let botao3 = document.getElementById('quinze');
let botao4 = document.getElementById('vinteecinco');
let botao5 = document.getElementById('cinquenta');

function calcularValorTotalPorPessoa(p1, p2, p3) {
    return ((p1 + (p2 * p1)) / p3);
}

function calcularGorjetaTotalPorPessoa(p1, p2, p3) {
    return (p2 * p1) / p3;
}

botao.addEventListener("click", start = () => {
    if (bill.value != "" && nop.value != "") {
        let nbill = parseFloat(bill.value);
        let nbtn = parseFloat(botao.value);
        let nnop = parseFloat(nop.value);
        valorTotalPorPessoa.textContent = `$${calcularValorTotalPorPessoa(nbill, nbtn, nnop).toFixed(2)}`;
        totalGorjetaPorPessoa.textContent = `$${calcularGorjetaTotalPorPessoa(nbill, nbtn, nnop).toFixed(2)}`;
    }
});

botao2.addEventListener("click", start = () => {
    if (bill.value != "" && nop.value != "") {
        let nbill = parseFloat(bill.value);
        let nbtn = parseFloat(botao2.value);
        let nnop = parseFloat(nop.value);
        valorTotalPorPessoa.textContent = `$${calcularValorTotalPorPessoa(nbill, nbtn, nnop).toFixed(2)}`;
        totalGorjetaPorPessoa.textContent = `$${calcularGorjetaTotalPorPessoa(nbill, nbtn, nnop).toFixed(2)}`;
    }
});

botao3.addEventListener("click", start = () => {
    if (bill.value != "" && nop.value != "") {
        let nbill = parseFloat(bill.value);
        let nbtn = parseFloat(botao3.value);
        let nnop = parseFloat(nop.value);
        valorTotalPorPessoa.textContent = `$${calcularValorTotalPorPessoa(nbill, nbtn, nnop).toFixed(2)}`;
        totalGorjetaPorPessoa.textContent = `$${calcularGorjetaTotalPorPessoa(nbill, nbtn, nnop).toFixed(2)}`;
    }
});

botao4.addEventListener("click", start = () => {
    if (bill.value != "" && nop.value != "") {
        let nbill = parseFloat(bill.value);
        let nbtn = parseFloat(botao4.value);
        let nnop = parseFloat(nop.value);
        valorTotalPorPessoa.textContent = `$${calcularValorTotalPorPessoa(nbill, nbtn, nnop).toFixed(2)}`;
        totalGorjetaPorPessoa.textContent = `$${calcularGorjetaTotalPorPessoa(nbill, nbtn, nnop).toFixed(2)}`;
    }
});

botao5.addEventListener("click", start = () => {
    if (bill.value != "" && nop.value != "") {
        let nbill = parseFloat(bill.value);
        let nbtn = parseFloat(botao5.value);
        let nnop = parseFloat(nop.value);
        valorTotalPorPessoa.textContent = `$${calcularValorTotalPorPessoa(nbill, nbtn, nnop).toFixed(2)}`;
        totalGorjetaPorPessoa.textContent = `$${calcularGorjetaTotalPorPessoa(nbill, nbtn, nnop).toFixed(2)}`;
    }
});

window.addEventListener("mouseout", start = () => {
    if (bill.value != "" && nop.value != "" && custom.value != "") {
        var cbill = parseFloat(bill.value);
        var cbtn = parseFloat(custom.value);
        var cbntTratado = cbtn / 100;
        var cnop = parseFloat(nop.value);

        valorTotalPorPessoa.textContent = `$${calcularValorTotalPorPessoa(cbill, cbntTratado, cnop).toFixed(2)}`;
        totalGorjetaPorPessoa.textContent = `$${calcularGorjetaTotalPorPessoa(cbill, cbntTratado, cnop).toFixed(2)}`;
    }
});

reset.addEventListener("click", limpar = () => {
    resetText = "$0,00"
    bill.value = "";
    nop.value = "";
    custom.value = "";
    totalGorjetaPorPessoa.textContent = `${resetText}`;
    valorTotalPorPessoa.textContent = `${resetText}`;
});