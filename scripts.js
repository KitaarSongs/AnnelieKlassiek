const links = {
  current: [
    { name: "Song 1 - Simple Barré", url: "https://youtu.be/mPYI6P8ptqw" },
    { name: "Song 2 - 4 Beat Blues (coming soon)", url: "" },
    { name: "Song 3 - Waltzer", url: "https://youtu.be/Bk-wxNcOWp0" },
    { name: "Song 4 - A Fistful of Pesos (coming soon)", url: "" },
    { name: "Song 5 - Comanche (coming soon)", url: "" },
    { name: "Song 6 - Allegro", url: "https://www.youtube.com/watch?v=RQjjoo7eY9E" },
    { name: "Song 7 - Andante", url: "https://www.youtube.com/watch?v=_hV96ltR-aM" },
    { name: "Song 8 - 12 Bar Blues (coming soon)", url: "" },
    { name: "Song 9 - Etude (coming soon)", url: "" },
    { name: "Song 10 - Sun Song", url: "https://youtu.be/FE6sO1P5JM8" },
    { name: "Song 11 - Study No 2", url: "https://youtu.be/Jd6MZb7Q6ts" },
    { name: "Song 12 - Study No 3", url: "https://youtu.be/vjdVomHG-Jo" },
    { name: "Song 13 - Greensleeves (coming soon)", url: "" },
    { name: "Song 14 - Andantino in G-Dur (coming soon)", url: "" },
    { name: "Song 15 - Für Elise (coming soon)", url: "" },
    { name: "Song 16 - Romance", url: "https://youtu.be/c9GeMaNPBfg" },
    { name: "Song 17 - Galop", url: "https://www.youtube.com/watch?v=RQYsjqQ-IuY" },
    { name: "Song 18 - Gavotta", url: "https://www.youtube.com/watch?v=VgevtfSZB9A" },
    { name: "Song 19 - Ejercicio", url: "https://www.youtube.com/watch?v=wPgtHBaG0Cg" }
  ],
  old: [
    { name: "Song 1 - Agadio", url: "https://www.youtube.com/watch?v=ahZCMYEnSEQ" },
    { name: "Song 2 - Lesson 7", url: "https://www.youtube.com/watch?v=bGt5SaB4W6A" },
    { name: "Song 3 - Gique", url: "https://www.youtube.com/watch?v=wIKFdG_h2OE" },
    { name: "Song 4 - Eccossaice", url: "https://www.youtube.com/watch?v=z8IKwis0JO8" },
    { name: "Song 5 - Le Joyuex", url: "https://www.youtube.com/watch?v=csFTQA_v2zA" },
    { name: "Song 6 - Opus 35", url: "https://youtu.be/NJvbq3yalus" },
    { name: "Song 7 - Moderato", url: "https://youtu.be/Swebu5tF0Ng" }
  ],
  youtube: [
    { name: "YouTube kanaal", url: "https://www.youtube.com/channel/UC3RpsICeP4ed1phD1a9pmJg" }
  ],
  dropbox: [
    { name: "Dropbox", url: "https://www.dropbox.com/sh/cdvji9mrdwvt2hj/AAADOIdlXxdqRz63_c-Ep7Z0a?dl=0" }
  ]
};

function renderLinks(containerId, items) {
  const container = document.getElementById(containerId);
  items.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url || "#";
    a.textContent = link.name;
    a.className = "link-btn";
    a.target = "_blank";
    container.appendChild(a);
  });
}

renderLinks("current-songs", links.current);
renderLinks("old-songs", links.old);
renderLinks("youtube", links.youtube);
renderLinks("dropbox", links.dropbox);
