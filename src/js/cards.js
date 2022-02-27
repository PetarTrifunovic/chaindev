'use strict';
import cardsArr from './cardsArr';

const cardsContainer = document.querySelector('.section__cards');

const displayCards = card => {
  card.forEach(el => {
    const html = `
    <div class="card">
        <div class="card__head">
            <h2 class="card__title">${el.strategyName}</h2>
            <div class="card__follow-btn-container">
              <i class="fa-solid fa-ellipsis-vertical card__follow-btn"></i>
            </div>
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
            <button class="btn btn--secondary btn-stop-following">Stop Following</button>
            <button class="btn btn--primary">Positions</button>
        </div>
    </div>
    `;

    cardsContainer.insertAdjacentHTML('beforeend', html);
  });
};

displayCards(cardsArr);
