
import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function deleteContact() {
	const { data: boks } = await axios.get(baseUrl + '/Bookg');
	const formattedContacts = boks.map((c: any) => ({ title: c.title }));
	console.table(formattedContacts);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const bok = boks[index];
	await axios.delete(baseUrl + `/book/${bok.book_id}`);
	console.log(`Book  ${bok.title} has been deleted ✅`);
}

