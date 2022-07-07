
import axios from 'axios';
import { prompt } from 'inquirer';
//import { v4 } from 'uuid';
import { baseUrl} from '..';
import { deletequotes } from './deletequotes';

export async function managequotes () {
	const  {managequotes} = await prompt({
		type: 'list',
		name: 'managequotes',
		message: 'select one please ',
		choices: ['add quotes','view quotes','delete quotes'],
		filter: (val) => val.toLowerCase(),
	});

			if (managequotes== 'add quotes'){
				const quotes= await prompt([
					{
						type: 'input',
						name: 'comment',
						message: 'Enter your quotes ',
						
					},
				])
			await axios.post(baseUrl+'/quotes' ,
			{
				
				...quotes,
			},

			
		).catch(function (error) {
	
			console.log(error);
		  })
	
	
		  console.log('quotes has been added ✅');
		}
			


			else if (managequotes== 'view quotes'){
				const query = await prompt([
					{
						type: 'input',
						name: 'comment',
						message: 'Enter quotes to search  or all quoteswill show  ',
					},
				
				]).catch(function (error) {
	
					console.log(error);
				  })
			
				const { data: quo} = await axios.get(baseUrl + '/quotes', {
					params: query,
				});
				const formattedContacts = quo.map((c: any) => ({comment: c.comment }));
				console.table(formattedContacts);
	
			}

			if (managequotes== 'delete quotes'){

		
				await deletequotes().catch(function (error) {
	
					console.log(error);
				  })
				
				
		}
		

	}

