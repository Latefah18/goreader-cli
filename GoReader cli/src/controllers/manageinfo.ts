import axios from 'axios';
import { prompt } from 'inquirer';
import { getusers } from './getusers';
import { updateinfo } from './update.info';
//import { v4 } from 'uuid';
//import { baseUrl, token } from '..';

export async function manageinfo () {

	const  {all} = await prompt({
		type: 'list',
		name: 'all',
		message: 'select one please ',
		choices: ['update info','view info'],
		filter: (val) => val.toLowerCase(),
	});

	if (all === 'update info') {
	
		await updateinfo().catch(function (error) {
	
			console.log(error);
		  })
		
		
		
	}

	else if (all === 'view info'){
	
		 await getusers().catch(function (error) {
	
			console.log(error);
		  })
		

		}		
		}
		






