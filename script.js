const vagas = document.getElementById('container')
const selectCargo = document.getElementById('selectCargo')
const selectLevel = document.getElementById('selectLevel')
const botao = document.getElementById('botao')
const aguardando = document.getElementById('aguardando')
const nenhumaVaga = document.getElementById('nenhumaVaga')

fetch('data.json').then((response) =>{
    response.json().then((dados) =>{
        dados.map((dados) => {

            function vagaNova(){
                if(dados.new === true)return '<li class="nova">Nova !</li>'
                else return ""
            }

            function destaque(){
                if(dados.featured === true)return '<li class="destaque">Destaque</li>'
                else return ""
            }

            function linguagens(){
                const ling = dados.languages.map(x =>x)
                if(ling.length == 3){
                    return `<p>${ling[0]}</p> <p>${ling[1]}</p> <p>${ling[2]}</p>`
                }else if (ling.length === 2){
                    return `<p>${ling[0]}</p> <p>${ling[1]}</p>`
                }else{
                    return `<p>${ling[0]}</p>`
                }
            }

            function ferramentas(){
                const fer = dados.tools.map(x =>x)
                if(fer.length === 2){
                    return `<p>${fer[0]}</p> <p>${fer[1]}</p>`
                }else if (fer.length === 1){
                    return `<p>${fer[0]}</p>`
                }else return ``
            }

            selectCargo.addEventListener('click', () => {
                nenhumaVaga.style.display = "none"
                aguardando.style.display = "flex"
                vagas.innerHTML = ''
            })

            selectLevel.addEventListener('click', () => {
                nenhumaVaga.style.display = "none"
                aguardando.style.display = "flex"
                vagas.innerHTML = ''
            })

            botao.addEventListener('click', () => {
                aguardando.style.display = "none"
                if(selectCargo.value == 'todos' && selectLevel.value == 'todos' != ''){
                    let todos = dados
                    vagas.innerHTML += 
                    `
                            <div class="vaga" id="nmr${todos.id}">
                                <img src="${todos.logo}"></img>
                                    <div class="ajuste">
                                        <div class="detalhes">
                                            <ul class="dados-cima">
                                                <li class="empresa">${todos.company}</li>
                                                ${vagaNova()}
                                                ${destaque()}
                                            </ul>
                                            <p class="posicao"> ${todos.position}</p>
                                            <ul class="dados-baixo">
                                                <li>${todos.postedAt}</li>
                                                <li>${todos.contract}</li>
                                                <li>${todos.location}</li>
                                            </ul>
                                        </div>
                                        <div class="techs">
                                            <div class="infos-direita">
                                                <p>${todos.role}</p>
                                                <p>${todos.level}</p>
                                                ${linguagens()}
                                                ${ferramentas()}
                                            </div>
                                        </div>
                                </div>
                        `
                }else if(selectCargo.value == 'todos' && selectLevel.value == 'junior'){
                    if(dados.level == 'Junior'){
                    let junior = dados
                    vagas.innerHTML += 
                    `
                            <div class="vaga" id="nmr${junior.id}">
                                <img src="${junior.logo}"></img>
                                    <div class="ajuste">
                                        <div class="detalhes">
                                            <ul class="dados-cima">
                                                <li class="empresa">${junior.company}</li>
                                                ${vagaNova()}
                                                ${destaque()}
                                            </ul>
                                            <p class="posicao"> ${junior.position}</p>
                                            <ul class="dados-baixo">
                                                <li>${junior.postedAt}</li>
                                                <li>${junior.contract}</li>
                                                <li>${junior.location}</li>
                                            </ul>
                                        </div>
                                        <div class="techs">
                                            <div class="infos-direita">
                                                <p>${junior.role}</p>
                                                <p>${junior.level}</p>
                                                ${linguagens()}
                                                ${ferramentas()}
                                            </div>
                                        </div>
                                </div>
                        `
                    }
                } else if(selectCargo.value == 'todos' && selectLevel.value == 'pleno'){
                    if(dados.level == 'Midweight'){
                    let pleno = dados
                    vagas.innerHTML += 
                    `
                            <div class="vaga" id="nmr${pleno.id}">
                                <img src="${pleno.logo}"></img>
                                    <div class="ajuste">
                                        <div class="detalhes">
                                            <ul class="dados-cima">
                                                <li class="empresa">${pleno.company}</li>
                                                ${vagaNova()}
                                                ${destaque()}
                                            </ul>
                                            <p class="posicao"> ${pleno.position}</p>
                                            <ul class="dados-baixo">
                                                <li>${pleno.postedAt}</li>
                                                <li>${pleno.contract}</li>
                                                <li>${pleno.location}</li>
                                            </ul>
                                        </div>
                                        <div class="techs">
                                            <div class="infos-direita">
                                                <p>${pleno.role}</p>
                                                <p>${pleno.level}</p>
                                                ${linguagens()}
                                                ${ferramentas()}
                                            </div>
                                        </div>
                                </div>
                        `
                    }
                } else if(selectCargo.value == 'todos' && selectLevel.value == 'senior'){
                    if(dados.level == 'Senior'){
                    let senior = dados
                    vagas.innerHTML += 
                    `
                            <div class="vaga" id="nmr${senior.id}">
                                <img src="${senior.logo}"></img>
                                    <div class="ajuste">
                                        <div class="detalhes">
                                            <ul class="dados-cima">
                                                <li class="empresa">${senior.company}</li>
                                                ${vagaNova()}
                                                ${destaque()}
                                            </ul>
                                            <p class="posicao"> ${senior.position}</p>
                                            <ul class="dados-baixo">
                                                <li>${senior.postedAt}</li>
                                                <li>${senior.contract}</li>
                                                <li>${senior.location}</li>
                                            </ul>
                                        </div>
                                        <div class="techs">
                                            <div class="infos-direita">
                                                <p>${senior.role}</p>
                                                <p>${senior.level}</p>
                                                ${linguagens()}
                                                ${ferramentas()}
                                            </div>
                                        </div>
                                </div>
                        `
                    }
                }else if(selectCargo.value == 'full' && selectLevel.value == 'todos'){
                    if(dados.role == 'Fullstack'){
                    let full = dados
                    vagas.innerHTML += 
                    `
                            <div class="vaga" id="nmr${full.id}">
                                <img src="${full.logo}"></img>
                                    <div class="ajuste">
                                        <div class="detalhes">
                                            <ul class="dados-cima">
                                                <li class="empresa">${full.company}</li>
                                                ${vagaNova()}
                                                ${destaque()}
                                            </ul>
                                            <p class="posicao"> ${full.position}</p>
                                            <ul class="dados-baixo">
                                                <li>${full.postedAt}</li>
                                                <li>${full.contract}</li>
                                                <li>${full.location}</li>
                                            </ul>
                                        </div>
                                        <div class="techs">
                                            <div class="infos-direita">
                                                <p>${full.role}</p>
                                                <p>${full.level}</p>
                                                ${linguagens()}
                                                ${ferramentas()}
                                            </div>
                                        </div>
                                </div>
                        `
                    }
                }else if(selectCargo.value == 'full' && selectLevel.value == 'junior'){
                    if(dados.role == 'Fullstack' && dados.level == 'Junior' != ''){
                        let fulljr = dados
                        vagas.innerHTML += 
                            `
                                <div class="vaga" id="nmr${fulljr.id}">
                                    <img src="${fulljr.logo}"></img>
                                        <div class="ajuste">
                                            <div class="detalhes">
                                                <ul class="dados-cima">
                                                    <li class="empresa">${fulljr.company}</li>
                                                    ${vagaNova()}
                                                    ${destaque()}
                                                </ul>
                                                <p class="posicao"> ${fulljr.position}</p>
                                                <ul class="dados-baixo">
                                                    <li>${fulljr.postedAt}</li>
                                                    <li>${fulljr.contract}</li>
                                                    <li>${fulljr.location}</li>
                                                </ul>
                                            </div>
                                            <div class="techs">
                                                <div class="infos-direita">
                                                    <p>${fulljr.role}</p>
                                                    <p>${fulljr.level}</p>
                                                    ${linguagens()}
                                                    ${ferramentas()}
                                                </div>
                                            </div>
                                    </div>
                            `
                    }else{
                        nenhumaVaga.style.display = 'flex'
                    }
                }else if(selectCargo.value == 'full' && selectLevel.value == 'pleno'){
                    if(dados.role == 'Fullstack' && dados.level == 'Midweight' != ''){
                        let fullpl = dados
                        vagas.innerHTML += 
                            `
                                <div class="vaga" id="nmr${fullpl.id}">
                                    <img src="${fullpl.logo}"></img>
                                        <div class="ajuste">
                                            <div class="detalhes">
                                                <ul class="dados-cima">
                                                    <li class="empresa">${fullpl.company}</li>
                                                    ${vagaNova()}
                                                    ${destaque()}
                                                </ul>
                                                <p class="posicao"> ${fullpl.position}</p>
                                                <ul class="dados-baixo">
                                                    <li>${fullpl.postedAt}</li>
                                                    <li>${fullpl.contract}</li>
                                                    <li>${fullpl.location}</li>
                                                </ul>
                                            </div>
                                            <div class="techs">
                                                <div class="infos-direita">
                                                    <p>${fullpl.role}</p>
                                                    <p>${fullpl.level}</p>
                                                    ${linguagens()}
                                                    ${ferramentas()}
                                                </div>
                                            </div>
                                    </div>
                            `
                    }else if(dados.role == 'Fullstack' && dados.level == 'Midweight' == ''){
                        nenhumaVaga.style.display = 'flex'
                    }
                }else if(selectCargo.value == 'full' && selectLevel.value == 'senior'){
                    if(dados.role == 'Fullstack' && dados.level == 'Senior' != ''){
                        let fullsr = dados
                        vagas.innerHTML += 
                            `
                                <div class="vaga" id="nmr${fullsr.id}">
                                    <img src="${fullsr.logo}"></img>
                                        <div class="ajuste">
                                            <div class="detalhes">
                                                <ul class="dados-cima">
                                                    <li class="empresa">${fullsr.company}</li>
                                                    ${vagaNova()}
                                                    ${destaque()}
                                                </ul>
                                                <p class="posicao"> ${fullsr.position}</p>
                                                <ul class="dados-baixo">
                                                    <li>${fullsr.postedAt}</li>
                                                    <li>${fullsr.contract}</li>
                                                    <li>${fullsr.location}</li>
                                                </ul>
                                            </div>
                                            <div class="techs">
                                                <div class="infos-direita">
                                                    <p>${fullsr.role}</p>
                                                    <p>${fullsr.level}</p>
                                                    ${linguagens()}
                                                    ${ferramentas()}
                                                </div>
                                            </div>
                                    </div>
                            `
                    }else if(dados.role == 'Fullstack' && dados.level == 'Senior' == ''){
                        nenhumaVaga.style.display = 'flex'
                    }
                }else if(selectCargo.value == 'front' && selectLevel.value == 'todos'){
                    if(dados.role == 'Frontend'){
                    let front = dados
                    vagas.innerHTML += 
                    `
                            <div class="vaga" id="nmr${front.id}">
                                <img src="${front.logo}"></img>
                                    <div class="ajuste">
                                        <div class="detalhes">
                                            <ul class="dados-cima">
                                                <li class="empresa">${front.company}</li>
                                                ${vagaNova()}
                                                ${destaque()}
                                            </ul>
                                            <p class="posicao"> ${front.position}</p>
                                            <ul class="dados-baixo">
                                                <li>${front.postedAt}</li>
                                                <li>${front.contract}</li>
                                                <li>${front.location}</li>
                                            </ul>
                                        </div>
                                        <div class="techs">
                                            <div class="infos-direita">
                                                <p>${front.role}</p>
                                                <p>${front.level}</p>
                                                ${linguagens()}
                                                ${ferramentas()}
                                            </div>
                                        </div>
                                </div>
                        `
                    }
                }else if(selectCargo.value == 'front' && selectLevel.value == 'junior'){
                    if(dados.role == 'Frontend' && dados.level == 'Junior' != ''){
                        let frontjr = dados
                        vagas.innerHTML += 
                            `
                                <div class="vaga" id="nmr${frontjr.id}">
                                    <img src="${frontjr.logo}"></img>
                                        <div class="ajuste">
                                            <div class="detalhes">
                                                <ul class="dados-cima">
                                                    <li class="empresa">${frontjr.company}</li>
                                                    ${vagaNova()}
                                                    ${destaque()}
                                                </ul>
                                                <p class="posicao"> ${frontjr.position}</p>
                                                <ul class="dados-baixo">
                                                    <li>${frontjr.postedAt}</li>
                                                    <li>${frontjr.contract}</li>
                                                    <li>${frontjr.location}</li>
                                                </ul>
                                            </div>
                                            <div class="techs">
                                                <div class="infos-direita">
                                                    <p>${frontjr.role}</p>
                                                    <p>${frontjr.level}</p>
                                                    ${linguagens()}
                                                    ${ferramentas()}
                                                </div>
                                            </div>
                                    </div>
                            `
                    }
                }else if(selectCargo.value == 'front' && selectLevel.value == 'pleno'){
                    if(dados.role == 'Frontend' && dados.level == 'Midweight' != ''){
                        let frontpl = dados
                        vagas.innerHTML += 
                            `
                                <div class="vaga" id="nmr${frontpl.id}">
                                    <img src="${frontpl.logo}"></img>
                                        <div class="ajuste">
                                            <div class="detalhes">
                                                <ul class="dados-cima">
                                                    <li class="empresa">${frontpl.company}</li>
                                                    ${vagaNova()}
                                                    ${destaque()}
                                                </ul>
                                                <p class="posicao"> ${frontpl.position}</p>
                                                <ul class="dados-baixo">
                                                    <li>${frontpl.postedAt}</li>
                                                    <li>${frontpl.contract}</li>
                                                    <li>${frontpl.location}</li>
                                                </ul>
                                            </div>
                                            <div class="techs">
                                                <div class="infos-direita">
                                                    <p>${frontpl.role}</p>
                                                    <p>${frontpl.level}</p>
                                                    ${linguagens()}
                                                    ${ferramentas()}
                                                </div>
                                            </div>
                                    </div>
                            `
                    }else if(dados.role == 'Frontend' && dados.level == 'Midweight' == ''){
                        nenhumaVaga.style.display = 'flex'
                    }
                }else if(selectCargo.value == 'front' && selectLevel.value == 'senior'){
                    if(dados.role == 'Frontend' && dados.level == 'Senior' != ''){
                        let frontsr = dados
                        vagas.innerHTML += 
                            `
                                <div class="vaga" id="nmr${frontsr.id}">
                                    <img src="${frontsr.logo}"></img>
                                        <div class="ajuste">
                                            <div class="detalhes">
                                                <ul class="dados-cima">
                                                    <li class="empresa">${frontsr.company}</li>
                                                    ${vagaNova()}
                                                    ${destaque()}
                                                </ul>
                                                <p class="posicao"> ${frontsr.position}</p>
                                                <ul class="dados-baixo">
                                                    <li>${frontsr.postedAt}</li>
                                                    <li>${frontsr.contract}</li>
                                                    <li>${frontsr.location}</li>
                                                </ul>
                                            </div>
                                            <div class="techs">
                                                <div class="infos-direita">
                                                    <p>${frontsr.role}</p>
                                                    <p>${frontsr.level}</p>
                                                    ${linguagens()}
                                                    ${ferramentas()}
                                                </div>
                                            </div>
                                    </div>
                            `
                            nenhumaVaga.style.opacity = '0'
                    }else if(dados.role == 'Frontend' && dados.level == 'Senior' == ''){
                        nenhumaVaga.style.display = 'flex'
                    }
                }else if(selectCargo.value == 'back' && selectLevel.value == 'todos'){
                    if(dados.role == 'Backend'){
                    let back = dados
                    vagas.innerHTML += 
                    `
                            <div class="vaga" id="nmr${back.id}">
                                <img src="${back.logo}"></img>
                                    <div class="ajuste">
                                        <div class="detalhes">
                                            <ul class="dados-cima">
                                                <li class="empresa">${back.company}</li>
                                                ${vagaNova()}
                                                ${destaque()}
                                            </ul>
                                            <p class="posicao"> ${back.position}</p>
                                            <ul class="dados-baixo">
                                                <li>${back.postedAt}</li>
                                                <li>${back.contract}</li>
                                                <li>${back.location}</li>
                                            </ul>
                                        </div>
                                        <div class="techs">
                                            <div class="infos-direita">
                                                <p>${back.role}</p>
                                                <p>${back.level}</p>
                                                ${linguagens()}
                                                ${ferramentas()}
                                            </div>
                                        </div>
                                </div>
                        `
                    }
                }else if(selectCargo.value == 'back' && selectLevel.value == 'junior'){
                    if(dados.role == 'Backend' && dados.level == 'Junior' != ''){
                        let backjr = dados
                        vagas.innerHTML += 
                            `
                                <div class="vaga" id="nmr${backjr.id}">
                                    <img src="${backjr.logo}"></img>
                                        <div class="ajuste">
                                            <div class="detalhes">
                                                <ul class="dados-cima">
                                                    <li class="empresa">${backjr.company}</li>
                                                    ${vagaNova()}
                                                    ${destaque()}
                                                </ul>
                                                <p class="posicao"> ${backjr.position}</p>
                                                <ul class="dados-baixo">
                                                    <li>${backjr.postedAt}</li>
                                                    <li>${backjr.contract}</li>
                                                    <li>${backjr.location}</li>
                                                </ul>
                                            </div>
                                            <div class="techs">
                                                <div class="infos-direita">
                                                    <p>${backjr.role}</p>
                                                    <p>${backjr.level}</p>
                                                    ${linguagens()}
                                                    ${ferramentas()}
                                                </div>
                                            </div>
                                    </div>
                            `
                    }else if(dados.role == 'Backend' && dados.level == 'Junior' == ''){
                        nenhumaVaga.style.display = 'flex'
                    }
                }else if(selectCargo.value == 'back' && selectLevel.value == 'pleno'){
                    if(dados.role == 'Backend' && dados.level == 'Midweight' != ''){
                        let backpl = dados
                        vagas.innerHTML += 
                            `
                                <div class="vaga" id="nmr${backpl.id}">
                                    <img src="${backpl.logo}"></img>
                                        <div class="ajuste">
                                            <div class="detalhes">
                                                <ul class="dados-cima">
                                                    <li class="empresa">${backpl.company}</li>
                                                    ${vagaNova()}
                                                    ${destaque()}
                                                </ul>
                                                <p class="posicao"> ${backpl.position}</p>
                                                <ul class="dados-baixo">
                                                    <li>${backpl.postedAt}</li>
                                                    <li>${backpl.contract}</li>
                                                    <li>${backpl.location}</li>
                                                </ul>
                                            </div>
                                            <div class="techs">
                                                <div class="infos-direita">
                                                    <p>${backpl.role}</p>
                                                    <p>${backpl.level}</p>
                                                    ${linguagens()}
                                                    ${ferramentas()}
                                                </div>
                                            </div>
                                    </div>
                            `
                    }else if(dados.role == 'Backend' && dados.level == 'Midweight' == ''){
                        nenhumaVaga.style.display = 'flex'
                    }
                }else if(selectCargo.value == 'back' && selectLevel.value == 'senior'){
                    if(dados.role == 'Backend' && dados.level == 'Senior' != ''){
                        let backsr = dados
                        vagas.innerHTML += 
                            `
                                <div class="vaga" id="nmr${backsr.id}">
                                    <img src="${backsr.logo}"></img>
                                        <div class="ajuste">
                                            <div class="detalhes">
                                                <ul class="dados-cima">
                                                    <li class="empresa">${backsr.company}</li>
                                                    ${vagaNova()}
                                                    ${destaque()}
                                                </ul>
                                                <p class="posicao"> ${backsr.position}</p>
                                                <ul class="dados-baixo">
                                                    <li>${backsr.postedAt}</li>
                                                    <li>${backsr.contract}</li>
                                                    <li>${backsr.location}</li>
                                                </ul>
                                            </div>
                                            <div class="techs">
                                                <div class="infos-direita">
                                                    <p>${backsr.role}</p>
                                                    <p>${backsr.level}</p>
                                                    ${linguagens()}
                                                    ${ferramentas()}
                                                </div>
                                            </div>
                                    </div>
                            `
                    }else if(dados.role == 'Backend' && dados.level == 'Senior' == ''){
                        nenhumaVaga.style.display = 'flex'
                    }
                }
            })
                vagas.innerHTML += 
                            `
                                <div class="vaga" id="nmr${dados.id}">
                                    <img src="${dados.logo}"></img>
                                        <div class="ajuste">
                                            <div class="detalhes">
                                                <ul class="dados-cima">
                                                    <li class="empresa">${dados.company}</li>
                                                    ${vagaNova()}
                                                    ${destaque()}
                                                </ul>
                                                <p class="posicao"> ${dados.position}</p>
                                                <ul class="dados-baixo">
                                                    <li>${dados.postedAt}</li>
                                                    <li>${dados.contract}</li>
                                                    <li>${dados.location}</li>
                                                </ul>
                                            </div>
                                            <div class="techs">
                                                <div class="infos-direita">
                                                    <p>${dados.role}</p>
                                                    <p>${dados.level}</p>
                                                    ${linguagens()}
                                                    ${ferramentas()}
                                                </div>
                                            </div>
                                        </div>
                            `
        })
    })
})