
import axios from 'axios';
import { prompt } from 'inquirer';
//import { v4 } from 'uuid';
import { baseUrl } from '..';

export async function writerivew (){ 

	try{
		const { data: managerive} = await axios.get(baseUrl + '/users');
		const formattedContac = managerive.map((c: any) => ({ username: c.username}));
		console.table(formattedContac);

		const  {userUser_id}  = await prompt({
			type: 'input',
			name: 'userUser_id',
			message: 'Enter index for you account',
			filter: (val) => +val,
		});
		const use = managerive[userUser_id];
	
		const { data: managerivew} = await axios.get(baseUrl + '/Bookg');
		const formattedContact = managerivew.map((c: any) => ({ title: c.title }));
		console.table(formattedContact);


		const  bookBook_id:any = await prompt({
			type: 'input',
			name: 'bookBook_id',
			message: 'Enter index of the book',
			filter: (val) => +val,
		});
		const use2 = managerivew[bookBook_id];
			const riv = await prompt([
				{
					type: 'input',
					name: 'comment',
					message: 'Enter your comment',
				},
				{
					type: 'number',
					name: 'rating',
					message: 'select rating',
					//choices: ['5','4','3','2','1']
				},
             
			]);
		    const u=userUser_id;
			const b=bookBook_id;
				await axios.post(baseUrl+`/Rivew/${use.userUser_id}/${use2.bookBook_id},` ,
				{
				       ...riv,
					   
					   
				},
		
				)
				console.log(`rivew  has been adedde`);

			}
			catch (error) { 
				console.log(error)	
				
		}
			
	}

