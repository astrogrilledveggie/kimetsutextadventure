let gameOver = false

let mainBody = document.getElementById('main-body')
let gameUI = document.createElement('div')
let startGameImg = document.createElement('img')
let startGameBtn = document.createElement('button')
let chapterDiv = document.createElement('div')
let gameTitle = document.getElementById('title').textContent

//Game Over visuals
let gameOverDiv = document.createElement('div')
gameOverDiv.id = 'gameOverDiv'
gameOverDiv.innerHTML = 'GAME OVER' + "<p>" + '残念だけど'
let gameOverImg = document.createElement('img')
gameOverImg.src = 'https://static.wikia.nocookie.net/b744b837-a911-49a0-adfc-db26a0be5e5c'
gameOverDiv.appendChild(gameOverImg)

let createTextInput = (parent) => {
    let textDiv = document.createElement('div')
    textDiv.className = 'input-group'

    let textInput = document.createElement('div')
    textInput.className = 'input-group-prepend'

    let textInputLabel = document.createElement('span')
    textInputLabel.className = 'input-group-text'
    textInputLabel.innerText = 'Input'
    textInput.appendChild(textInputLabel)
    textDiv.appendChild(textInput)

    let textInputField = document.createElement('input')
    textInputField.type = 'text'
    textInputField.className = 'form-control'
    textDiv.appendChild(textInputField)

    parent.appendChild(textDiv)

    textInputField.addEventListener('keydown', enterNextChapter)

    function enterNextChapter(event) {
        event.stopPropagation()
        if (textInputField.value === 'let us proceed') {
            gameOver = false
        } else {
            gameOver = true
        }

        if (event.key === 'Enter' && gameOver === false) {
            alert('Nicely done. You are ready to embark on your text adventure.')
            document.getElementById('prologue').remove()
            document.querySelector('.input-group').remove()
            loadChapter1()
        } else if (event.key !== 'Enter') {
            return
        } else {
            chapterDiv.remove()
            document.querySelector('.input-group').remove()
            gameUI.appendChild(gameOverDiv)
        }
    }
}

window.onload = function() {
    
    gameUI.className = 'gameUI'
    mainBody.appendChild(gameUI)

    //Set welcome page aka start game page
    startGameImg.id = 'startGameImg'
    startGameImg.src = 'https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/c/c7/Tanjiro_anime_design.png/revision/latest?cb=20181128204204'
    gameUI.appendChild(startGameImg)

    startGameBtn.type = 'button'
    startGameBtn.className = 'btn btn-outline-warning'
    startGameBtn.innerText = '行くぞう'
    gameUI.appendChild(startGameBtn)

    startGameBtn.addEventListener('click', startGameBtnClick)
}

function startGameBtnClick(event) {
    event.stopPropagation()
    $(startGameImg).hide('slow')
    $(startGameBtn).hide('slow')

    chapterDiv.className = 'chapterDiv'
    chapterDiv.id = 'prologue'
    chapterDiv.innerHTML = 
        "ようこそ " + gameTitle + " へ。" + "<p>"  
        + "<p>" + "You are about to embark on an adventure as Kamado Tanjirou, the main protagonist. The aim of this game is to make the correct decision at each critical step, failing which would mean 'GAME OVER' for you." 
        + "<p>" + "At each step, you will be prompted to choose from 3 options; each option would correspond with a specific text input. Once you have decided, enter the exact text command into the field form and hit 'ENTER'."
        + "<p>" + "e.g. Option Name/Details: text command"
        + "<p>" + "Let us try this out. Look at the option printed below and enter the corresponding text command. Then, hit enter."
        + "<p>" + "<strong>" + "To proceed with game: " + "<font color = 'yellow'>" + "let us proceed" + "</font>" + "</strong>"
    gameUI.appendChild(chapterDiv)

    createTextInput(gameUI)
}

function loadChapter1() {
    let chapter1Div = document.createElement('div')
    chapter1Div.className = 'chapterDiv'
    chapter1Div.id = 'chapter1'
    chapter1Div.innerHTML = "<h1>" + "Chapter 1 // 第一話" + "</h1>"
    document.querySelector('.gameUI').appendChild(chapter1Div)
}