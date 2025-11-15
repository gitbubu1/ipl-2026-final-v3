var teams = [
    { team: 'CSK', primary: '#f9e400', secondary: '#0000ff' },
    { team: 'RCB', primary: '#d50000', secondary: '#000000' },
    { team: 'MI', primary: '#004ff9', secondary: '#ffd900' },
    { team: 'KKR', primary: '#4b0082', secondary: '#d4af37' },
    { team: 'SRH', primary: '#ff6600', secondary: '#000000' },
    { team: 'PBKS', primary: '#dc143c', secondary: '#c0c0c0' },
    { team: 'RR', primary: '#ea1aa7', secondary: '#0047ab' },
    { team: 'DC', primary: '#00008b', secondary: '#ff0000' },
    { team: 'GT', primary: '#001f3f', secondary: '#daa520' },
    { team: 'LSG', primary: '#00bcd4', secondary: '#f57c00' }
];

var predictBtn = document.querySelector('#predictBtn');
var winnerText = document.querySelector('#winner');
var main = document.querySelector('main');
var logo = document.querySelector('#logo');
var banner = document.querySelector('#banner');

var crowdSound = document.querySelector('#crowd');
var whistleSound = document.querySelector('#whistle');

/* Loading */
setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").style.display = "flex";
}, 1500);

/* Winner Prediction */
predictBtn.addEventListener('click', function () {

    var win = teams[Math.floor(Math.random() * teams.length)];

    winnerText.innerHTML = win.team;

    winnerText.classList.add("animate");
    setTimeout(() => winnerText.classList.remove("animate"), 250);

    winnerText.style.backgroundColor = win.secondary;
    winnerText.style.color = win.primary;

    main.style.backgroundImage = `url('./stadiums/${win.team}.jpg')`;

    logo.style.display = "block";
    logo.src = `./logos/${win.team}.png`;

    banner.style.display = "block";
    banner.src = `./banners/${win.team}.jpg`;  // empty for now

    crowdSound.play();
    whistleSound.play();

    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.5 }
    });
});
