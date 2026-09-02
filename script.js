// Shared across all pages: the 6 hero roles, used for the ticker,
// the role filter chips, and color-coding hero cards.
const roles = [
  {key:'tank', label:'Tank', color:'var(--tank)'},
  {key:'fighter', label:'Fighter', color:'var(--fighter)'},
  {key:'assassin', label:'Assassin', color:'var(--assassin)'},
  {key:'mage', label:'Mage', color:'var(--mage)'},
  {key:'marksman', label:'Marksman', color:'var(--marksman)'},
  {key:'support', label:'Support', color:'var(--support)'},
];

function renderTicker(){
  const tickerTrack = document.getElementById('tickerTrack');
  if (!tickerTrack) return;
  const tickerItems = [...roles, ...roles].map(r =>
    `<span class="ticker-item" style="--dot:${r.color}">${r.label}</span>`
  ).join('');
  tickerTrack.innerHTML = tickerItems;
}

document.addEventListener('DOMContentLoaded', renderTicker);
