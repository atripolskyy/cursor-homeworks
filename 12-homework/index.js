const BASE_API_URL = `https://swapi.dev/api/`;
const wrapper = document.querySelector('.wrapper');

/**
 *
 */
const getFilm = async () => {
  const response = await fetch(`${BASE_API_URL}films/2`);
  const resultData = await response.json();

  return resultData;
}

/**
 *
 */
const getStar = async (starLink) => {
  const response = await fetch(starLink);
  const resultData = await response.json();

  return resultData;
}

/**
 *
 */
const getPlanets = async (fetchUrl = `${BASE_API_URL}planets`) => {
  if (fetchUrl !== `null`) {
    const response = await fetch(fetchUrl);
    const resultData = await response.json();

    return resultData;
  }
}

/**
 *
 */
const createNextButton = () => {
  const button = document.createElement('button');
  button.type = `button`;
  button.classList.add( ...[`button`, `button-next-planets`] );
  button.textContent = `next page >`;

  // const button = `<button class="button button-next-planets" type="button">get next planets</button>`;

  button.addEventListener(`click`, (e) => {
    const planetsList = document.querySelector(`.card-list--planets`);
    const nextPageUrl = planetsList.dataset.nextPage;

    getPlanets(nextPageUrl)
      .then(data => {
          planetsList.dataset.nextPage = data.next;
          planetsList.innerHTML = ``;

          if (data.next === null) document.querySelector(`.button-next-planets`).setAttribute(`disabled`, true);

          data.results.map(planet => {
            const planetNode = document.createElement(`div`);
            planetNode.classList.add(`card-item`);
            planetNode.textContent = planet.name;
            planetsList.appendChild(planetNode);
          });
      });
  });

  return button;
}

/**
 * Create section title html node element
 */
const createSectionTitle = (text) => {
  const sectionTitle = document.createElement(`p`);
  sectionTitle.classList.add(`section-title`);
  sectionTitle.innerText = text;

  return sectionTitle;
}

/**
 *  Render heroes
 */
const renderHeroes = heroes => {
  const listNode = document.createElement(`div`);
  listNode.classList.add( ...[`card-list`, `card-list--heroes`] );

  heroes.characters.map(heroe => {
    getStar(heroe)
      .then(data => {
        const planetNode = document.createElement(`div`);
        planetNode.classList.add(`card-item`);
        planetNode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" height="512px" viewBox="0 0 512 512" width="512px" class="">
            <g><g><path d="m256 512c-60.615 0-119.406-21.564-165.543-60.721-10.833-9.188-20.995-19.375-30.201-30.275-38.859-46.06-60.256-104.657-60.256-165.004 0-68.381 26.628-132.668 74.98-181.02s112.639-74.98 181.02-74.98 132.668 26.628 181.02 74.98 74.98 112.639 74.98 181.02c0 60.348-21.397 118.945-60.251 164.998-9.211 10.906-19.373 21.093-30.209 30.284-46.134 39.154-104.925 60.718-165.54 60.718zm0-480c-123.514 0-224 100.486-224 224 0 52.805 18.719 104.074 52.709 144.363 8.06 9.543 16.961 18.466 26.451 26.516 40.364 34.256 91.801 53.121 144.84 53.121s104.476-18.865 144.837-53.119c9.493-8.052 18.394-16.976 26.459-26.525 33.985-40.281 52.704-91.55 52.704-144.356 0-123.514-100.486-224-224-224z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/><path d="m256 256c-52.935 0-96-43.065-96-96s43.065-96 96-96 96 43.065 96 96-43.065 96-96 96zm0-160c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/><path d="m411.202 455.084c-1.29 0-2.6-.157-3.908-.485-8.57-2.151-13.774-10.843-11.623-19.414 2.872-11.443 4.329-23.281 4.329-35.185 0-78.285-63.646-142.866-141.893-143.99l-2.107-.01-2.107.01c-78.247 1.124-141.893 65.705-141.893 143.99 0 11.904 1.457 23.742 4.329 35.185 2.151 8.571-3.053 17.263-11.623 19.414s-17.263-3.052-19.414-11.623c-3.512-13.989-5.292-28.448-5.292-42.976 0-46.578 18.017-90.483 50.732-123.63 32.683-33.114 76.285-51.708 122.774-52.358.075-.001.149-.001.224-.001l2.27-.011 2.27.01c.075 0 .149 0 .224.001 46.489.649 90.091 19.244 122.774 52.358 32.715 33.148 50.732 77.053 50.732 123.631 0 14.528-1.78 28.987-5.292 42.976-1.823 7.262-8.343 12.107-15.506 12.108z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/></g></g>
          </svg><div>${data.name}<div class="heroe__info">Birth year: ${data.birth_year} / Gender: ${data.gender}</div></div>`;

        listNode.appendChild(planetNode);
      });
  });

  document.querySelector(`.section--heroes`).appendChild(listNode);
}

/**
 *
 */
const getHeroes = () => {
  const sectionNode = document.createElement(`section`);
  sectionNode.classList.add( ...[`section`, `section--heroes`]);

  const sectionTitle = createSectionTitle(`List of heroes //`);

  const getInfoButton = document.createElement('button');
  getInfoButton.type = `button`;
  getInfoButton.classList.add(`button`);
  getInfoButton.textContent = 'get heroes';

  getInfoButton.addEventListener(`click`, () => {
    getFilm().then(data => renderHeroes(data));
  });

  sectionTitle.appendChild( getInfoButton );
  sectionNode.append(sectionTitle);
  wrapper.appendChild(sectionNode);
}

getHeroes();

getPlanets()
  .then(data => {
    const sectionNode = document.createElement(`section`);
    sectionNode.classList.add(`section`);

    const sectionTitle = createSectionTitle(`List of planets //`);
    sectionTitle.appendChild( createNextButton() );
    sectionNode.append(sectionTitle);

    const listNode = document.createElement(`div`);
    listNode.classList.add( ...[`card-list`, `card-list--planets`] );
    listNode.dataset.nextPage = data.next;

    data.results.map(planet => {
      const planetNode = document.createElement(`div`);
      planetNode.classList.add(`card-item`);
      planetNode.textContent = planet.name;

      listNode.appendChild(planetNode);
    });

    sectionNode.appendChild(listNode);
    wrapper.appendChild(sectionNode);
  });
