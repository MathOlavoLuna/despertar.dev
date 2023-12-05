/* Desenvolva aqui a rotina */
// btn_calcular.addEventListener('click', () => {
//     const valorB = parseInt(valor_base.value)
//     const valorT = parseInt(valor_transporte.value)
//     const valorA = parseInt(valor_alimentacao.value)
    // const automovel = parseInt(valor_automovel.value)
    // const faltinhas = parseInt(faltas.value)

    // const receitaTotal = valorB + valorT + valorA
    
    // const descontoTotal = automovel + faltinhas

    // valor_receita.value = receitaTotal
    // valor_descontos.value = descontoTotal

    // valor_total.value = receitaTotal + descontoTotal
// })

const input = document.querySelectorAll('input')

input.forEach(input => {
    input.addEventListener('change', () => {
        const valorB = parseInt(valor_base.value)
        const valorT = parseInt(valor_transporte.value)
        const valorA = parseInt(valor_alimentacao.value)
        const automovel = parseInt(valor_automovel.value)
        const faltinhas = parseInt(faltas.value)

        const receitaTotal = valorB + valorT + valorA
        
        const descontoTotal = automovel + faltinhas

        valor_receita.value = receitaTotal
        valor_descontos.value = descontoTotal

        valor_total.value = receitaTotal - descontoTotal
    })
})      