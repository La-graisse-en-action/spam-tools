/**
 * 01-2024 - This file is use to send a message using the
 * elements of the Telegram Web interface by inspect devtools
 * Maybe in the future will change the elements on the telegram web page
 */

/**
 * For basic usage you can pass a string or an array of strings
 * to send the message line by line like a spamming tool
 *
 * To use, you need to open the telegram web page, press F12 or Inspect option
 * an paste this code on the console tab, in the params of this function you can pass the message to send
 * @param {string | string[]} textToSend
 */
function sendMessage(textToSend) {
	const inputMessage = document.getElementsByClassName('input-message-input')[0];
	const sendButton = document.getElementsByClassName('btn-send')[0];
	/** @type {string[]} messageContent */
	let messageContent = [];

	/**
	 * If the elements are not found in the DOM then throw an error
	 */
	if (!inputMessage) throw new Error('Input message not found');
	if (!sendButton) throw new Error('Send button not found');

	try {
		if (Array.isArray(textToSend)) {
			messageContent = textToSend;
		} else if (typeof textToSend === 'string') {
			const messageFixed = textToSend
				// split the string by new line or tab
				.split(/[\n\t]+/)
				// remove spaces at the start and end of the line ' a ' => 'a'
				.map((line) => line.trim())
				// clean the array if has an empty line
				.filter((line) => line);
			// const messageFixed = textToSend.split(/\S/).map((line) => line.trim());
			messageContent = messageFixed;
		}

		messageContent.forEach((lyric) => {
			/**
			 * This timeout is to avoid the telegram to block the account
			 * or to avoid the telegram to detect the spam message
			 * It is optional, you can remove it if you want
			 */
			setTimeout(() => {
				inputMessage.textContent = lyric;
				inputMessage.dispatchEvent(new Event('input', { bubbles: true }));
				sendButton.click();
			}, 1000);
		});
	} catch (error) {
		console.error(error);
	}
}

const musicLyrics = [
	'Yes, no, maybe',
	"I don't know",
	'Can you repeat the question?',
	"You're not the boss of me now",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"And you're not so big",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"And you're not so big",
	'Life is unfair',
	'So I just stare',
	'At the stain on the wall',
	"Where the TV'd been",
	"But ever since we've moved in",
	"It's been empty",
	'Why I',
	"Why I'm in this room?",
	'There is no point explaining',
	"You're not the boss of me now",
	"And you're not so big",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"And you're not so big",
	'Life is a test',
	'But I confess',
	"I like this mess I've made so far",
	'Grade on a curve',
	"And you'll observe",
	"I'm right below the horizon",
	'Yes, no, maybe',
	"I don't know",
	'Can you repeat the question?',
	"You're not the boss of me now",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"And you're not so big",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"And you're not so big",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"And you're not so big",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"And you're not so big",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"You're not the boss of me now",
	"And you're not so big",
	'Life is unfair'
];

const anotherTest = `
The Array.from() function in JavaScript takes a list of values and returns a new array with the same number of elements as the original list, but with the values replaced by their index within the original list.

If you have a list of integers and want to return an array whose elements are those integer values, you can use this function:

Array.from( [1, 2, 3] )

This will give you:

[1, 2, 3]

The returned array has the same length as the original one and contains each entry exactly once--there are no duplicates!
`;

sendMessage(musicLyrics);
sendMessage(anotherTest);
