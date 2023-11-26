

axios.get(`https://api.le-systeme-solaire.net/rest/bodies`).then((result) => { 
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
    const menores = éPlaneta.filter(planeta =>{
        if(planeta.meanRadius < 25000) return planeta    
    })
    console.log(menores);

    let somaMassa = 0;
    menores.forEach(planeta => somaMassa += planeta.mass.massValue)
    console.log(`SOMA DAS MASSAS DOS PLANETAS: ${somaMassa}`);


    // //9
    // 9. Luas e Desidade: verifique se algum planeta tem mais de 2 luas e, em caso afirmativo, listar todos os planetas entre eles que tem densidade maior que 1

}).catch((err) => {
    console.log(err);
})


