// create a span tag to add to the h1
const span = document.createElement("span");
// add the text to the span
span.innerText = ` (They're all good dogs!)`;
// add the underline class to the span
span.classList.add("underline");

// grab the h1 using querySelector function
const headerOne = document.querySelector("h1");

// append the span variable from line 2 to the h1
headerOne.append(span);

// create article element
const article = document.createElement("article");
// create img element
const image = document.createElement("img");
// add classlist of animated to img
image.classList.add("animated");

// add src attribute to img
image.setAttribute("src", "https://placedog.net/500/450");

//alternative to setAttrbute method for src
// image.src = "https://placedog.net/500/450";

// add alt attribute to img
// image.setAttribute("alt", "Amber, the dog");

//alternative to setAttribute for alt
image.alt = "Amber, the dog";
// append the img to the article
article.append(image);
// create h2
const headerTwo = document.createElement("h2");
// add text to h2
headerTwo.innerText = "Amber";
// append the h2 to the article
article.append(headerTwo);

// create p
const paragraph = document.createElement("p");
// add text to p
paragraph.innerText = "A sweet little doggo that belongs to my friend.";
// append our p to the article
article.append(paragraph);
// query for the main element in the DOM
const main = document.querySelector("main");
// append the article to main
main.append(article);

// Loop throuth the array and append all of the dog articles to the main element

const dogs = [
  {
    dogName: "Amber",
    description: "A sweet little doggo that belongs to my friend.",
    imageUrl: "https://placedog.net/500/450",
    alt: "Amber",
  },
  {
    dogName: "Theo",
    description: "Cool as pie in their pink shades",
    imageUrl: "https://placedog.net/500/441",
    alt: "Theo in pink shades",
  },
  {
    dogName: "Panini",
    description: "Professor of the Pack",
    imageUrl: "https://placedog.net/500/482",
    alt: "Panini",
  },
  {
    dogName: "Lypsinka",
    description: "Prescious little one",
    imageUrl: "https://placedog.net/500/783",
    alt: "Lypsinka",
  },
  {
    dogName: "Cuddles",
    description: "Just pet me, you will love me!",
    imageUrl: "https://placedog.net/500/388",
    alt: "Cuddles",
  },
  {
    dogName: "Damantia",
    description: "Always on guard so others are safe",
    imageUrl: "https://placedog.net/500/538",
    alt: "Damantia",
  },
];

// iterate through the array to create article

dogs.forEach(({ dogName, description, imageUrl, alt }) => {
  const article = document.createElement("article");

  //IMAGE
  const image = document.createElement("img");
  // add classlist of animated to img
  image.classList.add("animated");

  // add src attribute to img
  image.setAttribute("src", imageUrl);

  //alternative to setAttribute for alt
  image.alt = alt;

  article.append(image);

  // HEADER
  const headerTwo = document.createElement("h2");
  // add text to h2
  headerTwo.innerText = dogName;
  // append the h2 to the article
  article.append(headerTwo);

  // PARAGRAPH
  // create p
  const paragraph = document.createElement("p");
  // add text to p
  paragraph.innerText = description;
  // append our p to the article
  article.append(paragraph);
  // query for the main element in the DOM
  const main = document.querySelector("main");
  // append the article to main
  main.append(article);
});
