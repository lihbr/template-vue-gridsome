// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Dependencies
import Vuex from "vuex";

// Style
import "~/assets/sass/style.sass";

// Store
import store from "~/store";

// Components
import SmartLink from "~/components/controls/SmartLink.vue";
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { appOptions, router, head, isClient }) {
  Vue.use(Vuex);

  appOptions.store = new Vuex.Store(store);
  // Set default layout as a global component
  Vue.component("SmartLink", SmartLink);
  Vue.component("Layout", DefaultLayout);
}
