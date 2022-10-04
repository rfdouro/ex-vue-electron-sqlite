import "./styles/quasar.scss";
import lang from "quasar/lang/pt-BR.js";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import { Dialog } from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: {
    Dialog,
  },
  lang: lang,
};
