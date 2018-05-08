Amplitude.init({
	"songs": [{
			"name": "Caution",
			"artist": "Leitson",
			"album": ".",
			"url": "https://soundcloud.com/leitshilgerson/leits-hilgerson-caution-original-mix",
			"cover_art_url": "."
		},
		{
			"name": "Prototype",
			"artist": "Leitson",
			"album": ".",
			"url": "js/prototype.mp3",
			"cover_art_url": "."
		},
		{
			"name": "Bow",
			"artist": "Leitson",
			"album": ".",
			"url": "js/bow.mp3",
			"cover_art_url": "."
		}
	]
});

document.getElementById('song-played-progress').addEventListener('click', function(e) {
	var offset = this.getBoundingClientRect();
	var x = e.pageX - offset.left;

	Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
});
