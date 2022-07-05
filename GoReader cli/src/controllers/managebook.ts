import axios from 'axios';
import { prompt } from 'inquirer';
//import { v4 } from 'uuid';
import { baseUrl } from '..';
import { deleteContact } from './delete.book';
//import figlet from 'figlet';

export async function managebook () {

	const { book } = await prompt({
		type: 'list',
		name: 'book',
		message: 'select one please ',
		choices: ['add book','view book','search book','delete book '],
		filter: (val) => val.toLowerCase(),
	});
		if ( book === 'add book') {
			const boooks= await prompt([
  
				{
					type: 'input',
					name: 'title',
					message: 'Enter book title  ',
				},
				
				{
					type: 'input',
					name: 'type',
					message: 'Enter book type  ',
				},
			
				{
					type: 'input',
					name: 'author',
					message: 'Enter book author  ',
				},
				{
					type: 'input',
					name: 'pages',
					message: 'Enter book pages ',
				},
			
				{
					type: 'input',
					name: 'cost',
					message: 'Enter book cost ',
				},
				{
					type: 'input',
					name: 'description',
					message: 'Enter book description ',
				},
			])


			await axios.post(baseUrl+'/Book' ,
			{
				
				...boooks,
			},
	
			
			
			
		).catch(function (error) {
	
			console.log(error);
		  })
	
	
		  console.log(`Book ${boooks.title}, has been added ✅`);
		}


		
	/// view all books it is work 
		if (book === 'view book')
		try{
			const { data: Book } = await axios.get(baseUrl +'/Bookg')
			const formattedContacts = Book.map((c: any) => ({ title: c.title, type: c.type,author: c.author, pages: c.pages,cost: c.cost,description: c.description}));
			console.table(formattedContacts);
	}
		catch (error) { 
	 console.log(error)
	
	///// serch bu title it is work 
		}else if  (book === 'search book'){
			const query = await prompt([
				{
					type: 'input',
					name: 'title',
					message: 'Enter book title to search  or all boks will show  ',
				},
			
			]);
		
			const { data: book } = await axios.get(baseUrl + '/Bookg', {
				params: query,
			});
			const formattedContacts = book.map((c: any) => ({title: c.title, type: c.type,author: c.author, pages: c.pages,cost: c.cost,description: c.description}));
			console.table(formattedContacts);

	
	
		}

		else if (book === 'delete book '){
	
			await deleteContact()
			.catch(function (error) {
	
				console.log(error);
			  })
			
				console.log(`book  ${book.title}, has been deleted`);

	}

}





			
		  

		

		  

		
		
	



	
	


		

	


