/**
 * 01-2024 - This file is use to send a message using the
 * elements of the Whatsapp Web interface by inspect devtools
 * Maybe in the future will change the elements on the whatsapp web page
 */

/**
 * For basic usage you can pass a string or an array of strings
 * to send the message line by line like a spamming tool
 *
 * To use, you need to open a chat in the whatsapp web page, press F12 or Inspect option
 * an paste this code on the console tab, in the params of this function you can pass the message to send
 * @param {string | string[]} messageToSend
 */
async function sendMessage(messageToSend) {
	try {
		/**
		 * Lines of the message to send
		 * @type {string[]} lines
		 */
		let lines = [];
		if (Array.isArray(messageToSend)) lines = messageToSend;
		else if (typeof messageToSend === 'string') {
			lines = messageToSend
				.split(/[\n\t]+/)
				.map((line) => line.trim())
				.filter((line) => line);
		}

		(main = document.querySelector('#main')), (textarea = main.querySelector(`div[contenteditable="true"]`));
		if (!textarea) throw new Error('Não há uma conversa aberta');

		for (const line of lines) {
			console.log(line);
			textarea.focus();
			/**
			 * This function is deprecated but is the only way to send a message
			 */
			document.execCommand('insertText', false, line);
			textarea.dispatchEvent(new Event('change', { bubbles: true }));

			setTimeout(() => {
				(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
			}, 100);

			if (lines.indexOf(line) !== lines.length - 1) await new Promise((resolve) => setTimeout(resolve, 250));
		}

		return lines.length;
	} catch (error) {
		console.error(error);
	}
}

const song = [
	"	I took my drugs and took my lovin' when I left out the spot",
	"I left the party with a Barbie, markin' X on the dot",
	"She calls my phone up but I told her, I'm a loner (uh)",
	'But she likes my watch and my droptop and my persona (uh)',
	'We hit the highway, 1-5-5, with my whole foot on the dash',
	"She's in my ear, she's got no fear, she could care less if we crash",
	"But on my radar, I've got some nerve to play hard",
	"I've waited for my chance, but playboys we don't dance, dance, dance",
	'I gave my heart',
	"Speedin' car goin' ninety in the rain",
	"She took my heart, filled it with nothin' but pain",
	'This beat in my hands is not for romance',
	"I wanna stay but, playboys, we don't dance, dance, dance",
	"So I won't dance again, oh, baby",
	"No, I won't dance again, ooh, yeah (uh)",
	"No, I won't dance again",
	"No, I won't dance again",
	'Pretty baby, ooh',
	"Oh, face in the daylight, wastin' time on the stars in the sky",
	"She's got my pager, play games of love all on my eyes",
	"Then I'm reminded, love don't come 'til you find it",
	"I just hope that it's workin', I'm yearnin', I'm searchin', uh",
	'The afterparty was on Wilson and 73rd',
	'You got the notion that somebody else was with me first',
	'But on my radar, you had some nerve to play hard',
	"You took away my chance, but playboys we don't dance, dance, dance",
	'I gave my heart (uh)',
	"Speedin' car goin' ninety in the rain",
	"She took my heart, filled it with nothin' but pain",
	'This beat in my hands is not for romance',
	"I wanna stay but, playboys, we don't dance, dance, dance",
	"So I won't dance again, oh, baby",
	"No, I won't dance again, ooh, yeah (uh)",
	"No, I won't dance again",
	"No, I won't dance again",
	'Pretty baby, ooh'
];

sendMessage(song);
// A mexican song
sendMessage(`
Llegó una morra a la casa pa' ayudarle a mi jefita
Directo de Matehuala y que es que se llama Lupita
Ella muy atentamente hace todo lo que le pida
Sacude, barrea y trapea, y es re-buena en la cocina

Un día andaba viendo la tele, yo andaba tirando hueva
Y ella fregaba los pisos enseñándome las tetas
Como no podía moverme, fue que le pedí un favor
Y como ella es muy amable, accedió sin objeción

Sácame la verga, Lupe, ven y dame unas mamadas
Porque ando bien cachondo y la traigo bien parada
Sácame la verga, Lupe, para hacerme vomitar
Los mecos que te comas luego te vas a limpiar
`);
