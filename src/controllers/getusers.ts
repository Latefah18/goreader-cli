

import axios from 'axios';
import { baseUrl } from '..';

export async function getusers() {
	const { data: user} = await axios.get(baseUrl + '/users');
	const formattedContacts = user.map((c: any) => ({ username: c.username, email: c.email }));
	console.table(formattedContacts);
}


