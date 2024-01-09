const currentPage = document.querySelector('.current')
const rowConteiner = document.querySelector('.row')

async function pickCharacter(pageNumber) {
    const searchBar = document.querySelector('.searchBar')

    try {
        const response = await api.get(`character/?page=${pageNumber}`)
        const result = response.data.results

        result.forEach(async personagem => {
            const nomeEp = await lastEpName(personagem.episode.pop())

            let statusClass = personagem.status.toLowerCase()

            switch (statusClass) {
                case 'alive':
                    statusClass = 'status-alive'
                    break

                case 'dead':
                    statusClass = 'status-dead'
                    break

                default:
                    statusClass = 'status'
                    break;
            }

            searchBar.addEventListener('input', async () => {
                rowConteiner.innerHTML = ''
                const filteredCharacters = await result.filter(personagem => personagem.name.toLowerCase().includes(searchBar.value.toLowerCase()))

                filteredCharacters.forEach(async perso => {

                    let statusClass = perso.status.toLowerCase()

                    switch (statusClass) {
                        case 'alive':
                            statusClass = 'status-alive'
                            break

                        case 'dead':
                            statusClass = 'status-dead'
                            break

                        default:
                            statusClass = 'status'
                            break;
                    }

                    rowConteiner.innerHTML += `
                    <div class="card">
                        <img class='imgMsm' src='${perso.image}'>
                        <div class='pad'>
                            <h3 class="title-card">${perso.name}</h3>
        
                            <li class="${statusClass}" > ${perso.status} - ${perso.species}</li>
                            
                            <p class="pad">Última localização conhecida:</p>
                            <p class="last-local"><b>${perso.location.name}</b></p>
        
                            <p class="pad">Visto a última vez em:</p>
                            <p class="chapter"> ${nomeEp}  </p>
                        </div>
                    </div>
                `
                })
            })

            rowConteiner.innerHTML += `
                <div class="card">
                    <img class='imgMsm' src='${personagem.image}'>
                    <div class='pad'>
                        <h3 class="title-card">${personagem.name}</h3>

                        <li class="${statusClass}" > ${personagem.status} - ${personagem.species}</li>
                        
                        <p class="pad">Última localização conhecida:</p>
                        <p class="last-local"><b>${personagem.location.name}</b></p>

                        <p class="pad">Visto a última vez em:</p>
                        <p class="chapter"> ${nomeEp}  </p>
                    </div>
                </div>
            `
        })


    } catch (error) {
        console.log(error);
    }
}

async function statusGeneral() {
    const pChar = document.querySelector('.char')
    const pLoc = document.querySelector('.loc')
    const pEp = document.querySelector('.ep')

    try {
        const character = await api.get('character')
        const char = character.data.info

        const location = await api.get('location')
        const loc = location.data.info

        const episode = await api.get('episode')
        const ep = episode.data.info

        pChar.innerText = `Personagens: ${char.count}`
        pLoc.innerText = `Localizações: ${loc.count}`
        pEp.innerText = `Episodios: ${ep.count}`

    } catch (error) {
        console.log(error);
    }

}

async function lastEpName(url) {
    try {
        const response = await api.get(`${url}`)
        const result = response.data.name

        return result
    } catch (error) {
        console.log(error);
    }
}

async function page() {
    const response = await api.get('character')
    const result = response.data.info

    let cPage = 1
    const nextPage = document.querySelector('.next')
    const prevPage = document.querySelector('.prev')

    nextPage.addEventListener('click', () => {
        if (result.next != null) {
            cPage++
            currentPage.innerText = cPage
            rowConteiner.innerHTML = ''
            pickCharacter(cPage)
        }
    })

    prevPage.addEventListener('click', () => {
        if (cPage > 1) {
            cPage--
            currentPage.innerText = cPage
            rowConteiner.innerHTML = ''
            pickCharacter(cPage)
        }

    })

}

page()
statusGeneral()
pickCharacter()