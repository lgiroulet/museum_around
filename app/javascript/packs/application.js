// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
// import flatpickr from "flatpickr";
// import { French } from "flatpickr/dist/l10n/fr.js"



// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { initMapbox } from '../plugins/init_mapbox';
import { initTabs } from '../components/init_tabs';
import { submitSearch } from '../components/submit_search';
import { submitSelect } from '../components/submit_select';
import { initStarRating } from '../plugins/init_star_rating';
import { submitSelectExpos } from '../components/submit_select_expos';
import { initAutocomplete } from '../plugins/init_autocomplete';
import { initCounterForVisits } from '../plugins/init_counter_for_visits'
// import { initFlatpickr } from '../plugins/init_flatpickr';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  initMapbox();
  initTabs();
  submitSearch();
  initStarRating();
  submitSelect();
  submitSelectExpos();
  initAutocomplete();
  initCounterForVisits();
  // initFlatpickr();
  // initBrowsecata()
});

