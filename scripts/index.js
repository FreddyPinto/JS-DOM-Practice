import hamburgerMenu from "./menu_hamburguer.js";
import { digitalClock, alarm } from "./clock.js";

const d = document

d.addEventListener("DOMContentLoaded", (e) => {
hamburgerMenu(".panel-btn", ".panel", ".menu a");
digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
})
