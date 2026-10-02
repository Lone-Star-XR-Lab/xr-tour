/*
==========================================
PresentAR deck adapter

Copy this file into any keyboard-driven HTML presentation and add:

  <script src="presentar-adapter.js"></script>

It lets PresentAR (opened with ?deck=<url>) control the deck when
the two are on different origins, by turning PresentAR commands into
keydown events on the deck's document. It also reports keys pressed
inside the deck back to PresentAR's debug panel.

Does nothing unless the page is inside an iframe. No dependencies.
==========================================
*/

(() => {
  "use strict";

  if (window.parent === window) return;

  const post = data =>
    window.parent.postMessage({ source: "presentar-deck", ...data }, "*");

  // Commands from PresentAR → synthetic key presses.
  window.addEventListener("message", event => {
    const data = event.data;
    if (event.source !== window.parent) return;
    if (!data || data.source !== "presentar" || typeof data.key !== "string") return;

    document.dispatchEvent(new KeyboardEvent("keydown", {
      key: data.key,
      code: data.code || data.key,
      bubbles: true,
      cancelable: true
    }));
  });

  // Real key presses inside the deck → PresentAR debug panel.
  window.addEventListener("keydown", event => {
    if (!event.isTrusted) return;
    post({ type: "keydown", key: event.key, code: event.code, repeat: event.repeat });
  }, true);

  post({ type: "ready" });
})();
