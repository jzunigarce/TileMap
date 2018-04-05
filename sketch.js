const url = 'data/map.json'
const urlImg = 'images/tiles.png'
let imageTile
let Map
function preload () {
	Map = loadJSON(url)
	imageTile = loadImage(urlImg)
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	Map['getTile'] = function (col, row) {
		return this.tiles[row * this.cols + col]
	}

}

function draw() {
	render()
}

const render = function () {
	for (var i = 0; i < Map.cols; i++) {
		for (var j = 0; j < Map.rows; j++) {
			let tile = Map.getTile(i, j)
			image(imageTile,
				i * Map.size,
				j * Map.size,
				Map.size,
				Map.size,
				(tile - 1) * Map.size,
				0,
				Map.size,
				Map.size,
				)
		}
	}
}
