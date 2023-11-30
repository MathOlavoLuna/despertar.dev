

api.get(`bodies`).then((result) => {
    //1
    let corposCelestes = result.data.bodies
    console.log(corposCelestes)

    //2
    const éPlaneta = corposCelestes.filter(planeta => planeta.isPlanet)
    console.log(éPlaneta)

    //3
    const terra = corposCelestes.find(planeta => planeta.englishName === 'Earth')
    console.log(terra);

    //4
    const planetaSemLua = éPlaneta.some(planeta => planeta.moons === null)
    console.log(planetaSemLua);

    éPlaneta.sort((a, b) => a.meanRadius - b.meanRadius)

    //5
    const nomeDosPlanetas = éPlaneta.map(planeta => planeta.englishName)
    console.log(nomeDosPlanetas);

    //6
    const nRaio = éPlaneta.map(raio => raio.meanRadius)

    nomeDosPlanetas.forEach((planeta, i) => {
        console.log(`${planeta}: ${nRaio[i]}`);
    })

    //7
    const infConcatenadas = éPlaneta.map(planeta => planeta.englishName)
    console.log(infConcatenadas.join(', '))

    //8
    const menores = éPlaneta.filter(planeta => planeta.meanRadius < 25000)
    const somaMassa = menores.reduce((acc, planeta) => acc + planeta.mass.massValue, 0)
    
    console.log(`SOMA DAS MASSAS DOS PLANETAS: ${somaMassa.toFixed(2)}`);


    // 9. Luas e Desidade: verifique se algum planeta tem mais de 2 luas e, em caso afirmativo, listar todos os planetas entre eles que tem densidade maior que 1
    const planetaLuas = éPlaneta.filter(planeta => planeta.moons && planeta.density > 1 && planeta.moons.length > 2)
    console.log('------------------------------------');
    console.log(`Planetas com Densidade > um && + de duas Luas na sua orbita`)
    planetaLuas.forEach(lua => console.log(`Nome: ${lua.englishName} Com ${lua.moons.length} Luas`))
    console.log('------------------------------------');

    //10

    const corposComDataDescoberta = corposCelestes.filter(corpo => corpo.discoveryDate != '')
    corposComDataDescoberta.sort((a, b) => {
        const dateA = new Date(a.discoveryDate.split("/").reverse().join('-'))
        const dateB = new Date(b.discoveryDate.split("/").reverse().join('-'))
        return dateB - dateA
    })
    corposComDataDescoberta.forEach(corpo => {
        console.log(`Nome: ${corpo.englishName}, Descoberto em: ${corpo.discoveryDate}`)
    })

    //11

    function findAstro(nome) {
        const planetaBaseado = corposCelestes.filter(planet => planet.englishName === nome)
        planetaBaseado.forEach(details => {
            console.log(`Nome: ${nome} | Distância: ${details.perihelion} | Massa: ${details.mass.massValue} | Gravidade ${details.gravity} | Densidade ${details.density}}`);
        })
    }
    findAstro('Phobos')
    //12
    const planetasComTemperatura = corposCelestes.filter(planeta => planeta.avgTemp > 120 && planeta.avgTemp < 500)
    planetasComTemperatura.sort((a, b) => a.avgTemp - b.avgTemp)
    console.log(`------------------------------------------
    -------------Mais frio para mais quente----------------`);
    console.log(planetasComTemperatura);

    //13

    function separaAstros(bagulho) {
        const corposSeparados = bagulho.reduce((acc, currentValue) => {
            ;
            if (!acc[currentValue.bodyType]) {
                acc[currentValue.bodyType] = []
            }
            acc[currentValue.bodyType].push(currentValue)

            return acc
        }, {})
        return corposSeparados
    }

    //14 Use sort e slice para ordenar os planetas primeiro por tipo e depois por tamanho, pegando os 3 maiores de cada tipo. 
    const ordenadosPorTamanho = corposCelestes.sort((a, b) => b.meanRadius - a.meanRadius)
    const ordenadosPorTipo = ordenadosPorTamanho.sort((a, b) => { //ordenando por tipo
        if (a.bodyType < b.bodyType) {
            return -1
        } else {
            return true
        }
    })

    const corposSeparados = ordenadosPorTipo.reduce((acc, currentValue) => {
        if (!acc[currentValue.bodyType]) {
            acc[currentValue.bodyType] = []
        }

        if (acc[currentValue.bodyType].length < 3) {
            acc[currentValue.bodyType].push(currentValue)
        }
        return acc
    }, {})

    console.log(corposSeparados);

    //15 Encontrando planetas orbitados. Encontre todos os planetas que são orbitados por pelo menos um corpo celeste. Imprima na tela o nome do planeta e seus orbitadores.

    const planetaOrbitado = corposCelestes.filter(planeta => planeta.aroundPlanet === null && planeta.moons)
    console.log(planetaOrbitado);

    //16 Média da Massa dos Planetas: Use o método reduce para calcular a média da massa de todos os planetas e imprimir o resultado. 
    const media = somaMassa / éPlaneta.length
    console.log((media).toFixed(2))

    //17 Calcule a distância entre Saturno e Plutão. Utilize o perihelion e o aphelion para calcular a menor distância possível entre os planetas
    //perihelion mais perto
    //aphelion mais longe

    const saturnPluton = corposCelestes.filter(planeta => planeta.id === 'saturne' || planeta.id === 'pluton')

    //saturn: "perihelion": 1349823615, "aphelion": 1503509229
    // pluto: "perihelion": 4436756954, "aphelion": 7376124302,
    saturnPluton.reduce((acc, planeta) =>{
        const menosLonge = (acc.aphelion - acc.perihelion)

        console.log(`Menor distancia entre Saturno e Plutão: `, menosLonge);
    })

    //18
    planetasLUARES = éPlaneta.filter(planeta => planeta.moons)

    planetasLUARES.forEach(planeta =>{
        console.log(`Nome: ${planeta.englishName} com ${planeta.moons.length}`);
    })

    //19 O Desafio Final em Manipulação de Dados e Cálculos 

    const novoPlanetas = [...éPlaneta]

    const massaDoPlanetas = novoPlanetas.map(planeta => {
        return planeta.mass
    })
    massaDoPlanetas.sort((a, b) => a.massValue - b.massValue)

    console.log(massaDoPlanetas);
    let m1;
    let m2
    massaDoPlanetas.forEach((planeta,i) => {
        if(planeta.massValue === 4.86747) m1 = planeta.massValue
        if(planeta.massValue === 5.68336) m2 = planeta.massValue
    })
    const mediana = (m1 + m2) / 2
   








}).catch((err) => {
    console.log(err);
})






