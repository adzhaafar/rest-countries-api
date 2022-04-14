# rest-countries-api

# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

This project pulls data from Rest Countries API and displays it on pages as designed in the challenge. It is build with React, styled with plain CSS.

### The challenge

The users are able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshots

![alt text](image.jpg)

### Links

- Live Site URL: [GitHub Pages](https://adzhaafar.github.io/rest-countries-api/)

## My process

- Set up basic styling (colors, fonts, custom properties, resets, utility classes etc)
- Create the navbar component & create its layout
- Use grid to layout country divs
- Fetch data through api using useEffect() hook
- Create search and filter component & layout and styling
- Set up functionality of search bar by cheking user's input against the country names
- Set up functionality of the dropdown menu (filtering by region)
- Setting up router for home page and country page, make each country div route to next page using url parameters that come as props from the upper component's api call
- Create new component, countryInfo to receive country name prop and call api to pull information about country
- Styling & layout of new component
- Loop through border countries 3 letter codes to call api once again and route to its page onclick
- Create home button that redirects home
- Create light/ darkmode toggle though custom color properties changing when adding darkmode class
- Fix style bugs, add media queries for responsiveness
- Too many border countries => limit them to 3 only

**Things I struggled with:**

- Styling grid, particularly making the grid-container dynamically render instead of the actual grid items. This made the css grid properties act very strangely because each child element acted as the parent container. To fix the issue I put container class in a static section tag and inside put child elements to render after api call.

- Rendering information dynamically from the rest api, the reason for that was due to the key names not being named in the same way, so it threw an error returning undefined. I kept thinking the error was that react rendered components before api data returned, which is why a blank object wouldn't have properties and return undefined. This turned out not to be the issue but it led me onto a rabbit hole of react's lifecycle methods and class components and I learned pretty interesting stuff about older React to appreciate newer hooks.

### Built with

- [React](https://reactjs.org/) - JS library
- CSS (custom properties, css grid/flexbox)
- React V6 Router

### What I learned

- Set up custom css properties, create reusable simple utility classes
- React lifecycle & lifecycle methods
- React Router
- Manage state & fetch data
- dark/light mode toggle
- filter dropdown
- input filter

### Continued development

**Improve on:**

- Responsive design principles
- Better layout
- Build more projects with React
- Better understand routing (react router)

**Look into:**

- testing (jest)
- redux
- axios for api call
- styled components/bootstrap/sass

### Useful resources

- [React Router Documentation](https://reactrouter.com/docs/en/v6/getting-started/overview) - Helped me get started with react router
- [Dark Mode JavaScript toggle using localStorage](https://youtu.be/wodWDIdV9BY) - This is a YouTube video on how to create a dark mode toggle with localStorage.
- [Create React App documentation](https://create-react-app.dev/docs/deployment/#github-pages)
- [React docs](https://reactjs.org/docs/getting-started.html)
- [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-background)
- [JSON formatter](https://jsonformatter.org/json-pretty-print)

[Markdown reference](https://www.markdownguide.org/cheat-sheet/#extended-syntax)
