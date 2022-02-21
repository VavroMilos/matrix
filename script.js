
//! Getting canvas from our html file
const canvas = document.querySelector('canvas')
//? You can also use -->
//* const canvas = document.getElementById('matrix')

//! Getting context from canvas, so we can draw on the canvas
const context = canvas.getContext('2d');

//! Setting sizes for the canvas
//* Canvas width and height = Size of your window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//! Setting our alphabet/numbers/symbols/...
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const japanese = 'はんだくてんだくてんおんよみ空手家からてかくんよみせっぷくふりがな';

//! Combining our characters to a bigger string
const alphabet = latin + numbers + japanese;

//! Font size + setting our size for columns
const fontSize = 16;
const columns = canvas.width / fontSize;


//! Our rain drops
const rainDrops = [];

//! Spawning our rain
for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	//! Fading the drawn characters = Trail Effect
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0'; //! Color of our rain
	context.font = fontSize + 'px monospace'; //! Size in pixels + font

	for(let i = 0; i < rainDrops.length; i++)
	{
		//! Generating a random character from our alphabet
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		//! Drawing character on our string
		//* i*fontSize = x.coordinate
		//* rainDrops[i]*fontSize = y.coordinate
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		//! Checking if our raindrop crossed the bottom border of our page
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			//! If our raindrop crossed the bottom....
			//* We are going to set raindrop value to 0, so its going to fall again
			rainDrops[i] = 0;
		}
		rainDrops[i]++;
	}
};
//! Calling our draw function with 'setInterval'
//* The number is setting our speed of falling
//* Lower number = Faster
//* Higher number = Slower
setInterval(draw, 25);