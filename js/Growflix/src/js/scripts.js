const growcastContainer = document.querySelector('.growcast-container')
const webinarContainer = document.querySelector('.webinar-container')
const uxuiContainer = document.querySelector('.uxui-container')
const diversosContainer = document.querySelector('.diversos-container')

let contEP = 0;

const videos = [...movies]
const videosCategoricos = {}

movies.forEach(video =>{
    if(!videosCategoricos[video.category]) videosCategoricos[video.category] = []
    videosCategoricos[video.category].push(video)
})

for (let categoria in videosCategoricos){

    switch (categoria) {
        case 'growcast':
            for(video of videosCategoricos[categoria]){
                castCard(video)
            }
            break;

        case 'webinar':
            for(video of videosCategoricos[categoria]){
                webCard(video)
            }
            break;

        case 'ux-ui':
            for(video of videosCategoricos[categoria]){
                uxuiCard(video)
            }
            break;

        case 'geral':
            for(video of videosCategoricos[categoria]){
                diversosCard(video)
            }
            break;
    }    

}


function castCard(vid){
    growcastContainer.innerHTML += `
            <div class="col-3 growcast-card">
                        <img class='card-img' src="${vid.img}">
                    <div class="growcast-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="45" fill="currentColor" class="bi bi-play-circle-fill pointer" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" data-bs-toggle="modal" data-bs-target="#ep0${contEP}"/>
                        </svg>
                        <p class='text-white'>${vid.title}</p>
                    </div>
            </div>

            <div class="modal fade  " id="ep0${contEP}" tabindex="-1" aria-labelledby="movie-modal-label" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content modal-content-movie bg-black">
                <div class="modal-body modal-body-movie vh-100  ">
                    <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-lg"
                            viewBox="0 0 16 16">
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z">
                            </path>
                        </svg>
                    </button>
                    <div>
                        <iframe width="100%" height="900px"
                            src="${vid.link}"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen scrolling="no">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `
            contEP++
}

function webCard(vid){
    webinarContainer.innerHTML += `
            <div class="col-3 webinar-card">
                    <img class='card-img' src="${vid.img}">
                    <div class="growcast-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="45" fill="currentColor" class="bi bi-play-circle-fill pointer" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" data-bs-toggle="modal" data-bs-target="#ep0${contEP}"/>
                        </svg>
                        <p class='text-white'>${vid.title}</p>
                    </div>
            </div>

            <div class="modal fade  " id="ep0${contEP}" tabindex="-1" aria-labelledby="movie-modal-label" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content modal-content-movie bg-black">
                <div class="modal-body modal-body-movie vh-100  ">
                    <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-lg"
                            viewBox="0 0 16 16">
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z">
                            </path>
                        </svg>
                    </button>
                    <div>
                        <iframe width="100%" height="900px"
                            src="${vid.link}"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen scrolling="no">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `
            contEP++
}

function uxuiCard(vid){
    uxuiContainer.innerHTML += `
            <div class="col-3 uxui-card">
                    <img class='card-img' src="${vid.img}">    
                    <div class="growcast-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="45" fill="currentColor" class="bi bi-play-circle-fill pointer" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" data-bs-toggle="modal" data-bs-target="#ep0${contEP}"/>
                        </svg>
                        <p class='text-white'>${vid.title}</p>
                    </div>
            </div>

            <div class="modal fade  " id="ep0${contEP}" tabindex="-1" aria-labelledby="movie-modal-label" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content modal-content-movie bg-black">
                <div class="modal-body modal-body-movie vh-100  ">
                    <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-lg"
                            viewBox="0 0 16 16">
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z">
                            </path>
                        </svg>
                    </button>
                    <div>
                        <iframe width="100%" height="900px"
                            src="${vid.link}"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen scrolling="no">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `
            contEP++
}

function diversosCard(vid){
    diversosContainer.innerHTML += `
            <div class="col-3 diversos-card">
                    <img class='card-img' src="${vid.img}">
                    <div class="growcast-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="45" fill="currentColor" class="bi bi-play-circle-fill pointer" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" data-bs-toggle="modal" data-bs-target="#ep0${contEP}"/>
                        </svg>
                        <p class='text-white'>${vid.title}</p>
                    </div>
            </div>

            <div class="modal fade  " id="ep0${contEP}" tabindex="-1" aria-labelledby="movie-modal-label" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content modal-content-movie bg-black">
                <div class="modal-body modal-body-movie vh-100  ">
                    <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-lg"
                            viewBox="0 0 16 16">
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z">
                            </path>
                        </svg>
                    </button>
                    <div>
                        <iframe width="100%" height="900px"
                            src="${vid.link}"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen scrolling="no">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `
            contEP++
}


