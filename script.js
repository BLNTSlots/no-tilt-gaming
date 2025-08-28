const casinos = [
  {
    name: "Stake.US",
    bonus: "Exclusive Bonus Offer",
    link: "https://stake.us/?c=aa43e6e4d9",
    thumbnail: "no-tilt-gaming/assets/StakeLogo.png",
    landingPage: "StakeLandingPage.html",
    bgGradient: "linear-gradient(135deg, #1a1a6f, #3f51b5)"
  },
  {
    name: "Gains Casino",
    bonus: "Claim Your Welcome Bonus",
    link: "https://gains.com/?ref=blntslots",
    thumbnail: "no-tilt-gaming/assets/gainscasino.jpg",
    landingPage: "AffiliateSiteGainsLandingPage.html",
    bgGradient: "linear-gradient(135deg, #2a2a6f, #6a1b9a)"
  },
  {
    name: "Pulsz Casino",
    bonus: "Exclusive Signup Rewards",
    link: "https://www.pulsz.com/?invited_by=f4cffv",
    thumbnail: "no-tilt-gaming/assets/PulszLogo.png",
    landingPage: "PulszLandingPage.html",
    bgGradient: "linear-gradient(135deg, #1a1a6f, #e91e63)"
  }
];

const grid = document.getElementById("casinoGrid");

casinos.forEach(casino => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.justifyContent = "flex-end";
  card.style.alignItems = "center";
  card.style.minHeight = "450px"; 
  card.style.width = "320px"; 
  card.style.padding = "20px";
  card.style.boxSizing = "border-box";
  card.style.borderRadius = "12px";
  card.style.background = casino.bgGradient;
  card.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
  card.style.color = "#ffffff";
  card.style.textAlign = "center";
  card.style.transition = "transform 0.2s, box-shadow 0.2s";

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 12px 30px rgba(0,0,0,0.5)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
  });

  const logoHTML = casino.thumbnail 
    ? `<img src="${casino.thumbnail}" alt="${casino.name}" style="max-width:100%; height:auto; border-radius:8px; margin-bottom:10px;">` 
    : "";

  const textHTML = `
    <h3 style="margin:5px 0;">${casino.name}</h3>
    <p style="margin:5px 0;">${casino.bonus}</p>
    <p style="font-weight:bold; margin-top:5px;">Click Below! 👇</p>
  `;

  const buttonsHTML = casino.landingPage 
    ? `<div style="display:flex; flex-direction:column; align-items:center; gap:10px; margin-top:10px;">
         <a href="${casino.link}" class="btn" target="_blank" rel="noopener" style="text-align:center; display:block; color:#fff; background-color:#e91e63; padding:10px 20px; border-radius:5px; text-decoration:none;">Sign Up Here</a>
         <a href="${casino.landingPage}" class="btn" target="_blank" rel="noopener" style="text-align:center; display:block; background-color:#28a745; color:#fff; padding:10px 20px; border-radius:5px; text-decoration:none;">More Info</a>
       </div>` 
    : `<div style="display:flex; flex-direction:column; align-items:center; gap:10px; margin-top:10px;">
         <a href="${casino.link}" class="btn" target="_blank" rel="noopener" style="text-align:center; display:block; color:#fff; background-color:#e91e63; padding:10px 20px; border-radius:5px; text-decoration:none;">Sign Up Here</a>
       </div>`;

  card.innerHTML = `${logoHTML}${textHTML}${buttonsHTML}`;
  grid.appendChild(card);
});


