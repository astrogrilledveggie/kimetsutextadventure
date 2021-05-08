// start-of-game settings
let gameOver = false
let tanjiroHitPoints = 10

// admin code bits
let mainBody = document.getElementById('main-body')
let lifeBar = document.getElementById('life-bar')
let lifeHearts = document.querySelectorAll(".lifeHeart")
let gameUI = document.createElement('div')
let startGameImg = document.createElement('img')
let startGameBtn = document.createElement('button')
let chapter0Div = document.createElement('div')
let gameTitle = document.getElementById('title').textContent

// "Game Over" visuals
function gameOverTrue(parent) {
    lifeBar.remove()
    let gameOverDiv = document.createElement('div')
    gameOverDiv.id = 'gameOverDiv'
    gameOverDiv.innerHTML = 'GAME OVER' + "<p>" + '残念だけど'
    let gameOverImg = document.createElement('img')
    gameOverImg.src = 'https://static.wikia.nocookie.net/b744b837-a911-49a0-adfc-db26a0be5e5c'
    gameOverDiv.appendChild(gameOverImg)
    parent.appendChild(gameOverDiv)
}

// "To Be Continued" visuals
function toBeContinued(parent) {
    let toBeContinuedDiv = document.createElement('div')
    toBeContinuedDiv.id = 'toBeContinued'
    toBeContinuedDiv.innerHTML = 'Thanks for playing!' + "<p>" + 'またね〜'
    let toBeContinuedImg = document.createElement('img')
    toBeContinuedImg.src = 'https://pbs.twimg.com/media/D4CpsAfU4AEDPQ8.jpg'
    toBeContinuedDiv.appendChild(toBeContinuedImg)
    parent.appendChild(toBeContinuedDiv)
}

// build game modals
// let goodChoiceModal = document.getElementById('goodChoiceModal')
// let goodChoiceModalBody = document.getElementById('goodChoiceModalBody')
// let mehChoiceModal = document.getElementById('mehChoiceModal')
// let mehChoiceModalBody = document.getElementById('mehChoiceModalBody')
// let badChoiceModal = document.getElementById('badChoiceModal')
// let badChoiceModalBody = document.getElementById('badChoiceModalBody')
// let sitOnFenceModal = document.getElementById('sitOnFenceModal')
// let sitOnFenceModalBody = document.getElementById('sitOnFenceModalBody')
// let invalidModal = document.getElementById('invalidModal')
// let invalidModalBody = document.getElementById('invalidModalBody')

let createTextInput0 = (parent) => {
    let textDiv0 = document.createElement('div')
    textDiv0.className = 'input-group'

    let textInput0 = document.createElement('div')
    textInput0.className = 'input-group-prepend'

    let textInput0Label = document.createElement('span')
    textInput0Label.className = 'input-group-text'
    textInput0Label.innerText = 'Input'
    textInput0.appendChild(textInput0Label)
    textDiv0.appendChild(textInput0)

    let textInput0Field = document.createElement('input')
    textInput0Field.type = 'text'
    textInput0Field.className = 'form-control'
    textInput0Field.id = 'input0'
    textDiv0.appendChild(textInput0Field)

    parent.appendChild(textDiv0)

    textInput0Field.addEventListener('keydown', enterChapter1)

    function enterChapter1(event) {
        event.stopPropagation()
        if (event.key === 'Enter' && textInput0Field.value === 'let us proceed') {
            alert('Nicely done. You are ready to embark on your text adventure.')
            document.getElementById('prologue').remove()
            document.querySelector('.input-group').remove()
            loadChapter1()
        } else if (event.key === 'Enter' && textInput0Field.value === '') {
            alert('You need to make a choice. Be brave, young warrior.')
            // sitOnFenceModalBody.innerText = "You need to make a choice. Be brave, young warrior."
            // sitOnFenceModal.modal()
            return
        } else if (event.key !== 'Enter') {
            return
        } else {
            alert('That is incorrect. Please try again')
            // invalidModal.modal()
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

    // lifeBar.style.display = 'block'

    let audio = new Audio("Beginning.mp3")
    audio.play()

    $(startGameImg).hide('slow')
    $(startGameBtn).hide('slow')

    chapter0Div.className = 'chapterDiv'
    chapter0Div.id = 'prologue'
    chapter0Div.innerHTML = 
        "ようこそ " + gameTitle + " へ。" + "<p>"  
        + "<p>" + "You are about to embark on an adventure as Kamado Tanjiro, the main protagonist. The aim of this game is to make the correct decision at each critical step. You start the game with 10 hitpoints (hp): every wrong decision would either lose you 2 hp, or all your hp, depending on the severity of your misstep; when you have 0 hp left, it means 'GAME OVER' for you." 
        + "<p>" + "At each step, you will be prompted to choose from 3 options; each option would correspond with a specific text input. Once you have decided, enter the exact text command into the field form and hit your 'ENTER' key."
        + "<p>" + "e.g. " + "<strong>" + "Option Name: " + "<font color = 'yellow'>" + "text command" + "</font>" + "</strong>"
        + "<p>" + "Let us try this out. Look at the option printed below and enter the corresponding text command. Then, hit enter."
        + "<p>" + "<strong>" + "To proceed with game: " + "<font color = 'yellow'>" + "let us proceed" + "</font>" + "</strong>"
    gameUI.appendChild(chapter0Div)

    createTextInput0(gameUI)
}

function loadChapter1() {
    let chapter1Div = document.createElement('div')
    chapter1Div.className = 'chapterDiv'
    chapter1Div.id = 'chapter1'
    chapter1Div.innerHTML = 
        "<h1>" + "第1話: 残酷" + "</h1>"
        + "<p id = 'statusCheckText'>Status Check: You currently have "  + tanjiroHitPoints + " hp.</p>"
        + "<p>" + "Kamado Tanjiro, a young boy with a gifted sense of smell, leaves his family in their mountain home and departs to a nearby town to sell charcoal. His family has struggled financially since the death of their father but they are happy nonetheless. By the time he has sold all the charcoal, night has already fallen."
        + "<p>" + "On his way home he comes across Saburo, an elderly man who has lost his family, who sternly instructs Tanjiro to spend the night in his home. He warns Tanjiro to never travel at night, as there are man-eating Demons that roam the land at night."
        + "<p>" + "When Tanjiro returns home the following morning, he smells blood and discovers his entire family massacred. He finds that his younger sister, Nezuko, is still warm to the touch and he carries her to the town for medical treatment. On their way to the town, Tanjiro slips and falls but when he tries to carry Nezuko again, she transforms into a demon and attacks him."
        + "<p>" + "While Tanjiro tries to fend her off, a Demon Slayer (Tomioka Giyu) arrives and attempts to decapitate Nezuko, only for Tanjiro to pull her out of the way. He pleads with Giyu that Nezuko would never harm anyone, and that there was an unknown scent at his home which might've belonged to the culprit. However Giyu dismisses his excuses, and explains that Nezuko had transformed into a demon after her wounds were contaminated with demon blood, and that she is a hungry demon who will eat humans. Tanjiro says that he will cure Nezuko and begs to have her life spared, but this infuriates Giyu, causing him to berate Tanjiro for his weakness and resolve."
        + "<p>" + "Giyu stabs Nezuko which triggers Tanjiro into action; Tanjiro tries his best to attack Giyu but is ultimately knocked unconscious. When Nezuko sees Tanjiro lying unconscious, she escapes from Giyu's grasp and runs to him, Giyu looks on in despair as he believes that she is going to eat Tanjiro, but is stunned to see her protecting her brother from him. Nezuko attacks Giyu but he questions her odd behavior, and ends up knocking her unconscious instead of killing her."
        + "<p>" + "Tanjiro dreams of his family apologizing for leaving him, and his mother entrusting him to look after Nezuko. When Tanjiro awakens from his dream, Nezuko is returned to him, and Giyu tells him to see a man named Sakonji Urokodaki at the foot of Mount Sagiri. He instructs Tanjiro to say that Giyu was the one who sent them, and warns him to make sure that Nezuko is never exposed to sunlight before vanishing."
        + "<p>" + "What is your choice?"
        + "<ol id='choiceList'>"
        + "<li>" + "Free Nezuko by decapitating her: " + "<font color = 'yellow'>" + "Kill Nezuko" + "</font>"
        + "<li>" + "Try to find Giyu to explain his cryptic instructions: " + "<font color = 'yellow'>" + "Search for Giyu" + "</font>"
        + "<li>" + "Return home to lay family to rest: " + "<font color = 'yellow'>" + "Return home" + "</font>"
        + "</ol>"
    gameUI.appendChild(chapter1Div)

    createTextInput1(gameUI)
}

function createTextInput1(parent) {
    let textDiv1 = document.createElement('div')
    textDiv1.className = 'input-group'

    let textInput1 = document.createElement('div')
    textInput1.className = 'input-group-prepend'

    let textInput1Label = document.createElement('span')
    textInput1Label.className = 'input-group-text'
    textInput1Label.innerText = 'Input'
    textInput1.appendChild(textInput1Label)
    textDiv1.appendChild(textInput1)

    let textInput1Field = document.createElement('input')
    textInput1Field.type = 'text'
    textInput1Field.className = 'form-control'
    textInput1Field.id = 'input1'
    textDiv1.appendChild(textInput1Field)

    parent.appendChild(textDiv1)

    textInput1Field.addEventListener('keydown', enterChapter2)

    function enterChapter2(event) {
        event.stopPropagation()
        if (event.key === 'Enter' && textInput1Field.value === 'Return home' && gameOver === false) {
            alert('Nicely done. The siblings return home to bury the rest of the Kamado family, and leave hand in hand to embark on their journey.')
            loadChapter2()
        } else if (event.key === 'Enter' && textInput1Field.value === 'Kill Nezuko') {
            alert('Nezuko is the heart and soul of this adventure. You just destroyed your fate.')
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        } else if (event.key === 'Enter' && textInput1Field.value === 'Search for Giyu') {
            alert('Giyu vanished like the wind. It is not advisable to try to locate him and risk running into another demon attack. What would be a priority for you at this point?')
            tanjiroHitPoints = tanjiroHitPoints - 2
            // for (let i = 0; i < lifeHearts.length; i++) {
            //     lifeHearts[i].remove()
            //     lifeHearts[i+1].remove()
            //     break
            // }
            document.getElementById("heart0").remove()
            document.getElementById("heart1").remove()
        } else if (event.key === 'Enter' && textInput1Field.value === '') {
            alert('You need to make a choice. Be brave, young warrior.')
        } else if (event.key !== 'Enter') {
            return
        } else if (textInput1Field.value === '') {
            return
        } else if (event.key === 'Enter' && textInput1Field.value !== 'Return home') {
            alert('That does not look like a valid option. Please try again')
        }

        if (tanjiroHitPoints === 0) {
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        }
    }
}

function loadChapter2() {
    let chapter2Div = document.createElement('div')
    chapter2Div.className = 'chapterDiv'
    chapter2Div.id = 'chapter2'
    chapter2Div.innerHTML = 
        "<h1>" + "第2話: 育手・鱗滝左近次" + "</h1>"
        + "<p id = 'statusCheckText'>Status Check: You currently have "  + tanjiroHitPoints + " hp.</p>"
        + "<p>" + "Tanjiro buys a straw basket, planning to carry Nezuko in it so they can keep heading to Mt. Sagiri during the day and keep her out of the sun. That night they find a temple but Tanjiro smells blood and they burst inside to find a demon feeding on several humans. The demon attacks Tanjiro while Nezuko stares at the human bodies, salivating. Nezuko turns away and kicks the demon's head off. The body attacks Nezuko while the head attacks Tanjiro. After disabling the head he pursues Nezuko and knocks the demon body off a cliff. The demon's body dies when it falls."
        + "<p>" + "An old man, Sakonji Urokodaki, prevents Tanjiro from stabbing the pinned head, as that is not enough to kill it, but Tanjiro hesitates to smash it. Urokodaki notices, but thinks Tanjiro won't work, no matter what Giyu thinks. The sun rises and the demon is vaporized. Urokodaki berates Tanjiro for his hesitation, stating his resolve is weak. He warns Tanjiro letting Nezuko kill an innocent is the worst possible thing, and tests him to see if he is fit to be a member of the Demon Slayers Corps."
        + "<p>" + "After going for a long run, he has Tanjiro leave Nezuko in a cabin and climb a mountain. He tells Tanjiro to make it down before sunrise. The mountain is booby-trapped though."
        + "<p>" + "What is your choice?"
        + "<ol id='choiceList'>"
        + "<li>" + "Use your sense of smell to find the booby traps: " + "<font color = 'yellow'>" + "Use sense of smell" + "</font>"
        + "<li>" + "Keep at it - this is a test of perseverance: " + "<font color = 'yellow'>" + "Persevere onwards" + "</font>"
        + "<li>" + "Go back the way you came: " + "<font color = 'yellow'>" + "Backtrack" + "</font>"
        + "</ol>"
    gameUI.appendChild(chapter2Div)
    chapter2Div.scrollIntoView()

    createTextInput2(gameUI)

    document.getElementById('input1').disabled = true
}

function createTextInput2(parent) {
    let textDiv2 = document.createElement('div')
    textDiv2.className = 'input-group'

    let textInput2 = document.createElement('div')
    textInput2.className = 'input-group-prepend'

    let textInput2Label = document.createElement('span')
    textInput2Label.className = 'input-group-text'
    textInput2Label.innerText = 'Input'
    textInput2.appendChild(textInput2Label)
    textDiv2.appendChild(textInput2)

    let textInput2Field = document.createElement('input')
    textInput2Field.type = 'text'
    textInput2Field.className = 'form-control'
    textInput2Field.id = 'input2'
    textDiv2.appendChild(textInput2Field)

    parent.appendChild(textDiv2)

    textInput2Field.addEventListener('keydown', enterChapter3)

    function enterChapter3(event) {
        event.stopPropagation()
        if (event.key === 'Enter' && textInput2Field.value === 'Use sense of smell' && gameOver === false) {
            alert('Nicely done. Tanjiro uses his sense of smell to find the booby traps, which still have the scent of the person who laid them, letting him return in time. Urokodaki recalls the letter he recieved from Giyu about the siblings and the latter requests he trains them. He accepts Tanjiro as his student.')
            loadChapter3()
        } else if (event.key === 'Enter' && textInput2Field.value === 'Backtrack') {
            alert('You stumble over the whole obstacle course and are fatally injured.')
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        } else if (event.key === 'Enter' && textInput2Field.value === 'Persevere onwards') {
            alert('Not the smartest way to go, but you completed the task anyway - only that you did not make it within the timeframe given by Urokodaki. Try again.')
            tanjiroHitPoints = tanjiroHitPoints - 2
            document.getElementById("heart2").remove()
            document.getElementById("heart3").remove()
        } else if (event.key === 'Enter' && textInput2Field.value === '') {
            alert('You need to make a choice. Be brave, young warrior.')
        } else if (event.key !== 'Enter') {
            return
        } else if (textInput2Field.value === '') {
            return
        } else if (event.key === 'Enter' && textInput2Field.value !== 'Use sense of smell') {
            alert('That does not look like a valid option. Please try again')
        }

        if (tanjiroHitPoints === 0) {
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        }
    }

}

function loadChapter3() {
    let chapter3Div = document.createElement('div')
    chapter3Div.className = 'chapterDiv'
    chapter3Div.id = 'chapter3'
    chapter3Div.innerHTML = 
        "<h1>" + "第3話: 錆兎と真菰" + "</h1>"
        + "<p id = 'statusCheckText'>Status Check: You currently have "  + tanjiroHitPoints + " hp.</p>"
        + "<p>" + "Over the next year, Tanjiro trains with Urokodaki, improving his physical form and learning the Water Style swordsmanship. Nezuko has fallen into a deep sleep that has lasted for six months, though there doesn't appear to be anything wrong with her."
        + "<p>" + "One day Urokodaki declares he has taught Tanjiro all he can and leads him to a boulder. He tells him if he can slice it with his sword he will let him enter the Final Selection - only those who survive the Final Selection can become official members of the Demon Slayers Corps. Urokodaki leaves, never to teach him another lesson. Tanjiro tries for six months but cannot damage the rock, all while Nezuko continues to sleep."
        + "<p>" + "As he begins to give up, a young man in a fox mask, Sabito, appears and attacks him. The two fight and Tanjiro is at a severe disadvantage despite having a real sword and his opponent a wooden one. Sabito scolds him for forgetting his lessons before knocking him out. A girl with a fox mask, Makomo, is with Tanjiro when he wakes up and helps hone his techniques, like Total Concentration Breathing, which increases the wielder's physical strength. She tells him she and Sabito were both orphans raised by Urokodaki. Sabito occasionally returns and fights him but Tanjiro loses every time."
        + "<p>" + "What is your choice?"
        + "<ol id='choiceList'>"
        + "<li>" + "There is no shame in asking for help - pester Urokodaki for guidance: " + "<font color = 'yellow'>" + "Pester Urokodaki" + "</font>"
        + "<li>" + "This is pointless - proceed to the Final Selection on my own terms: " + "<font color = 'yellow'>" + "On my own terms" + "</font>"
        + "<li>" + "Just keep trying everyday, without fail: " + "<font color = 'yellow'>" + "Train train train" + "</font>"
        + "</ol>"
    gameUI.appendChild(chapter3Div)
    chapter3Div.scrollIntoView()

    createTextInput3(gameUI)

    document.getElementById('input2').disabled = true
}

function createTextInput3(parent) {
    let textDiv3 = document.createElement('div')
    textDiv3.className = 'input-group'

    let textInput3 = document.createElement('div')
    textInput3.className = 'input-group-prepend'

    let textInput3Label = document.createElement('span')
    textInput3Label.className = 'input-group-text'
    textInput3Label.innerText = 'Input'
    textInput3.appendChild(textInput3Label)
    textDiv3.appendChild(textInput3)

    let textInput3Field = document.createElement('input')
    textInput3Field.type = 'text'
    textInput3Field.className = 'form-control'
    textInput3Field.id = 'input3'
    textDiv3.appendChild(textInput3Field)

    parent.appendChild(textDiv3)

    textInput3Field.addEventListener('keydown', enterChapter4)

    function enterChapter4(event) {
        event.stopPropagation()
        if (event.key === 'Enter' && textInput3Field.value === 'Train train train' && gameOver === false) {
            alert("Nicely done. After six months of this, Sabito and Tanjiro fight again and this time Sabito has a real sword. Tanjiro's blade finally reaches Sabito first. The adopted siblings smile and vanish. Tanjiro realizes his sword, which he thought cut through Sabito's mask, had actually sliced the boulder in two.")
            loadChapter4()
        } else if (event.key === 'Enter' && textInput3Field.value === 'On my own terms') {
            alert("There is no room for your wagamama here. Going into the Final Selection without the requisite skills would surely be a suicide mission.")
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        } else if (event.key === 'Enter' && textInput3Field.value === 'Pester Urokodaki') {
            alert('Urokodaki did not appreciate that - he acts for a reason, and the onus is on you to understand it. Try again.')
            tanjiroHitPoints = tanjiroHitPoints - 2
            document.getElementById("heart4").remove()
            document.getElementById("heart5").remove()
        } else if (event.key === 'Enter' && textInput3Field.value === '') {
            alert('You need to make a choice. Be brave, young warrior.')
        } else if (event.key !== 'Enter') {
            return
        } else if (textInput3Field.value === '') {
            return
        } else if (event.key === 'Enter' && textInput3Field.value !== 'Train train train') {
            alert('That does not look like a valid option. Please try again')
        }

        if (tanjiroHitPoints === 0) {
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        }
    }
}

function loadChapter4() {
    let chapter4Div = document.createElement('div')
    chapter4Div.className = 'chapterDiv'
    chapter4Div.id = 'chapter4'
    chapter4Div.innerHTML = 
        "<h1>" + "第4話: 最終 選別" + "</h1>"
        + "<p id = 'statusCheckText'>Status Check: You currently have "  + tanjiroHitPoints + " hp.</p>"
        + "<p>" + "Urokodaki returns and, two years after Nezuko's transformation, Tanjiro leaves for the Final Selection, with the still sleeping Nezuko staying with Urokodaki. Before he leaves, he warns Tanjiro that older demons who have consumed more humans are stronger and may develop new powers, and gives him a fox mask with a spell to protect him. Tanjiro tells Urokodaki to say hello to Sabito and Makomo for him, startling Urokodaki, who wonders how he knows the names of those dead children."
        + "<p>" + "Upon reaching Mt. Fujikasane, Tanjiro sees wisteria blooming and a number of other teenagers. The group is greeted by a pair of girls, who tell them many demons are imprisoned on the mountain, unable to leave because the wisteria they hate blooms year-round at the base. From this point on there is no wisteria and only those who survive for 7 days will pass. Tanjiro enters the forest arena."
        + "<p>" + "Tanjiro is soon ambushed by two hungry demons but uses Water Style to kill them with a special 'Nichirin sword' Urokodaki gave him. He detects a rotten smell and sees another applicant being chased by a massive demon. The applicant is caught but Tanjiro saves him. The demon asks Tanjiro for the year and is enraged when he learns he has been trapped here so long it has passed into another era. He curses Urokodaki for capturing him. The applicant can't believe the demon is so old as there should only be young ones who have only killed 2 or 3 here, but this one has eaten at least 50 applicants."
        + "<p>" + "The demon says Tanjiro will be the 14th student of Urokodaki he's eaten, recognizing him by the style of mask. The demon recalls eating Sabito and Makomo and Tanjiro attacks him, enraged. Sabito and Makomo's ghosts sit on the slashed boulder, wondering if Tanjiro can defeat their killer. The applicant Tanjiro saved flees."
        + "<p>" + "What is your choice?"
        + "<ol id='choiceList'>"
        + "<li>" + "Remember your training, and fight with your heart and mind: " + "<font color = 'yellow'>" + "Fight as I have trained" + "</font>"
        + "<li>" + "Angered, chase the guy who fled and did not help: " + "<font color = 'yellow'>" + "Chase after fleer" + "</font>"
        + "<li>" + "Try to elude the demon by hiding and running where possible: " + "<font color = 'yellow'>" + "Be elusive" + "</font>"
        + "</ol>"
    gameUI.appendChild(chapter4Div)
    chapter4Div.scrollIntoView()

    createTextInput4(gameUI)

    document.getElementById('input3').disabled = true
}

function createTextInput4(parent) {
    let textDiv4 = document.createElement('div')
    textDiv4.className = 'input-group'

    let textInput4 = document.createElement('div')
    textInput4.className = 'input-group-prepend'

    let textInput4Label = document.createElement('span')
    textInput4Label.className = 'input-group-text'
    textInput4Label.innerText = 'Input'
    textInput4.appendChild(textInput4Label)
    textDiv4.appendChild(textInput4)

    let textInput4Field = document.createElement('input')
    textInput4Field.type = 'text'
    textInput4Field.className = 'form-control'
    textInput4Field.id = 'input4'
    textDiv4.appendChild(textInput4Field)

    parent.appendChild(textDiv4)

    textInput4Field.addEventListener('keydown', enterChapter5)

    function enterChapter5(event) {
        event.stopPropagation()
        if (event.key === 'Enter' && textInput4Field.value === 'Fight as I have trained' && gameOver === false) {
            alert("Nicely done. Tanjiro targets the demon's weak spot, his neck, but the demon thinks his neck is too strong to break as Sabito broke his sword trying to cut it. Tanjiro's strike however, severs the neck.")
            loadChapter5()
        } else if (event.key === 'Enter' && textInput4Field.value === 'Chase after fleer') {
            alert("You lost your calm in the heat of the moment and made a bad decision - your focus should always be on the demons. This is a battle against yourself and you lost.")
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        } else if (event.key === 'Enter' && textInput4Field.value === 'Be elusive') {
            alert("That works too, as long as it ensures your survival. But this demon is out for blood against Urokodaki's disciples, and he will not stop hunting you down. This is not a problem you can solve by elusion. Try again.")
            tanjiroHitPoints = tanjiroHitPoints - 2
            document.getElementById("heart6").remove()
            document.getElementById("heart7").remove()
        } else if (event.key === 'Enter' && textInput4Field.value === '') {
            alert('You need to make a choice. Be brave, young warrior.')
        } else if (event.key !== 'Enter') {
            return
        } else if (textInput4Field.value === '') {
            return
        } else if (event.key === 'Enter' && textInput4Field.value !== 'Fight as I have trained') {
            alert('That does not look like a valid option. Please try again')
        }

        if (tanjiroHitPoints === 0) {
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        }
    }
}

function loadChapter5() {
    let chapter5Div = document.createElement('div')
    chapter5Div.className = 'chapterDiv'
    chapter5Div.id = 'chapter5'
    chapter5Div.innerHTML = 
        "<h1>" + "第5話: 己の鋼" + "</h1>"
        + "<p id = 'statusCheckText'>Status Check: You currently have "  + tanjiroHitPoints + " hp.</p>"
        + "<p>" + "The demon's body dissolves and the souls of Urokodaki's students he killed depart to the afterlife. As the demon dies, he remembers when he was turned into a demon as a young boy and even after his transformation, had always been longing for a warm hand to hold, specifically that of his older brother's."
        + "<p>" + "Tanjiro continues to survive, asking the demons who attack him if they know how he can turn Nezuko back into a human, though none answer."
        + "<p>" + "At the end of the Final Selection, Tanjiro and three others return to the wisteria and the twins greet them as the only survivors. The twins tell them there are ten ranks in the Corps and the four are now Mizunoto, the lowest rank. New, stronger color-changing swords will be made for them after they pick the ore, though they will take time to complete. Each are assigned a Kasugai crow to help in communication and given new uniforms. One applicant with a scar across his face, Genya Shinazugawa, angrily demands the sword now but Tanjiro stops him from harming the twins by nearly breaking Genya's arm."
        + "<p>" + "Tanjiro returns to Urokodaki's and happily finds Nezuko awake after a year and a half long slumber. Urokodaki is relieved he's alive. He tells Tanjiro that Nezuko is likely recovering her strength by sleeping instead of eating humans. 15 days later, Tanjiro's new sword is delivered to him by Haganezuka, the swordsmith. It changes to black when he draws it, a rare color. A Kasugai crow flies in and presents Tanjiro his first assignment as a Demon Hunter."
        + "<p>" + "What is your choice?"
        + "<ol id='choiceList'>"
        + "<li>" + "Prepare for journey: " + "<font color = 'yellow'>" + "Make preparations" + "</font>"
        + "<li>" + "Go to the forest to try and find Sabito and Makomo: " + "<font color = 'yellow'>" + "Go back to the boulder" + "</font>"
        + "<li>" + "Leave Nezuko in Urokodaki's care for safety: " + "<font color = 'yellow'>" + "Leave Nezuko behind" + "</font>"
        + "</ol>"
    gameUI.appendChild(chapter5Div)
    chapter5Div.scrollIntoView()

    createTextInput5(gameUI)

    document.getElementById('input4').disabled = true
}

function createTextInput5(parent) {
    let textDiv5 = document.createElement('div')
    textDiv5.className = 'input-group'

    let textInput5 = document.createElement('div')
    textInput5.className = 'input-group-prepend'

    let textInput5Label = document.createElement('span')
    textInput5Label.className = 'input-group-text'
    textInput5Label.innerText = 'Input'
    textInput5.appendChild(textInput5Label)
    textDiv5.appendChild(textInput5)

    let textInput5Field = document.createElement('input')
    textInput5Field.type = 'text'
    textInput5Field.className = 'form-control'
    textInput5Field.id = 'input5'
    textDiv5.appendChild(textInput5Field)

    parent.appendChild(textDiv5)

    textInput5Field.addEventListener('keydown', enterChapter6)

    function enterChapter6(event) {
        event.stopPropagation()
        if (event.key === 'Enter' && textInput5Field.value === 'Make preparations' && gameOver === false) {
            alert('Nicely done. With Nezuko safely tucked into the special wooden box that Urokodaki made, you set off for a town to the northwest where young girls have been vanishing to kill the demon responsible.')
            loadChapter6()
        } else if (event.key === 'Enter' && textInput5Field.value === 'Leave Nezuko behind') {
            alert("Nezuko is the heart and soul of this conquest. She will never forgive you for leaving her behind.")
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        } else if (event.key === 'Enter' && textInput5Field.value === 'Go back to the boulder') {
            alert("It's touching that you're sentimental, but you should treasure the time you have to rest and prepare for the journey. Afterall, Sabito and Makomo saw you triumph in the Wisteria Forest - you have already brought them peace. Try again.")
            tanjiroHitPoints = tanjiroHitPoints - 2
            document.getElementById("heart8").remove()
            document.getElementById("heart9").remove()
        } else if (event.key === 'Enter' && textInput5Field.value === '') {
            alert('You need to make a choice. Be brave, young warrior.')
        } else if (event.key !== 'Enter') {
            return
        } else if (textInput5Field.value === '') {
            return
        } else if (event.key === 'Enter' && textInput5Field.value !== 'Make preparations') {
            alert('That does not look like a valid option. Please try again')
        }

        if (tanjiroHitPoints === 0) {
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        }
    }
}

function loadChapter6() {
    let chapter6Div = document.createElement('div')
    chapter6Div.className = 'chapterDiv'
    chapter6Div.id = 'chapter6'
    chapter6Div.innerHTML = 
        "<h1>" + "第6話: 鬼を連れた剣士" + "</h1>"
        + "<p id = 'statusCheckText'>Status Check: You currently have "  + tanjiroHitPoints + " hp.</p>"
        + "<p>" + "Placing Nezuko in a box he carries on his back, Tanjiro travels with her to the town where young girls are vanishing at night."
        + "<p>" + "There he meets Kazumi, whose fiancee Satoko vanished the previous night. Kazumi takes him to where his girlfriend was last seen and Tanjiro begins to track the demon's scent. Kazumi recalls how he was beaten by Satoko's parents, who did not believe Satoko had simply vanished and assumed he had done something to her. He realizes Tanjiro is a member of the Demon Slayer Corps and that's why he believed him."
        + "<p>" + "Night falls as Tanjiro continues to track the demon. A young girl is abducted from her bed by a demon who can take a liquid form to pass through floors, which Tanjiro notices. He can smell the demon and girl but can't see them, realizing they are traveling underground. He stabs into the ground and wounds the demon, letting him retrieve the girl."
        + "<p>" + "The demon comes above ground. It has morphed and become capable of 'Blood Demon Art' spells to move through solid ground. The demon breaks into three beings, and between that and their high rate of regeneration, Tanjiro finds himself overwhelmed. The wounded demons taunt the humans, telling Kazumi they already devoured Satoko."
        + "<p>" + "What is your choice?"
        + "<ol id='choiceList'>"
        + "<li>" + "Call for Nezuko: " + "<font color = 'yellow'>" + "Nezuko!" + "</font>"
        + "<li>" + "Protect Kazumi: " + "<font color = 'yellow'>" + "Protect Kazumi" + "</font>"
        + "<li>" + "Keep fighitng the demons: " + "<font color = 'yellow'>" + "Keep fighting" + "</font>"
        + "</ol>"
    gameUI.appendChild(chapter6Div)
    chapter6Div.scrollIntoView()

    createTextInput6(gameUI)

    document.getElementById('input5').disabled = true
}

function createTextInput6(parent) {
    let textDiv6 = document.createElement('div')
    textDiv6.className = 'input-group'

    let textInput6 = document.createElement('div')
    textInput6.className = 'input-group-prepend'

    let textInput6Label = document.createElement('span')
    textInput6Label.className = 'input-group-text'
    textInput6Label.innerText = 'Input'
    textInput6.appendChild(textInput6Label)
    textDiv6.appendChild(textInput6)

    let textInput6Field = document.createElement('input')
    textInput6Field.type = 'text'
    textInput6Field.className = 'form-control'
    textInput6Field.id = 'input6'
    textDiv6.appendChild(textInput6Field)

    parent.appendChild(textDiv6)

    textInput6Field.addEventListener('keydown', enterChapter7)

    function enterChapter7(event) {
        event.stopPropagation()
        if (event.key === 'Enter' && textInput6Field.value === 'Nezuko!' && gameOver === false) {
            alert('Nicely done. Nezuko comes out of her box to help, evening the odds with her fighting prowess.')
            loadChapter7()
        } else if (event.key === 'Enter' && textInput6Field.value === 'Keep fighting') {
            alert("The demons overwhelm you, get to Kazumi and kill him, and eventually defeat you as well.")
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        } else if (event.key === 'Enter' && textInput6Field.value === 'Protect Kazumi') {
            alert("You managed to keep Kazumi safe, well done! But you are still overwhelmed and need to defeat the demons. Try again.")
            tanjiroHitPoints = tanjiroHitPoints - 2
            document.getElementById("heart0").remove()
            document.getElementById("heart1").remove()
        } else if (event.key === 'Enter' && textInput6Field.value === '') {
            alert('You need to make a choice. Be brave, young warrior.')
        } else if (event.key !== 'Enter') {
            return
        } else if (textInput6Field.value === '') {
            return
        } else if (event.key === 'Enter' && textInput6Field.value !== 'Nezuko!') {
            alert('That does not look like a valid option. Please try again')
        }

        if (tanjiroHitPoints === 0) {
            gameOver = true
            gameUI.remove()
            gameOverTrue(mainBody)
        }
    }
}

function loadChapter7() {
    let chapter7Div = document.createElement('div')
    chapter7Div.className = 'chapterDiv'
    chapter7Div.id = 'chapter7'
    chapter7Div.innerHTML = 
        "<h1>" + "第7話: 鬼舞辻 無惨" + "</h1>"
        + "<p id = 'statusCheckText'>Status Check: You currently have "  + tanjiroHitPoints + " hp.</p>"
        + "<p>" + "Urokodaki tells Tanjiro there is only one demon still alive who has the special blood needed to turn a human into a demon, and thus was the one who attacked the Kamado household. He is also the only one who may know how to turn Nezuko back into a human. He is over a thousand years old and the progenitor of all demons: Kibutsuji Muzan."
        + "<p>" + "Tanjiro leaves Nezuko to protect Kazumi and the human girl from one of the three while he jumps inside their black hole to deal with the other two. Inside it is like a black swamp, but his Water Style shows its true power when underwater, letting him create a whirlpool that eviscerates the two. Nezuko physically beats back the remaining demon, who thinks she must have gotten a huge amount of blood from 'him' to be so powerful. However, her lack of experience makes her attacks easy to read and the demon begins to regain the advantage, when Tanjiro surfaces and disables him."
        + "<p>" + "Tanjiro orders the demon to tell him what he knows about Kibutsuji Muzan but the name terrifies the demon so much he attempts a suicidal attack rather than speak and is killed. Nezuko falls asleep and Tanjiro returns her to the box. Kazumi is in shock and shouts at Tanjiro when he tries to tell him to move on after his fiancée's death, though realizes after Tanjiro gives him Satoko's hairpin, smiling gently, that he's been through something similar and apologizes, promising to take care of the girl. Tanjiro leaves, vowing to defeat Kibutsuji for the suffering he has caused."
        + "<p>" + "A Kasugai crow lands on his shoulder and directs him to Asakusa, Tokyo for his next mission, but Tanjiro finds Tokyo's size and electricity overwhelming. While resting in a park he catches Kibutsuji's scent and chases it down, leaving Nezuko behind in his hurry. He locates Kibutsuji as he walks down a busy street and is about to draw his sword when Tanjiro realizes he's holding a girl who calls him 'daddy'. A woman walks up and asks what's going on and the girl in Kibutsuji's arms calls her 'mommy'. Tanjiro can smell the girl and woman are human - Kibutsuji is pretending to be one as well."
        + "<p>" + "To distract Tanjiro, Kibutsuji digs his fingernails into his palm to bloody them and casually slices the neck of a man passing by, turning him into a demon."
        + "<p>"
        + "<p>" + "TO  BE  CONTINUED 。。。"
    gameUI.appendChild(chapter7Div)
    chapter7Div.scrollIntoView()

    // createTextInput7(gameUI)

    let continueGameBtn = document.createElement('button')
    continueGameBtn.type = 'button'
    continueGameBtn.className = 'btn btn-outline-warning'
    continueGameBtn.innerText = 'つづく'
    gameUI.appendChild(continueGameBtn)

    continueGameBtn.addEventListener('click', continueGameBtnClick)

    document.getElementById('input6').disabled = true
}

function continueGameBtnClick(event) {
    event.stopPropagation()
    $(gameUI).hide('slow')

    toBeContinued(mainBody)
}

// TEMPLATES ----------------------------------------------

// function loadChapter3() {
    // let chapter3Div = document.createElement('div')
    // chapter3Div.className = 'chapterDiv'
    // chapter3Div.id = 'chapter3'
    // chapter3Div.innerHTML = 
    //     "<h1>" + "第3話: 錆兎と真菰" + "</h1>"
    //     + "<p id = 'statusCheckText'>Status Check: You currently have "  + tanjiroHitPoints + " hp.</p>"
    //     + "<p>" + ""
    //     + "<p>" + "What is your choice?"
    //     + "<ol id='choiceList'>"
    //     + "<li>" + ": " + "<font color = 'yellow'>" + "" + "</font>"
    //     + "<li>" + ": " + "<font color = 'yellow'>" + "" + "</font>"
    //     + "<li>" + ": " + "<font color = 'yellow'>" + "" + "</font>"
    //     + "</ol>"
    // gameUI.appendChild(chapter3Div)

    // createTextInput3(gameUI)
// }

// function createTextInput2(parent) {
//     let textDiv2 = document.createElement('div')
//     textDiv2.className = 'input-group'

//     let textInput2 = document.createElement('div')
//     textInput2.className = 'input-group-prepend'

//     let textInput2Label = document.createElement('span')
//     textInput2Label.className = 'input-group-text'
//     textInput2Label.innerText = 'Input'
//     textInput2.appendChild(textInput2Label)
//     textDiv2.appendChild(textInput2)

//     let textInput2Field = document.createElement('input')
//     textInput2Field.type = 'text'
//     textInput2Field.className = 'form-control'
    // textInput2Field.id = 'input2'
//     textDiv2.appendChild(textInput2Field)

//     parent.appendChild(textDiv2)

//     textInput1Field.addEventListener('keydown', enterChapter3)

//     function enterChapter3(event) {
//         event.stopPropagation()
//         if (event.key === 'Enter' && textInput2Field.value === '' && gameOver === false) {
//             alert('Nicely done. ')
//             loadChapter3()
//         } else if (event.key === 'Enter' && textInput2Field.value === '') {
//             alert("")
//             gameOver = true
//             gameUI.remove()
//             gameOverTrue(mainBody)
//         } else if (event.key === 'Enter' && textInput2Field.value === '') {
//             alert(". Try again.")
//             tanjiroHitPoints = tanjiroHitPoints - 2
//         } else if (event.key === 'Enter' && textInput2Field.value === '') {
//             alert('You need to make a choice. Be brave, young warrior.')
//         } else if (event.key !== 'Enter') {
//             return
//         } else if (textInput2Field.value === '') {
//             return
//         } else if (event.key === 'Enter' && textInput2Field.value !== '') {
//             alert('That does not look like a valid option. Please try again')
//         }

//         if (tanjiroHitPoints === 0) {
//             gameOver = true
//             gameUI.remove()
//             gameOverTrue(mainBody)
//         }
//     }
// }