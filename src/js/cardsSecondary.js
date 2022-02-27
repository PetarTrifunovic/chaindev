'use strict';
import cardsArr from './cardsArr';

const cardsSecondaryContainer = document.querySelector(
  '.section__cards-secondary'
);
const displaySecondaryCards = card => {
  card.forEach(el => {
    const html = `
    <div class="card">
        <div class="card__head">
            <h2 class="card__title">${el.strategyName}</h2>
        </div>
        <div class="chart-container">
          <div class="chart">Chart Goes Here</div>
        </div>
        <ul class="card__list">
            <li class="card__list-item">Return <span>${el.return}</span></li>
            <li class="card__list-item">Followers <span>${el.followers}</span></li>
            <li class="card__list-item">
            Days Since inception <span>${el.daysSinceInception}</span>
            </li>
        </ul>
        <div class="card__bottom">
            <button class="btn btn--secondary">More Details</button>
            <button class="btn btn--primary btn-copy">Copy</button>
        </div>
    </div>
    `;

    cardsSecondaryContainer.insertAdjacentHTML('beforeend', html);
  });
};

displaySecondaryCards(cardsArr);
