import axios from 'axios';
import { prompt } from 'inquirer';
//import { v4 } from 'uuid';
import { baseUrl } from '..';
import { viewrivew } from './viewrivew';
import { writerivew } from './writerivew';


export async function managerivew() {
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: 'select one please ',
		choices: ['add rivew to book','view rivew by book'],
		filter: (val) => val.toLowerCase(),
	});

	if (q1Answer === 'add rivew to book') {
	
		await writerivew ()
		
		
	}

	else if (q1Answer === 'view rivew by book'){
	
		await viewrivew()

		}		
   }
		
		

















		