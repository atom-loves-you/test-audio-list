let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
if (theme == "dark") {
  document.documentElement.classList.add("dark");
}
document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
  });
document.getElementById("song-saved").addEventListener("click", function () {
  document.getElementById("song-saved").classList.toggle("saved");
});
Amplitude.init({
  bindings: {
    37: "prev",
    39: "next",
    32: "play_pause",
  },
  callbacks: {
    timeupdate: function () {
      let percentage = Amplitude.getSongPlayedPercentage();
      if (isNaN(percentage)) {
        percentage = 0;
      }

      /* Massive Help from: https://nikitahl.com/style-range-input-css */

      let slider = document.getElementById("song-percentage-played");
      slider.style.backgroundSize = percentage + "% 100%";
    },
  },
  songs: [
    /* Track 01: Tweeters, Woofers, Heavy Metal */
    {
      name: "Track 01: Tweeters, Woofers, Heavy Metal",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "./audio/Tweeters, Woofers, Heavy Metal.wav",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },

    /* Track 02: The Summer of George */
    {
      name: "Track 02: The Summer of George",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "./audio/mp3/The-Summer-of-George.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },

    /* Track 03: Otherkin*/
    {
      name: "Track 03: Otherkin",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "./audio/mp3/Otherkin.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },

    /* Track 04: ℏ = h/2π */
    {
      name: "Track 04: ℏ = h/2π",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "./audio/mp3/ℏ = h_2π.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png"
"ad_astra": "Track-04",
    },

    /* Track 05: */
    {
      name: "Track 05: Just Don't Write Bugs",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "./audio/mp3/Just-Don't-Write-Bugs.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },

    /* Track 06: */
    {
      name: "Track 06: Ad Astra",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "./audio/mp3/Ad-Astra.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },

    /* Track 07: */
    {
      name: "Track 07: Title Here",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "./",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },

    /* Track 08: */
    {
      name: "Track 08: Title Here",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "./",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },

    /* Track 09: */
    {
      name: "Track 09: Title Here",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "./",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },

    /* Track 10: */
    {
      name: "Track 10: Title Here",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "./",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },
    /* Track 11... */

  ],
});

window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};
