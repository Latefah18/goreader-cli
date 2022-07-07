
import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function updateinfo() {
	try{
	const { data: user } = await axios.get(baseUrl + '/users');
	const formattedContacts = user.map((c: any) => ({ username: c.username, email: c.email}));
	console.table(formattedContacts);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const use = user[index];

	const newinfo = await prompt([
		{
			type: 'input',
			name: 'name',
			message: `Enter new username or press enter to keep it as (${use.username})`,
			filter: (val) => {
				if (val.trim() === '') return use.username;
				return val;
			},
		},
		{
			type: 'input',
			name: 'email',
			message: `Enter new email or press enter to keep it as (${use.email})`,
			filter: (val) => {
				if (val.trim() === '') return use.email;
				return val;
			},
		},
	]);

	await axios.patch(baseUrl + `/user/${use.user_id}`, newinfo);

	console.log(`user information  updated ✅`);


}
catch(error){console.log(error)}
}
