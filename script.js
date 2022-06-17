panelItems = [
    { key: 1, caption: 'Explore Teyvat', url: 'https://i.postimg.cc/gJL0N3bF/93082521-p0.jpg' },
    { key: 2, caption: 'Mondstadt', url: 'https://i.postimg.cc/ZY3RNPL6/93082521-p1.jpg' },
    { key: 3, caption: 'Liyue', url: 'https://i.postimg.cc/L6ps3qyw/93082521-p2.jpg' },
    { key: 4, caption: 'Apple Archipelago', url: 'https://i.postimg.cc/4yTXPM1V/93082521-p3.jpg' },
    { key: 5, caption: 'Inazuma', url: 'https://i.postimg.cc/tJtpM5rf/93082521-p4.jpg' },
];

function createPanels(caption, url, active) {
    const panelContainer = document.querySelector('.container');
    const panelDiv = document.createElement('div');
    panelDiv.classList.add('panel');
    active == true ? panelDiv.classList.add('active') : panelDiv.classList.remove('active');
    panelDiv.setAttribute('style', `background-image: url(${url});`);
    const panelCaption = document.createElement('h3');
    panelCaption.innerHTML = caption;
    panelDiv.appendChild(panelCaption);
    panelContainer.appendChild(panelDiv);
}

panelItems.forEach((panelItem, index) => {
    index == 0 ? createPanels(panelItem.caption, panelItem.url, true) : createPanels(panelItem.caption, panelItem.url, false);
});

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
};

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const container = document.querySelector('.container');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if(load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    container.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}