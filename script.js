// main section to insert card figures
const mainSection = document.querySelector("main");

// create a card from apartment data
const createCard = ({ tag, image, name, subtitle, price, rating, size }) => `
	<figure class="card">
		<p class="tag">${tag}</p>
		<img class="cover"
			src="${image}"
			alt="${name}">
		<div class="content">
			<h2 class="title">${name}</h2>
			<p class="subtitle">${subtitle}</p>
		</div>
		<div class="details">
			<p class="price">${price}</p>
			<p class="rating">${rating}</p>
			<span id="vertical-line"></span>
			<p class="size">${size}</p>
		</div>
	</figure>
`;

// fetch the data
axios.get("https://api.mcmakler.de/v1/advertisements").then(
	({ data: apartments }) => {
		// hold the card nodes
		const cards = [];
		// loop the apartments
		for (const apartment of apartments) {
			// add a newly made card to the list
			cards.push(createCard(apartment));
		}
		// apprend the cards to the main section
		mainSection.innerHTML = cards.join("");
	} // log errors
).catch(err => console.error(err));
