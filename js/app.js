// Declare Global Header Features
const vnBG = document.querySelector('.visual-novel-bg');
const header = document.getElementById('header1');
const banner = document.getElementById('header2');

// Declare Global Body Features
const dungeonSection = document.getElementById('dungeonsSection');
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
const vnSection = document.getElementById('vnSection');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const textDiv = document.getElementById('textDiv');
const textBox = document.getElementById('vnTextBox');
const buttonsSection = document.getElementById('buttonsSection');

// Declare Global Footer Features
const creditsButton = document.getElementById('creditsButton');
const credits = document.getElementById('credits');
creditsButton.addEventListener('click', ()=> {
    dungeonSection.style.display = "none";
    vnSection.style.display = "none";
    textDiv.style.display = "none";
    buttonsSection.style.display = "none";
    creditsButton.style.display = "none";
    credits.style.display = "block";
});

// Declare Images 
let img1 = document.getElementById('img1');
// Dungeon Starting Screen
let img2 = document.getElementById('img2');
// Dungeon Tunnel Image
let img3 = document.getElementById('img3');
// Pixel Skeleton Frame 1
let img4 = document.getElementById('img4');
// Pixel Skeleton Frame 2
let img5 = document.getElementById('img5');
// Tombstone Game Over Image
let img6 = document.getElementById('img6');
// Escape Game Over Image
let vnBGimg = document.getElementById('img7');
// Visual Novel Background
let vnBGgood = document.getElementById('img22');
// Good Ending Background
let vnBGbad = document.getElementById('img23');
// Bad Ending Background
let vnBGneutral = document.getElementById('img29');
// Neutral Ending Background
let sprite01 = document.getElementById('img8');
// Default Looking Forward Sprite
let sprite02 = document.getElementById('img9');
// Squinting To The Left Sprite
let sprite03 = document.getElementById('img10');
// Squinting To The Right & Sweating Sprite
let sprite04 = document.getElementById('img11');
// Squinting Forward, Talking & Sweating Sprite
let sprite05 = document.getElementById('img12');
// Shrugging & Talking Sprite
let sprite06 = document.getElementById('img13');
// Staring Forward & Talking Sprite
let sprite07 = document.getElementById('img14');
// Staring To The Left Sprite
let sprite08 = document.getElementById('img15');
// Squinting Forward & Talking Sprite
let sprite09 = document.getElementById('img16');
// Looking At The Meter Sprite
let sprite10 = document.getElementById('img17');
// Default Looking Forward & Talking Sprite
let sprite11 = document.getElementById('img18');
// Closed Eyes & Sweating Sprite
let sprite12 = document.getElementById('img19');
// Squinting Forward Sprite
let sprite13 = document.getElementById('img20');
// Angry Talking Sprite
let sprite14 = document.getElementById('img21');
// Default Looking Left
let sprite15 = document.getElementById('img24');
// Shocked Sprite
let sprite16 = document.getElementById('img26');
// Shocked Sprite Looking Right
let ericSprite = document.getElementById('img25');
// Doodle Sprite of Myself
let finalScreenGood = document.getElementById('img27');
// Final Screen For Good Ending
let finalScreenGood2 = document.getElementById('img31');
// Final Screen For Good Ending Frame 2
let finalScreenGood3 = document.getElementById('img32');
// Final Screen For Good Ending Frame 3
let finalScreenBad = document.getElementById('img28');
// Final Screen For Bad Ending
let finalScreenNeutral = document.getElementById('img30');
// Final Screen For Neutral Ending

// Add Dungeon Audio Functions
let audio = new Audio('../media/Bio Unit - Pulse.MP3.mp3');
audio.volume = 0.2;
audio.setAttribute("loop", "");
const muteButton = document.getElementById('muteButton');
let mute = false;
muteButton.addEventListener('click', ()=> {
    if (mute == false) {
        audio.pause();
        audio.currentTime = 0;
        muteButton.style.background = "red";
        mute = true;
    } else {
        audio.play();
        muteButton.style.background = "black";
        mute = false;
    }
})

// Add VN Audio Functions
let audio2 = new Audio('../media/Lucien Kemper x Fachhochschule Dortmund - Fragile.mp3');
audio2.volume = 0.2;
audio2.setAttribute("loop", "");
const muteButton2 = document.getElementById('muteButton2');
let mute2 = false;
muteButton2.addEventListener('click', ()=> {
    if (mute2 == false) {
        audio2.pause();
        audio2.currentTime = 0;
        muteButton2.style.background = "teal";
        mute2 = true;
    } else {
        audio2.play();
        muteButton2.style.background = "#FFB5FA";
        mute2 = false;
    }
})

// Add VN Heart Meter Functions
let heartMeter = document.getElementById('heartMeter');
let meterValue = 3;
let meterOptions = [
    "Meter Empty.png",
    "Meter 1-6 Full.png",
    "Meter 2-6 Full.png",
    "Meter 3-6 Full.png",
    "Meter 4-6 Full.png",
    "Meter 5-6 Full.png",
    "Meter Full.png"
]
heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`

class Game {
    constructor() {
        this.startGame();
        this.encounterButtons = [
            {
                id: "attackButton",
                class: "skeleton-button",
                innerText: "attack"
            },
            {
                id: "fleeButton",
                class: "skeleton-button",
                innerText: "flee"
            },
            {
                id: "befriendButton",
                class: "skeleton-button",
                innerText: "befriend"
            }
        ]
    }

    startGame() {
        // Generate Canvas IMG
        ctx1.beginPath();
        ctx1.drawImage(img1, 150, 10);
        ctx1.closePath();

        // Generate Start Button
        buttonsSection.innerHTML = `<button class="start-game-button" id="startGameButton">Start Game</button>`

        // Start Button Functionality
        let button = document.getElementById('startGameButton');
        button.addEventListener('click', ()=> {
            button.style.display="none";
            ctx1.beginPath();
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx1.closePath();
            this.dungeonScreen();
        });
    }

    dungeonScreen() {
        // Generate Canvas IMG
        ctx1.beginPath();
        ctx1.drawImage(img2, 170, 10);
        ctx1.closePath();

        // Play Dungeon Music
        audio.play();

        // Create Continue Button
        buttonsSection.innerHTML = `<button class="continue-button" id="continueButton">Continue</button>`

        // Create Narrative Text
        let narrative = [
            "You find yourself surrounded by shadow, armed with only a torch and dagger",
            "Your flickering light reveals only small stretches of the ancient dungeon's icy stonework",
            "A creeping chill moves up your spine as a strange clicking sound emanates from the darkness",
            "You sense murderous intent and turn about just as a skeletal figure leaps from the shadows!"
        ];

        // Insert Text Into HMTL
        textDiv.innerHTML = `<p class="narrative-text" id="narrativeText">${narrative[0]}</p>`

        // Use Continue Button To Cycle Text
        let continueButton = document.getElementById('continueButton');
        let narrativeText = document.getElementById('narrativeText');
        let i = 0;
        continueButton.addEventListener('click', ()=> {
            if (i < 3) {
                i++;
                narrativeText.innerText = narrative[i];
            } else {
                narrativeText.innerText = ``;
                ctx1.beginPath();
                ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
                ctx1.closePath();
                continueButton.style.display = "none";
                this.skeletonScreen();
            }
        })
    }

    skeletonScreen() {
        // Create Animated Skeleton Sprite
        let frame = 1;
        function animateSkeleton() {
            if (frame == 1) {
                ctx1.beginPath();
                ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
                ctx1.drawImage(img3, 160, -30);
                ctx1.closePath();
                frame = 2
            } else {
                ctx1.beginPath();
                ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
                ctx1.drawImage(img4, 160, -30);
                ctx1.closePath();
                frame = 1
            }  
        }
        let animationInterval = setInterval(animateSkeleton, 500);

        // Create Text
        textDiv.innerHTML = `<p class="combat-text" id="combatText">Your foe stands before you... menacingly! What shall you do?</p>`
        let combatText = document.getElementById('combatText');

        // Create Buttons
        this.encounterButtons.forEach((el)=> {
            let button = document.createElement("button")
            button.id = el.id;
            button.classList.add(el.class);
            button.innerText = el.innerText;
            buttonsSection.appendChild(button);
        })
        let attackButton = document.getElementById('attackButton');
        let fleeButton = document.getElementById('fleeButton');
        let befriendButton = document.getElementById('befriendButton');
        
        // Establish Attack Button Functionality
        attackButton.addEventListener('click', ()=> {
            clearInterval(animationInterval);
            // console.log("clicked")
            ctx1.beginPath();
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx1.closePath();
            combatText.style.display = "none";
            attackButton.style.display = "none";
            fleeButton.style.display = "none";
            befriendButton.style.display = "none";
            this.gameOverOne();
        })

        // Establish Flee Button Functionality
        fleeButton.addEventListener('click', ()=> {
            clearInterval(animationInterval);
            ctx1.beginPath();
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx1.closePath();
            combatText.style.display = "none";
            attackButton.style.display = "none";
            fleeButton.style.display = "none";
            befriendButton.style.display = "none";
            this.gameOverTwo();
        })

        // Establish Befriend Button Functionality
        befriendButton.addEventListener('click', ()=> {
            clearInterval(animationInterval);
            ctx1.beginPath();
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx1.closePath();
            combatText.style.display = "none";
            attackButton.style.display = "none";
            fleeButton.style.display = "none";
            befriendButton.style.display = "none";
            audio.pause();
            this.visualNovelStart();
        })
    }

    gameOverOne() {
        // Create Game Over Sprite
        ctx1.beginPath();
        ctx1.drawImage(img5, 150, 10);
        ctx1.closePath();

        // Create Continue Button
        buttonsSection.innerHTML = `
            <button class="continue-button" id="continueButton">Continue</button>
            <button class="restart-button" id="restartButton">Restart</button>
        `

        // Create Narrative Text
        let narrative = [
            "You swing your dagger with all your might at the fiendish foe",
            "Only to discover that small blades do little against hardened bone",
            "And thus you die an embarrassing and senseless death",
            "GAME OVER"
        ];

        // Insert Text Into HMTL
        textDiv.innerHTML = `<p class="narrative-text" id="narrativeText">${narrative[0]}</p>`

        // Use Continue Button To Cycle Text
        let continueButton = document.getElementById('continueButton');
        let restartButton = document.getElementById('restartButton');
        restartButton.style.display = "none";
        let narrativeText = document.getElementById('narrativeText');
        let i = 0;
        continueButton.addEventListener('click', ()=> {
            if (i < 2) {
                i++;
                narrativeText.innerText = narrative[i];
            } else {
                i++;
                narrativeText.innerText = narrative[i];
                continueButton.style.display = "none";
                restartButton.style.display = "inline";
            }
        })

        // Use Restart Button To Replay Game
        restartButton.addEventListener('click', ()=> {
            ctx1.beginPath();
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx1.closePath();
            narrativeText.innerText = "";
            audio.pause();
            audio.currentTime = 0;
            this.startGame();
        })
    }

    gameOverTwo() {
        // Create Game Over Sprite
        ctx1.beginPath();
        ctx1.drawImage(img6, 150, 10);
        ctx1.closePath();

        // Create Continue Button
        buttonsSection.innerHTML = `
            <button class="continue-button" id="continueButton">Continue</button>
            <button class="restart-button" id="restartButton">Restart</button>
        `

        // Create Narrative Text
        let narrative = [
            "You are overcome with a deep sense of unrelenting existential dread",
            "Realizing that you too are a skeleton wrapped in flesh and organs",
            "Refusing to let this be your ultimate fate, you flee the dungeon",
            "Clearly, the adventurer's life is not for you",
            "GAME OVER"
        ];

        // Insert Text Into HMTL
        textDiv.innerHTML = `<p class="narrative-text" id="narrativeText">${narrative[0]}</p>`

        // Use Continue Button To Cycle Text
        let continueButton = document.getElementById('continueButton');
        let restartButton = document.getElementById('restartButton');
        restartButton.style.display = "none";
        let narrativeText = document.getElementById('narrativeText');
        let i = 0;
        continueButton.addEventListener('click', ()=> {
            if (i < 3) {
                i++;
                narrativeText.innerText = narrative[i];
            } else {
                i++;
                narrativeText.innerText = narrative[i];
                continueButton.style.display = "none";
                restartButton.style.display = "inline";
            }
        })

        // Use Restart Button To Replay Game
        restartButton.addEventListener('click', ()=> {
            ctx1.beginPath();
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx1.closePath();
            narrativeText.innerText = "";
            audio.pause();
            audio.currentTime = 0;
            this.startGame();
        })
    }

    visualNovelStart() {
        // Switch canvases
        vnBG.style.background = "#FFB5FA";
        header.style.display = "none";
        banner.style.display = "block";
        canvas1.style.display = "none";
        canvas2.style.display = "block";
        muteButton.style.display = "none";
        muteButton2.style.display = "inline";
        creditsButton.style.background = "rgba(255, 113, 240)";
        creditsButton.style.border = "2px solid white";
        creditsButton.style.borderRadius = "8px";
        creditsButton.style.fontFamily = "cursive";

        // Play VN Music
        audio2.play();

        // Draw New Canvas Background
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.closePath();

        // Reveal Text Box
        textBox.style.display = "block";

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
            <button class="option-button" id="c1o1">Yeah, a bit...</button>
            <button class="option-button" id="c1o2">Cringe culture is dead.</button>
        `
        let continueButton = document.getElementById('vnContinueButton');
        let c1o1 = document.getElementById('c1o1');
        c1o1.style.display = "none";
        let c1o2 = document.getElementById('c1o2');
        c1o2.style.display = "none";

        // Create Narrative Text
        let narrative = [
            "...",
            "...",
            "...",
            "... Seriously?",
            "So this is kind of cringe, huh...?"
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;
        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(sprite01, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite02, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite03, 160, 0);
                ctx2.closePath();
            } else {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite04, 160, 0);
                ctx2.closePath();
                continueButton.style.display = "none";
                c1o1.style.display = "inline";
                c1o2.style.display = "inline";
            }
        })

        // Declare And Set Functions For Options
        c1o1.addEventListener('click', ()=> {
            // console.log('clicked');
            c1o1.style.display = "none";
            c1o2.style.display = "none";
            this.c2b1();
        });
        c1o2.addEventListener('click', ()=> {
            c1o1.style.display = "none";
            c1o2.style.display = "none";
            this.c2b2();
        });
    }

    // CONVERSATION 2 BRANCHES
    c2b1() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.drawImage(sprite05, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
            <button class="option-button" id="c2o1">Why the rush?</button>
            <button class="option-button" id="c2o2">I'll try.</button>
        `
        let continueButton = document.getElementById('vnContinueButton');
        let c2o1 = document.getElementById('c2o1');
        c2o1.style.display = "none";
        let c2o2 = document.getElementById('c2o2');
        c2o2.style.display = "none";

        // Create Narrative Text
        let narrative = [
            "Glad you agree.",
            "That makes this a bit less awkward.",
            "Still easily the dumbest thing I've ever had to do.",
            "So, what, is there some kind of objective for this?",
            "Like, max out my friendship points?",
            "Oh, hey, speak of the devil.",
            "Fantastic.",
            "What a great idea for a game.",
            "Can we just... get this over with quickly...?"
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite07, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else if (i == 3) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite08, 160, 0);
                ctx2.closePath();
            } else if (i == 4) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite09, 160, 0);
                ctx2.closePath();
                heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
                heartMeter.style.display = "block";
            } else if (i == 5) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite02, 160, 0);
                ctx2.closePath();
            } else if (i == 6) {
                i++;
                narrativeText.innerText = narrative[i];
            } else {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
                continueButton.style.display = "none";
                c2o1.style.display = "inline";
                c2o2.style.display = "inline";
            }
        })

        // Declare And Set Functions For Options
        c2o1.addEventListener('click', ()=> {
            c2o1.style.display = "none";
            c2o2.style.display = "none";
            meterValue--;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c3b1();
        })
        c2o2.addEventListener('click', ()=> {
            c2o1.style.display = "none";
            c2o2.style.display = "none";
            meterValue++;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c3b2();
        })
    }

    c2b2() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.drawImage(sprite06, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
            <button class="option-button" id="c2o1">Why the rush?</button>
            <button class="option-button" id="c2o2">I'll try.</button>
        `
        let continueButton = document.getElementById('vnContinueButton');
        let c2o1 = document.getElementById('c2o1');
        c2o1.style.display = "none";
        let c2o2 = document.getElementById('c2o2');
        c2o2.style.display = "none";

        // Create Narrative Text
        let narrative = [
            "Oh shut up",
            "I've been dead for three hundred years.",
            "I have no idea what current trends are",
            "So, what, is there some kind of objective for this?",
            "Like, max out my friendship points?",
            "Oh, hey, speak of the devil.",
            "Fantastic.",
            "What a great idea for a game.",
            "Can we just... get this over with quickly...?"
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite07, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else if (i == 3) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite08, 160, 0);
                ctx2.closePath();
            } else if (i == 4) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite09, 160, 0);
                ctx2.closePath();
                heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
                heartMeter.style.display = "block";
            } else if (i == 5) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite02, 160, 0);
                ctx2.closePath();
            } else if (i == 6) {
                i++;
                narrativeText.innerText = narrative[i];
            } else {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
                continueButton.style.display = "none";
                c2o1.style.display = "inline";
                c2o2.style.display = "inline";
            }
        })

        // Declare And Set Functions For Options
        c2o1.addEventListener('click', ()=> {
            c2o1.style.display = "none";
            c2o2.style.display = "none";
            meterValue--;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c3b1();
        })
        c2o2.addEventListener('click', ()=> {
            c2o1.style.display = "none";
            c2o2.style.display = "none";
            meterValue++;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c3b2();
        })
    }

    // CONVERSATION 3 BRANCHES
    c3b1() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.drawImage(sprite08, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
            <button class="option-button" id="c3o1">*Apologize Profusely*</button>
            <button class="option-button" id="c3o2">*Tell A Skeleton-Themed Joke*</button>
        `
        let continueButton = document.getElementById('vnContinueButton');
        let c3o1 = document.getElementById('c3o1');
        c3o1.style.display = "none";
        let c3o2 = document.getElementById('c3o2');
        c3o2.style.display = "none";

        // Create Narrative Text
        let narrative = [
            "Because this is mortifying.",
            "See how that meter just went down?",
            "That's because I didn't like what you said.",
            "You're not very good at this, are you?",
            "Aren't you supposed to be getting on my good side or something?"
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite09, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite08, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite05, 160, 0);
                ctx2.closePath();
            } else {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
                continueButton.style.display = "none";
                c3o1.style.display = "inline";
                c3o2.style.display = "inline";
            }
        })

        // Declare And Set Functions For Options
        c3o1.addEventListener('click', ()=> {
            c3o1.style.display = "none";
            c3o2.style.display = "none";
            meterValue++;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c4b1();
        })
        c3o2.addEventListener('click', ()=> {
            c3o1.style.display = "none";
            c3o2.style.display = "none";
            meterValue--;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c4b2();
        })
    }

    c3b2() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.drawImage(sprite10, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
            <button class="option-button" id="c3o3">*Shrug*</button>
            <button class="option-button" id="c3o2">*Tell A Skeleton-Themed Joke*</button>
        `
        let continueButton = document.getElementById('vnContinueButton');
        let c3o3 = document.getElementById('c3o3');
        c3o3.style.display = "none";
        let c3o2 = document.getElementById('c3o2');
        c3o2.style.display = "none";

        // Create Narrative Text
        let narrative = [
            "I appreciate it, thanks.",
            "Oh, hey, the meter went up.",
            "Guess that's how this works.",
            "You're off to a decent start.",
            "So the plan is to get on my good side or something?"
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite09, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite02, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite05, 160, 0);
                ctx2.closePath();
            } else {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
                continueButton.style.display = "none";
                c3o3.style.display = "inline";
                c3o2.style.display = "inline";
            }
        })

        // Declare And Set Functions For Options
        c3o3.addEventListener('click', ()=> {
            c3o3.style.display = "none";
            c3o2.style.display = "none";
            meterValue++;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c4b3();
        })
        c3o2.addEventListener('click', ()=> {
            c3o3.style.display = "none";
            c3o2.style.display = "none";
            meterValue--;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c4b2();
        })
    }

    // CONVERSATION 4 BRANCHES
    c4b1() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.drawImage(sprite11, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
            <button class="option-button" id="c4o1">What's death like?</button>
            <button class="option-button" id="c4o2">Ya like jazz?</button>
        `
        let continueButton = document.getElementById('vnContinueButton');
        let c4o1 = document.getElementById('c4o1');
        c4o1.style.display = "none";
        let c4o2 = document.getElementById('c4o2');
        c4o2.style.display = "none";

        // Create Narrative Text
        let narrative = [
            "Kinda overdoing it a bit there.",
            "But I guess you're forgiven?",
            "At least enough to make the meter go back up.",
            "This is still kind of awkward now...",
            "Could you... I dunno... start a conversation or something? I'm bad at initiating small talk."
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite03, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite09, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite02, 160, 0);
                ctx2.closePath();
            } else {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
                continueButton.style.display = "none";
                c4o1.style.display = "inline";
                c4o2.style.display = "inline";
            }
        })

        // Declare And Set Functions For Options
        c4o1.addEventListener('click', ()=> {
            c4o1.style.display = "none";
            c4o2.style.display = "none";
            meterValue--;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c5b1();
        })
        c4o2.addEventListener('click', ()=> {
            c4o1.style.display = "none";
            c4o2.style.display = "none";
            meterValue++;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c5b2();
        })
    }

    c4b2() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.drawImage(sprite12, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
            <button class="option-button" id="c4o3">It's kinda funny.</button>
            <button class="option-button" id="c4o4">No sir. Sorry sir.</button>
        `
        let continueButton = document.getElementById('vnContinueButton');
        let c4o3 = document.getElementById('c4o3');
        c4o3.style.display = "none";
        let c4o4 = document.getElementById('c4o4');
        c4o4.style.display = "none";

        // Create Narrative Text
        let narrative = [
            "...",
            "Really.",
            "Just going to make a skeleton joke right to my face?",
            "You think this is funny???"
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite08, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite13, 160, 0);
                ctx2.closePath();
                continueButton.style.display = "none";
                c4o3.style.display = "inline";
                c4o4.style.display = "inline";
            }
        })

        // Declare And Set Functions For Options
        c4o3.addEventListener('click', ()=> {
            c4o3.style.display = "none";
            c4o4.style.display = "none";
            meterValue++;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c5b3();
        })
        c4o4.addEventListener('click', ()=> {
            c4o3.style.display = "none";
            c4o4.style.display = "none";
            meterValue--;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c5b4();
        })
    }

    c4b3() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.drawImage(sprite11, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
            <button class="option-button" id="c4o1">What's death like?</button>
            <button class="option-button" id="c4o2">Ya like jazz?</button>
        `
        let continueButton = document.getElementById('vnContinueButton');
        let c4o1 = document.getElementById('c4o1');
        c4o1.style.display = "none";
        let c4o2 = document.getElementById('c4o2');
        c4o2.style.display = "none";

        // Create Narrative Text
        let narrative = [
            "... Looks like you're just as confused as I am.",
            "Honestly, that's kind of a relief.",
            "At least I'm not alone in being totally lost.",
            "Might as well make the most of it.",
            "So, got anything you want to talk about?"
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite03, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite03, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite10, 160, 0);
                ctx2.closePath();
            } else {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
                continueButton.style.display = "none";
                c4o1.style.display = "inline";
                c4o2.style.display = "inline";
            }
        })

        // Declare And Set Functions For Options
        c4o1.addEventListener('click', ()=> {
            c4o1.style.display = "none";
            c4o2.style.display = "none";
            meterValue--;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c5b1();
        })
        c4o2.addEventListener('click', ()=> {
            c4o1.style.display = "none";
            c4o2.style.display = "none";
            meterValue++;
            heartMeter.innerHTML = `<img src="media/${meterOptions[meterValue]}" alt="Heart Meter">`
            this.c5b2();
        })
    }

    // CONVERSATION 5 BRANCHES
    c5b1() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.drawImage(sprite06, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
        `
        let continueButton = document.getElementById('vnContinueButton');

        // Create Narrative Text
        let narrative = [
            "Oh, it's lovely!",
            "Can't eat, can't sleep, can't style my hair.",
            "Clearly I'm having an absolute blast.",
            "Seriouly, what kind of question is that?!",
            "Were you expecting something glamorous???",
            "You gotta work on your socializing skills.",
            "You're worse at small talk than I am."
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite02, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite10, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite13, 160, 0);
                ctx2.closePath();
            } else if (i == 3) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite03, 160, 0);
                ctx2.closePath();
            } else if (i == 4) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else if (i == 5) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite05, 160, 0);
                ctx2.closePath();
            } else {
                continueButton.style.display = "none";
                if (meterValue == 6) {
                    this.goodEnding();
                } else if (meterValue == 0) {
                    this.badEnding();
                } else {
                    this.neutralEnding();
                }
            }
        })
    }

    c5b2() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.drawImage(sprite01, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
        `
        let continueButton = document.getElementById('vnContinueButton');

        // Create Narrative Text
        let narrative = [
            "Oh, uh...",
            "I mean, sure.",
            "Mostly just chill, ambiant piano jazz stuff.",
            "Like... lounge music, I guess?",
            "Herbert is probably seething right about now.",
            "But yeah, it's good for helping me focus and relax",
            "...."
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite10, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite14, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite05, 160, 0);
                ctx2.closePath();
            } else if (i == 3) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite03, 160, 0);
                ctx2.closePath();
            } else if (i == 4) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite01, 160, 0);
                ctx2.closePath();
            } else if (i == 5) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite02, 160, 0);
                ctx2.closePath();
            } else {
                continueButton.style.display = "none";
                if (meterValue == 6) {
                    this.goodEnding();
                } else if (meterValue == 0) {
                    this.badEnding();
                } else {
                    this.neutralEnding();
                }
            }
        })
    }

    c5b3() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.drawImage(sprite12, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
        `
        let continueButton = document.getElementById('vnContinueButton');

        // Create Narrative Text
        let narrative = [
            "...",
            "Huh.",
            "Yeah, I guess it is kind of funny.",
            "I mean, this whole thing is absurdly stupid.",
            "What kind of idiot would devote time to a half-baked parody of a dating sim game...",
            "...for a class project???",
            "Hilarious."
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite14, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite10, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite05, 160, 0);
                ctx2.closePath();
            } else if (i == 3) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite02, 160, 0);
                ctx2.closePath();
            } else if (i == 4) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite13, 160, 0);
                ctx2.closePath();
            } else if (i == 5) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else {
                continueButton.style.display = "none";
                if (meterValue == 6) {
                    this.goodEnding();
                } else if (meterValue == 0) {
                    this.badEnding();
                } else {
                    this.neutralEnding();
                }
            }
        })
    }

    c5b4() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGimg, 0, 0);
        ctx2.drawImage(sprite12, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
        `
        let continueButton = document.getElementById('vnContinueButton');

        // Create Narrative Text
        let narrative = [
            "Okay, now I know you're just screwing with me.",
            "This is all some big goof for you, huh???",
            "You're getting on my nerves.",
            "You better hope you made some better decisions earlier in our conversation...",
            "... or this is gonna spell a bad ending for you."
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite08, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite13, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite02, 160, 0);
                ctx2.closePath();
            } else if (i == 3) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGimg, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else {
                continueButton.style.display = "none";
                if (meterValue == 6) {
                    this.goodEnding();
                } else if (meterValue == 0) {
                    this.badEnding();
                } else {
                    this.neutralEnding();
                }
            }
        })
    }

    // ENDINGS
    goodEnding() {
        // Establish starting frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGgood, 0, 0);
        ctx2.drawImage(sprite15, 160, 0);
        ctx2.closePath();

        // Create Continue & Option Buttons
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
        `
        let continueButton = document.getElementById('vnContinueButton');

        // Create Narrative Text
        let narrative = [
            "Woah!",
            "That is... painfully pink.",
            "I guess this means you got the good ending?",
            "That's kind of abrupt...",
            "You'd think it'd be longer...",
            "I only had three weeks, and this is my first attempt at something like this.",
            "...",
            "Uh... Alright, congrats I guess?"
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGgood, 0, 0);
                ctx2.drawImage(sprite03, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGgood, 0, 0);
                ctx2.drawImage(sprite04, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGgood, 0, 0);
                ctx2.drawImage(sprite03, 160, 0);
                ctx2.closePath();
            } else if (i == 3) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGgood, 0, 0);
                ctx2.drawImage(sprite05, 160, 0);
                ctx2.closePath();
            } else if (i == 4) {
                i++;
                narrativeText.innerText = narrative[i];
                textBox.style.backgroundColor = "rgba(129, 129, 129, 0.7)"
                ctx2.beginPath();
                ctx2.drawImage(vnBGgood, 0, 0);
                ctx2.drawImage(sprite16, 160, 0);
                ctx2.drawImage(ericSprite, 350, 0);
                ctx2.closePath();
            } else if (i == 5) {
                i++;
                narrativeText.innerText = narrative[i];
                textBox.style.backgroundColor = "rgba(255, 113, 240, 0.7)"
                ctx2.beginPath();
                ctx2.drawImage(vnBGgood, 0, 0);
                ctx2.drawImage(sprite03, 160, 0);
                ctx2.closePath();
            } else if (i == 6) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGgood, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else {
                continueButton.style.display = "none";
                textBox.style.display = "none";
                heartMeter.style.display = "none";
                this.goodFinalScreen();
            }
        })
    }

    goodFinalScreen() {
        // Create Animated Skeleton Sprite
        let frame = 1;
        function animateEnding() {
            if (frame == 1) {
                ctx2.beginPath();
                ctx2.drawImage(finalScreenGood, 0, 0);
                ctx2.closePath();
                frame = 2;
            } else if (frame == 2) {
                ctx2.beginPath();
                ctx2.drawImage(finalScreenGood2, 0, 0);
                ctx2.closePath();
                frame = 3;
            } else {
                ctx2.beginPath();
                ctx2.drawImage(finalScreenGood3, 0, 0);
                ctx2.closePath();
                frame = 1;
            }
        }
        let endingInterval = setInterval(animateEnding, 333);

        // Generate Restart Button
        buttonsSection.innerHTML = `
            <button class="vn-restart-button" id="vnRestartButton">Restart</button>
        `
        let restartButton = document.getElementById('vnRestartButton');

        // Define Restart Button Functionality
        restartButton.addEventListener('click', ()=> {
            clearInterval(endingInterval);
            ctx2.beginPath();
            ctx2.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx2.closePath();
            audio2.pause();
            audio2.currentTime = 0;
            meterValue = 3;
            this.visualNovelStart();
        })
    }

    neutralEnding() {
        //Establish Starting Frame
        ctx2.beginPath();
        ctx2.drawImage(vnBGneutral, 0, 0);
        ctx2.drawImage(sprite07, 160, 0);
        ctx2.closePath();

        // Create Continue Button
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
            <button class="vn-restart-button" id="vnRestartButton">Restart</button>
        `
        let continueButton = document.getElementById('vnContinueButton');
        let restartButton = document.getElementById('vnRestartButton');
        restartButton.style.display = "none";

        // Create Narrative Text
        let narrative = [
            "Meh.",
            "Feeling pretty neutral about this.",
            "Like... Not the worst conversation I've ever had.",
            "But not great either.",
            "You get a solid C+ from me for effort.",
            "At least you figured out how to click the buttons.",
            "But I expect you to do better next time.",
            "Thanks anyway."
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGneutral, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGneutral, 0, 0);
                ctx2.drawImage(sprite09, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGneutral, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else if (i == 3) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGneutral, 0, 0);
                ctx2.drawImage(sprite05, 160, 0);
                ctx2.closePath();
            } else if (i == 4) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGneutral, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else if (i == 5) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGneutral, 0, 0);
                ctx2.drawImage(sprite12, 160, 0);
                ctx2.closePath();
            } else if (i == 6) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGneutral, 0, 0);
                ctx2.drawImage(sprite07, 160, 0);
                ctx2.closePath();
            } else {
                continueButton.style.display = "none";
                textBox.style.display = "none";
                heartMeter.style.display = "none";
                restartButton.style.display = "inline";
                ctx2.beginPath();
                ctx2.drawImage(finalScreenNeutral, 0, 0);
                ctx2.closePath();
            }
        })

        restartButton.addEventListener('click', ()=> {
            audio2.pause();
            audio2.currentTime = 0;
            meterValue = 3;
            this.visualNovelStart();
        })
    }

    badEnding() {
        // Establish Starting Frame
        audio2.pause();
        audio2.currentTime = 0;
        ctx2.beginPath();
        ctx2.drawImage(vnBGbad, 0, 0);
        ctx2.drawImage(sprite12, 160, 0);
        ctx2.closePath();

        // Create Continue Button
        buttonsSection.innerHTML = `
            <button class="vn-continue-button" id="vnContinueButton">Continue</button>
            <button class="vn-restart-button" id="vnRestartButton">Restart</button>
        `
        let continueButton = document.getElementById('vnContinueButton');
        let restartButton = document.getElementById('vnRestartButton');
        restartButton.style.display = "none";

        // Create Narrative Text
        let narrative = [
            "...",
            "Terrible.",
            "Just... Absolutely awful.",
            "You did that on purpose, didn't you?",
            "Just wanted to see the bad ending?",
            "I don't blame you.",
            "But this was a complete waste of my time.",
            "Ugh."
        ];

        // Insert Text Into HMTL
        textBox.innerHTML = `<p class="vn-text" id="vnText">${narrative[0]}</p>`;

        // Use Continue Button To Cycle Text And Images
        let narrativeText = document.getElementById('vnText');
        let i = 0;

        continueButton.addEventListener('click', ()=> {
            if (i == 0) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGbad, 0, 0);
                ctx2.drawImage(sprite08, 160, 0);
                ctx2.closePath();
            } else if (i == 1) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGbad, 0, 0);
                ctx2.drawImage(sprite11, 160, 0);
                ctx2.closePath();
            } else if (i == 2) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGbad, 0, 0);
                ctx2.drawImage(sprite06, 160, 0);
                ctx2.closePath();
            } else if (i == 3) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGbad, 0, 0);
                ctx2.drawImage(sprite07, 160, 0);
                ctx2.closePath();
            } else if (i == 4) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGbad, 0, 0);
                ctx2.drawImage(sprite05, 160, 0);
                ctx2.closePath();
            } else if (i == 5) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGbad, 0, 0);
                ctx2.drawImage(sprite12, 160, 0);
                ctx2.closePath();
            } else if (i == 6) {
                i++;
                narrativeText.innerText = narrative[i];
                ctx2.beginPath();
                ctx2.drawImage(vnBGbad, 0, 0);
                ctx2.drawImage(sprite02, 160, 0);
                ctx2.closePath();
            } else {
                continueButton.style.display = "none";
                textBox.style.display = "none";
                heartMeter.style.display = "none";
                restartButton.style.display = "inline";
                ctx2.beginPath();
                ctx2.drawImage(finalScreenBad, 0, 0);
                ctx2.closePath();
            }
        })

        restartButton.addEventListener('click', ()=> {
            meterValue = 3;
            this.visualNovelStart();
        })
    }
}

let action = new Game;