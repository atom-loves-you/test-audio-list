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
			32: "play_pause"
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
			}
		},
		songs: [

			// Tweeters, Woofers, Heavy Metal
			{
				name: "Track 01: Tweeters, Woofers, Heavy Metal",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/wav/Tweeters-Woofers-Heavy Metal.wav",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			},

			{
				name: "Track 02: The Summer of George",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/wav/Summer of George-FINAL-Spring-2024.wav",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			},
			{
				name: "Track 03: Otherkin",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/mp3/Otherkin.mp3",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			},
			{
				name: "Track 04: Title",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			}, {
				name: "Track 05: ℏ = h/2π",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/mp3/ℏ = h_2π.mp3",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			}, {
				name: "Track 06: Just Don't Write Bugs",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/mp3/Just-Don't-Write-Bugs.mp3",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			}, {
				name: "Track 07: Ad Astra",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/wav/Ad Astra - THE GOOD ONE.wav",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			}, {
				name: "Track 00: L'appel du Vide (The Call of the Void)",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/mp3/L'appel du Vide.mp3",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			}, {
				name: "Track 00: Lo fi",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/wav/Lo fi .wav",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			}, {
				name: "Track 00: Title: Ooo",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/wav/Ooo.wav",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			}, {
				name: "Track 00: My Song 36",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/wav/My-Song-36-Updated-on-Dec-31-2023.wav",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			}, {
				name: "Track 00: Last Track",
				artist: "Atom Loves You",
				album: "Ad Astra per Aspera",
				url: "./audio-files-final/wav/Last track.wav",
				cover_art_url: "https://assets.codepen.io/6566924/warp.png"
			},
		]
	});
window.onkeydown = function (e) {
	return !(e.keyCode == 32);
};