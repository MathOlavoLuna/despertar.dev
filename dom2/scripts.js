let card = document.querySelectorAll('.card');
let tituloCard = document.querySelectorAll('.titulo-card')
let descricao = document.querySelectorAll('.descricao-card')
let btnEditar = document.querySelectorAll('.botao-editar')
let btnDel = document.querySelectorAll('.botao-apagar')

card.forEach(card => {
    card.style.backgroundColor = '#E16E0E'
})

tituloCard.forEach(card => {
    card.innerText = 'Meu Card'
    card.style.color = '#2B385B'
})

descricao.forEach(card => {
    card.innerText = 'Descrição modificada pelo JavaScript.'
    card.style.margin = '30px'
    
    card.style.color = 'white'
})

btnEditar.forEach(card => {
    card.style.color = 'white'
    card.style.border = '0px'
    card.style.borderRadius = '10px'
    card.style.padding = '12px'
    card.style.backgroundColor = 'green'
    card.setAttribute('onclick', 'editarCard()')
    card.style.cursor = 'pointer'
})

btnDel.forEach(card => {
    card.style.color = 'white'
    card.style.border = '0px'
    card.style.borderRadius = '10px'
    card.style.padding = '12px'
    card.style.backgroundColor = 'red'
    card.setAttribute('onclick', 'apagarCard()')
    card.style.cursor = 'pointer'
})

function editarCard(){
    alert('CLICO EM EDITAR!')
}
function apagarCard(){
    let perguntar = confirm('VOCE TEM CERTEZA QUE QUER EXLUIR O CARD?')

    if(perguntar){
        alert('Confirmado!')
    } else {
        alert('Cancelou!')
    }
}