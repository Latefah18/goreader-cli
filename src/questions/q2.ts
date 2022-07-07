
import { prompt } from 'inquirer';
import { Chalk } from 'chalk';
import {  managebook } from '../controllers/managebook';
import {managerivew}from'../controllers/managerivew';
import figlet from 'figlet';
import { managequotes } from '../controllers/managequotes';
import { manageinfo } from '../controllers/manageinfo';



export async function q2() {
	const { q2Answer } = await prompt({
		type: 'list',
		name: 'q2Answer',
		message: 'Please choose one of our services !',
		choices: [
			'1- Manage Book 📚',
			'2- Manage rivew 📝',
			'3- Manage qutes ✌️ ✌️ ',
			'4- Manage persona info  🕵🏻‍♂️  ',
			'5- Quit 🙄 ',
		],
		filter: (val) => +val[0],

		
	});
	
	switch (q2Answer) {

		case 1:
			await managebook();
		
			break;

		case 2:
			await managerivew();
			break;

		case 3:
			await managequotes ();
			break;
		case 4:
			await manageinfo ();
			break;

		case 5:
			console.log(figlet.textSync('Thank you !', {
				font: 'Ghost',
				horizontalLayout: 'default',
				verticalLayout: 'default',
				width: 80,
				whitespaceBreak: true
			}));
			process.exit(0);

		default:
			    break;
		
	

		}
		
}


