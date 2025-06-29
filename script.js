const startBtn = document.getElementById('start-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const menuScreen = document.getElementById('menu-screen');
const contentScreen = document.getElementById('content-screen');
const contentDiv = document.getElementById('content');
const backBtn = document.getElementById('back-btn');

const scrollStyle = document.createElement('style');
scrollStyle.textContent = `
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }
  
  .content-screen:hover::-webkit-scrollbar-thumb,
  .content-screen:active::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  .content-screen {
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
  }
`;
document.head.appendChild(scrollStyle);

startBtn.onclick = () => {
  welcomeScreen.classList.remove('active');
  setTimeout(() => menuScreen.classList.add('active'), 600);
};

document.querySelectorAll('#menu-screen .options button').forEach(btn => {
  btn.onclick = () => {
    const section = btn.getAttribute('data-section');
    menuScreen.classList.remove('active');
    loadContent(section);
    setTimeout(() => contentScreen.classList.add('active'), 600);
  };
});

backBtn.onclick = () => {
  contentScreen.classList.remove('active');
  setTimeout(() => menuScreen.classList.add('active'), 600);
};

function loadContent(section) {
  const data = {
    weapons: `
      <h2>Early Dawn Weapons | Tier List</h2>
      
      <h3>S-Tier (Top Tier – Highest Damage)</h3>
      <ul>
        <li><strong>Tusk Fang</strong> – 35% Damage</li>
        <li class="note">(Insane damage, harder to obtain)</li>
      </ul>
      
      <h3>A-Tier (Strong)</h3>
      <ul>
        <li><strong>Saber Spear</strong> – 30% Damage</li>
        <li><strong>Primitive Bow</strong> – 25% Damage</li>
        <li><strong>Stone Spear</strong> – 25% Damage</li>
      </ul>
      
      <h3>B-Tier (Decent)</h3>
      <ul>
        <li><strong>Saber Knife</strong> – 20% Damage</li>
        <li><strong>Spear</strong> – 20% Damage</li>
      </ul>
      
      <h3>C-Tier (Basic)</h3>
      <ul>
        <li><strong>Refined Knife</strong> – 15% Damage</li>
      </ul>
      
      <h3>D-Tier (Weak)</h3>
      <ul>
        <li><strong>Sharp Stone</strong> – 10% Damage</li>
      </ul>
    `,
    healing: `
      <h2>Early Dawn Food & Heals | Tier List</h2>
      
      <h3>(S) Tier (Best / Most OP)</h3>
      <p>These are top-tier healing items In Game.</p>
      <ul>
        <li><strong>Honey</strong> – 38%</li>
        <li><strong>Aloe Salve</strong> – 30%</li>
        <li><strong>Aloe Vera Fruit</strong> – 20%</li>
        <li><strong>Pelagornis Egg</strong> – 20%</li>
        <li><strong>Cooked Fish</strong> – 15%</li>
      </ul>
      
      <h3>(A) Tier (Great Healing)</h3>
      <p>Very useful.</p>
      <ul>
        <li><strong>Dried Meat</strong> – 12%</li>
        <li><strong>Dried Fish</strong> – 12%</li>
        <li><strong>Baobab Pulp</strong> – 12%</li>
      </ul>
      
      <h3>(B) Tier (Decent)</h3>
      <p>Good for quick healing.</p>
      <ul>
        <li><strong>Coconut</strong> – 10%</li>
        <li><strong>Seaweed</strong> – 8%</li>
        <li><strong>Horsetail</strong> – 8%</li>
        <li><strong>Cooked Meat</strong> – 7%</li>
        <li><strong>Wild Carrot</strong> – 7%</li>
      </ul>
      
      <h3>(C) Tier (Average / Common Healing)</h3>
      <p>Low healing but still Decent.</p>
      <ul>
        <li><strong>Raw Meat</strong> – 5%</li>
        <li><strong>Burnt Meat</strong> – 5%</li>
        <li><strong>Fish</strong> – 5%</li>
        <li><strong>Banana</strong> – 5%</li>
        <li><strong>Mango</strong> – 5%</li>
        <li><strong>Frog Eggs</strong> – 5%</li>
        <li><strong>Tsamma Melon</strong> – 5%</li>
        <li><strong>Webbed Insects</strong> – 5%</li>
        <li><strong>Crassostrea</strong> – 5%</li>
      </ul>
      
      <h3>(D) Tier (Weak / Heals)</h3>
      <p>Barely useful.</p>
      <ul>
        <li><strong>Berry</strong> – 3%</li>
        <li><strong>Burnt Fish</strong> – 2%</li>
      </ul>
      
      <h3>(F) Tier (Negative)</h3>
      <ul>
        <li><strong>Sausage-Tree Fruit</strong> – 0% (Poisoned)</li>
      </ul>
    `,
    neurons: `
      <h2>Neuron Farming</h2>
      <ul>
        <li><strong>Eating</strong> Eating</li>
        <li><strong>Crafting</strong> Crafting</li>
        <li><strong>Discovering</strong> Discovering</li>
      </ul>
    `,
    protips: `
      <h2>Pro Tips</h2>
      <ul>
        <li>Craft smart, heal fast, farm faster.</li>
        <li>Never run at night can be risky.</li>
        <li>always place your shelter at the end of the map.</li>
        <li>Practice PvP with friends.</li>
      </ul>
    `,
    about: `
      <h2>About Early Dawn Wiki</h2>
      <p>This wiki is made to help players survive and thrive in Early Dawn Roblox game.</p>
      <p>Created with ❤️ by whybegs.</p>
    `
  };
  contentDiv.innerHTML = data[section] || '<p>Content not found.</p>';
}

document.body.onmousemove = e => {
  const x = (window.innerWidth / 2 - e.clientX) / 50;
  const y = (window.innerHeight / 2 - e.clientY) / 50;
  const activeScreen = document.querySelector('.screen.active');
  if (activeScreen) {
    activeScreen.style.transform = `translate(-50%, -50%) scale(1) rotateX(${y}deg) rotateY(${-x}deg)`;
  }
};

let shakeTimeout;
document.body.onmouseenter = () => {
  clearTimeout(shakeTimeout);
  document.body.style.animation = 'none';
};
document.body.onmouseleave = () => {
  document.body.style.animation = 'shake 4s infinite ease-in-out';
  shakeTimeout = setTimeout(() => {
    document.body.style.animation = 'none';
  }, 4000);
};

const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes shake {
    0%, 100% { transform: translate(0, 0); }
    20%, 60% { transform: translate(-5px, 5px); }
    40%, 80% { transform: translate(5px, -5px); }
  }
  
  .note {
    color: #aaa;
    font-style: italic;
    margin-left: 20px;
    list-style-type: none;
  }
`;
document.head.appendChild(styleSheet);