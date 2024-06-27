function turnOnTheLight() {
    document.body.style.backgroundColor = "white";
    document.getElementById('bulbs').classList.remove('hidden');
    document.getElementById('bulbs').style.top = "20px"; // Position bulbs at the top
    document.getElementById('lightButton').classList.add('hidden');
    document.getElementById('decorateButton').classList.remove('hidden');
}

function decorate() {
    document.getElementById('happyBirthday').classList.remove('hidden');
    document.getElementById('decorateButton').classList.add('hidden');
    document.getElementById('musicButton').classList.remove('hidden');
}

function playMusic() {
  var music =
    document.getElementById('birthdayMusic').play();
    document.getElementById('musicButton').classList.add('hidden');
    document.getElementById('balloonsButton').classList.remove('hidden');
}

function flyBalloons() {
    const balloonContainer = document.getElementById('balloons');
    balloonContainer.classList.remove('hidden');
    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        balloonContainer.appendChild(balloon);
    }
    document.getElementById('balloonsButton').classList.add('hidden');
    document.getElementById('cakeButton').classList.remove('hidden');
}

function showCake() {
    document.getElementById('cake').classList.remove('hidden');
    document.getElementById('cakeButton').classList.add('hidden');
    document.getElementById('candleButton').classList.remove('hidden');
}

function burnCandle() {
    document.getElementById('candle').classList.remove('hidden');
    document.getElementById('candleButton').classList.add('hidden');
    document.getElementById('messageButton').classList.remove('hidden');
}

function showMessage() {
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('messageButton').classList.add('hidden');
  
let message =" HAPPY BIRTHDAY MY LOVE 💓 Today is as beautiful as any other day. Do you know..? today is extra special, so special to you that's why let's make it the best celebration ever and let me share a piece of joy with you. I prepared this as a birthday gift for you. Thanks for giving me a lot of love 💕 thanks for everything. I wish you all the best. May your life be peaceful, may all your wishes come true. I put my heart into this as a birthday present for you. God is with you. This year will be brighter, and I hope you'll discover happiness along the way. Enjoy every single moment that you live today, fill it with your brightest smile, and make it the best memory. Lastly, I'd like to wish you once again a very happy birthday 🎂🎂. I love you ❣️"

    let index = 0;
    let messageDiv = document.getElementById('message');
    messageDiv.innerHTML = "";
    let interval = setInterval(() => {
        if (index < message.length) {
            messageDiv.innerHTML += message[index++];
        } else {
            clearInterval(interval);
        }
    }, 100);
}