const blocks = document.querySelectorAll('.block')
const b1 = document.querySelector('.b1')
const b2 = document.querySelector('.b2')
const b3 = document.querySelector('.b3')
const b4 = document.querySelector('.b4')
const b5 = document.querySelector('.b5')
const b6 = document.querySelector('.b6')
const b7 = document.querySelector('.b7')
const b8 = document.querySelector('.b8')
const b9 = document.querySelector('.b9')
const result = document.querySelector('.result')

const v1 = new Set(['b1', 'b2', 'b3'])
const v2 = new Set(['b4', 'b5', 'b6'])
const v3 = new Set(['b7', 'b8', 'b9'])
const v4 = new Set(['b1', 'b4', 'b7'])
const v5 = new Set(['b2', 'b5', 'b8'])
const v6 = new Set(['b3', 'b6', 'b9'])
const v7 = new Set(['b1', 'b5', 'b9'])
const v8 = new Set(['b3', 'b5', 'b7'])

let playerX = []
let playerO = []
let nextPlayer = ''
let turno = 0
let finalRes = false


function reset() {
    playerX = []
    playerO = []
    nextPlayer = ''
    turno = 0
    finalRes = false
    result.innerHTML = ''
    blocks.forEach(el => {
        if (el.id == 'b1') { b1.classList.remove('victory') }
        if (el.id == 'b2') { b2.classList.remove('victory') }
        if (el.id == 'b3') { b3.classList.remove('victory') }
        if (el.id == 'b4') { b4.classList.remove('victory') }
        if (el.id == 'b5') { b5.classList.remove('victory') }
        if (el.id == 'b6') { b6.classList.remove('victory') }
        if (el.id == 'b7') { b7.classList.remove('victory') }
        if (el.id == 'b8') { b8.classList.remove('victory') }
        if (el.id == 'b9') { b9.classList.remove('victory') }

        if (el.id == 'b1') { b1.classList.remove('x-mark') }
        if (el.id == 'b2') { b2.classList.remove('x-mark') }
        if (el.id == 'b3') { b3.classList.remove('x-mark') }
        if (el.id == 'b4') { b4.classList.remove('x-mark') }
        if (el.id == 'b5') { b5.classList.remove('x-mark') }
        if (el.id == 'b6') { b6.classList.remove('x-mark') }
        if (el.id == 'b7') { b7.classList.remove('x-mark') }
        if (el.id == 'b8') { b8.classList.remove('x-mark') }
        if (el.id == 'b9') { b9.classList.remove('x-mark') }

        if (el.id == 'b1') { b1.classList.remove('o-mark') }
        if (el.id == 'b2') { b2.classList.remove('o-mark') }
        if (el.id == 'b3') { b3.classList.remove('o-mark') }
        if (el.id == 'b4') { b4.classList.remove('o-mark') }
        if (el.id == 'b5') { b5.classList.remove('o-mark') }
        if (el.id == 'b6') { b6.classList.remove('o-mark') }
        if (el.id == 'b7') { b7.classList.remove('o-mark') }
        if (el.id == 'b8') { b8.classList.remove('o-mark') }
        if (el.id == 'b9') { b9.classList.remove('o-mark') }
    })
}

function comparaVic(player, v, nome) {
    let count = 0
    finalRes = false

    for (let i = 0; i < player.length; i++) {        
        if (nome == 'x') {
            if (v.has(player[i])) {
                count++
            } 
        } else if (nome == 'o') {
            if (v.has(player[i])) {
                count++
            }
        }

        if (count == 3) {
            finalRes = true
            v.forEach(el => {
                if (el == 'b1') { b1.classList.add('victory') }
                if (el == 'b2') { b2.classList.add('victory') }
                if (el == 'b3') { b3.classList.add('victory') }
                if (el == 'b4') { b4.classList.add('victory') }
                if (el == 'b5') { b5.classList.add('victory') }
                if (el == 'b6') { b6.classList.add('victory') }
                if (el == 'b7') { b7.classList.add('victory') }
                if (el == 'b8') { b8.classList.add('victory') }
                if (el == 'b9') { b9.classList.add('victory') }
            })
        }
    }
    count = 0
    if (finalRes == true) {
        console.log(player, `imprimindo os ids da vitória de ${nome}`)
        result.innerHTML = `
        <h1>Vitória do jogador ${nome}</h1>
        <button class="btn" onclick="reset()">Reiniciar</button>
        `
    }
}

function playerTurn(player, nome, bl) {
    if(nome == 'x') { 
        nextPlayer = 'o'
    }
    if(nome == 'o') {
        nextPlayer = 'x'
    }

    player.push(bl.id)
    
    bl.classList.add(`${nome}-mark`)
    if (v1.has(bl.id) && player.length >= 3) {
        comparaVic(player, v1, nome)
    }
    if (v2.has(bl.id) && player.length >= 3) {
        comparaVic(player, v2, nome)
    }
    if (v3.has(bl.id) && player.length >= 3) {
        comparaVic(player, v3, nome)
    }
    if (v4.has(bl.id) && player.length >= 3) {
        comparaVic(player, v4, nome)
    }
    if (v5.has(bl.id) && player.length >= 3) {
        comparaVic(player, v5, nome)
    }
    if (v6.has(bl.id) && player.length >= 3) {
        comparaVic(player, v6, nome)
    }
    if (v7.has(bl.id) && player.length >= 3) {
        comparaVic(player, v7, nome)
    }
    if (v8.has(bl.id) && player.length >= 3) {
        comparaVic(player, v8, nome)
    }
    passTurn(nextPlayer)
    
}

function passTurn(np) {
    if (np == 'x') {
        playerTurn(playerX, np)
    } else if (np == 'o') {
        playerTurn(playerO, np)
    }


}

function choice(bl) {
    if (turno % 2 == 0) {
        turno++
        playerTurn(playerX, 'x', bl)
    } else if(turno % 2 != 0) {
        turno++
        playerTurn(playerO, 'o', bl)
    }
}
