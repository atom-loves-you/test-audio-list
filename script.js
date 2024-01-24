let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ?
  "dark" :
  "light";

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

Amplitude.init(
  {
    bindings:
    {
      37: "prev",
      39: "next",
      32: "play_pause",
    },
    callbacks:
    {
      timeupdate: function () {
        let percentage = Amplitude.getSongPlayedPercentage();

        if (isNaN(percentage)) {
          percentage = 0;
        }

        /**
         * Massive Help from: https://nikitahl.com/style-range-input-css
         */
        let slider = document.getElementById("song-percentage-played");
        slider.style.backgroundSize = percentage + "% 100%";
      },
    },

    songs: [

      //Track 01: Tweeters, Woofers, Heavy Metal
      {
        name: "Track 01: Tweeters, Woofers, Heavy Metal",
        artist: "Atom Loves You",
        album: "Ad Astra per Aspera",
        url: "./audio/wav/Tweeters, Woofers, Heavy Metal.wav",
        cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
      },

      // Track 02: The Summer of George
      {
        name: "Track 02: The Summer of George",
        artist: "Atom Loves You",
        album: "Ad Astra per Aspera, 2024",
        url: "./audio/mp3/The-Summer-of-George.mp3",
        cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
      },

      //Tracl 03: Otherkin
      {
        name: "Track 03: Otherkin",
        artist: "Atom Loves You",
        album: "Ad Astra per Aspera, 2024",
        url: "./audio/mp3/Otherkin.mp3",
        cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
      },

      //Track 04: Ooo
      {
        name: "Track 04: Ooo",
        artist: "Atom Loves You",
        album: "Ad Astra per Aspera, 2024",
        url: "./audio/wav/Ooo.wav",
        cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
      },

      // Track 05: ℏ = h/2π
      {
        name: "Track 05: ℏ = h/2π",
        artist: "Atom Loves You",
        album: "Ad Astra per Aspera",
        url: "./audio/mp3/ℏ = h_2π.mp3",
        cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
      },

      //Track 06: Ad Astra
      {
        name: "Track 06: Ad Astra",
        artist: "Atom Loves You",
        album: "Ad Astra per Aspera, 2024",
        url: "./audio/mp3/Ad-Astra.mp3", cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
      },

      //Track 07: Just Don't Write Bugs
      {
        name: "Track 07: Just Don't Write Bugs",
        artist: "Atom Loves You",
        album: "Ad Astra per Aspera, 2024",
        url: "./audio/mp3/Just-Don't-Write-Bugs.mp3", cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
      },

      //Track 08: Data is Destiny,Ad Astra 1
      {
        name: "Track 08: Data is Destiny",
        artist: "Atom Loves You",
        album: "Ad Astra per Aspera, 2024",
        url: "./audio/wav/Data is Destiny.wav", cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
      },

      //MySong-62      {
      name: "Track 09: MySong-62",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2024",
      url: "./audio/wav/My Song 62-Last-Updated-on-Dec-31-2024.wav
", cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
      },



  //L'appel du vide
  {
    name: "Track 10: L'appel du vide",
    artist: "Atom Loves You",
    album: "Ad Astra per Aspera, 2024",
    url: "./audio/mp3/L'appel-du-Vide.mp3", cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
  },
  //143 Nao
  {
    name: "Track 11: 143 Nao",
    artist: "Atom Loves You",
    album: "Ad Astra per Aspera, 2024",
    url: "./audio/mp3/143-Nao.mp3", cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
  },


  // Track 12: MySong-36      {
  name: "Track 12: MySong-36",
  artist: "Atom Loves You",
  album: "Ad Astra per Aspera, 2024",
  url: "./audio/wav/My-Song-36-Updated-on-Dec-31-2024.wav", cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
      },


  // Track 13: Just Don't Write Bugs
  {
    name: "Track 13: Just Don't Write Bugs",
    artist: "Atom Loves You",
    album: "Ad Astra per Aspera, 2024",
    url: "./audio/mp3/Just-Don't-Write-Bugs.mp3", cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
  },

  // Track 14
  {
    name: "Track 14: Very Experimental",
    artist: "Atom Loves You",
    album: "Ad Astra per Aspera, 2024",
    url: "./audio/wav/Very experimental.wav",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
  },


//Track 15 
{
name: "Track 15: Lo-fi",
artist: "Atom Loves You",
album: "Ad Astra per Aspera, 2024",
url: "./audio/mp3/Lo-fi.mp3", 
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
},


//Last Track
  {
    name: "Track 00: Last Track (Unnamed)",
    artist: "Atom Loves You",
    album: "Ad Astra per Aspera, 2024",
    url: "./audio/mp3/Lo-fi.mp3", 
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
  },


/********* BLANK ***************
// Track 00
  {
    name: "Track 0:",
    artist: "Atom Loves You",
    album: "Ad Astra per Aspera, 2024",
    url: "./", cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
  },
********************/

    ],
  });

window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};
