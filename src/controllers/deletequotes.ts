
import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function deletequotes() {
	const { data: boks } = await axios.get(baseUrl + '/quotes');
	const formattedContacts = boks.map((c: any) => ({ comment: c.comment }));
	console.table(formattedContacts);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const bok = boks[index];
	await axios.delete(baseUrl + `/quotes/${bok.quotes_id}`);
	console.log(`quotes has been deleted ✅`);
}
