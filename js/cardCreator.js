const createProjectCard = (card) => {
  let hashes = "";
  card.hashes.forEach((element) => {
    hashes += `<h4 class="heading-4 tags">${element}</h4>`;
  });

  return `
      <div class="project-card">
      <figure class="project-card__item">
        <img src="${card.image_url}" alt="${card.alt}" class="card-img"/>
      </figure>
      <div class="hash-tags">
        ${hashes}
      </div>
      <h2 class="heading-2--project">${card.title}</h2>
      <p class="project-card__text">
        ${card.text}
      </p>
      <div class="project-card__buttons">
        <button class="btn btn--demo">Demo</button>
        <button class="btn btn--code">Code</button>
      </div>
    </div>
  `;
};
