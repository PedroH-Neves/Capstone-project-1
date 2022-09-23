const menuBtn = document.querySelector('.menu-bars');

function openMenu() {
  document.querySelector('.mobile-menu').style.display = 'block';
}

menuBtn.addEventListener('click', openMenu);

const closeBtn = document.querySelector('.menu-x');

function closeMenu() {
  document.querySelector('.mobile-menu').style.display = 'none';
}

closeBtn.addEventListener('click', closeMenu);

const guests = [
  {
    image: './assets/guests/guest1.png',
    name: 'FRTT',
    info: 'Streamer for Team Liquid.',
    description: 'FRTT is a famous Valorant streamer on Twitch.',
    id: '1',
  },

  {
    image: './assets/guests/guest2.png',
    name: 'Takayuki Nakayama',
    info: 'Capcom',
    description: 'Takauyuki is know for being the director and designer for the famous Street Fighter.',
    id: '2',
  },

  {
    image: './assets/guests/guest3.png',
    name: 'Techzz',
    info: 'TFT streamer.',
    description: 'Techzz became famous doing TFT lives on Twitch.',
    id: '3',
  },

  {
    image: './assets/guests/guest4.png',
    name: 'Takashi Iizuka',
    info: 'Sega',
    description: 'Takashi is the creative director for the game series Sonic the Hedgehog.',
    id: '4',
  },

  {
    image: './assets/guests/guest5.png',
    name: 'Daiki',
    info: 'Proplayer for Team Liquid.',
    description: 'Daiki is a Valorant Team Liquid proplayer.',
    id: '5',
  },

  {
    image: './assets/guests/guest6.png',
    name: 'Yayah',
    info: 'Streamer on Twitch',
    description: 'Yayah is a famous streamer on Twitch and she is a judo professional.',
    id: '6',
  },
];

const guestSection = document.getElementById('guests-section');

guests.forEach((item) => {
  guestSection.innerHTML += ` 
  <div id="guest${item.id}" class="guests-cards">
  <img src="${item.image}" alt="guest photo" class="guest-img">
    <div class="guests-text">
      <h1 class="guest-name color-one">
       ${item.name}
      </h1>
      <h2 class="guest-info color-two">
        ${item.info}
      </h2>
      <hr class="guests-line">
      <p class="guest-desc">
       ${item.description}
      </p>
    </div>
</div>   
  `;
  // eslint-disable-next-line no-restricted-globals
  if (item.id > 2 && screen.width < 768) {
    document.getElementById(`guest${item.id}`).classList.add('more-guests');
  }
});

const moreGuests = document.querySelector('#more-btn');

const arrow = document.querySelector('.fa-chevron-dwon');

// eslint-disable-next-line no-unused-vars
const showGuests = () => {
  for (let i = 3; i < 7; i += 1) {
    document.getElementById(`guest${i}`).classList.remove('more-guests');
    if (i <= 6 && i > 2 && moreGuests.innerHTML === 'LESS<i class="fa-solid fa-chevron-down color-two" style="transform: rotate(-180deg)"></i>') {
      document.getElementById(`guest${i}`).classList.add('more-guests');
    }
  }
};

const changeMore = () => {
  if (moreGuests.innerHTML === 'MORE<i class="fa-solid fa-chevron-down color-two"></i>') {
    moreGuests.innerHTML = 'LESS<i class="fa-solid fa-chevron-down color-two" style="transform: rotate(-180deg)"></i>';
    arrow.style.transform = 'rotate(90deg)';
  } else {
    moreGuests.innerHTML = 'MORE<i class="fa-solid fa-chevron-down color-two"></i>';
  }
};

moreGuests.addEventListener('click', changeMore);