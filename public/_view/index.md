---
layout: page
title: View - Sensory interface
scripts:
  - src: https://unpkg.com/papaparse@latest/papaparse.min.js
    crossorigin: anonymous

  - src: https://unpkg.com/tone
    crossorigin: anonymous

  - src: /assets/js/jquery/jquery-3.4.1.min.js
  - src: /assets/js/view/braille_controller.js
  - src: /assets/js/view/audio.js
  - src: /assets/js/view/view.js
  - src: /assets/js/builder/builder.js
---

<div onload="initializeViewScript()">
  <div id="container">
  </div>
</div>
