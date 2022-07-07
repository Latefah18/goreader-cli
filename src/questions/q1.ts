import { prompt } from 'inquirer';
import figlet from 'figlet';
import axios from 'axios';
import { baseUrl, globalData } from '..';

export async function q1() {
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: 'Do you have account ',
		choices: ['yes,login','no,create one','quit'],
		filter: (val) => val.toLowerCase(),
	});

	if (q1Answer === 'quit') {
		console.log(figlet.textSync('see you again', {
			font: 'Ghost',
			horizontalLayout: 'default',
			verticalLayout: 'default',
			width: 80,
			whitespaceBreak: true
		}));
		
		process.exit(0);
	}
//********************Login *********************/
	if (q1Answer === 'yes,login'){
	const login = await prompt([
		{
			type: 'input',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
		{
			type: 'input',
			name: 'username',
			message: 'Enter your username ',
			
		},
		
        
	]);
	try{
	const check2=await axios.post(baseUrl+'/user/login' ,
	{
		... login,
	});

	const newToken = check2.data.token;
	globalData.token = newToken;
	console.log(`Welcome  ${login.username}, to Reader Word ✅`);

   //console.log(globalData.token)
} catch (err: any) {
	console.log(err?.response?.data);
	process.exit(0);
}

///********************new user register******************/
}else if  (q1Answer === 'no,create one'){
		const  r= await prompt([

			{
				type:'password',
				name:'password',
				message: 'Enter your password 🔑 ',
			},
			{
				type: 'input',
				name: 'username',
				message: 'Enter your username 🥸 ',
				filter: (val) => val.toLowerCase(),
			},
            {
			type: 'input',
			name: 'email',
			message: 'Enter your email  ',

		}
		]);
		try{
		const check =await axios.post(baseUrl+'/users' ,
		{
			
			... r,
		},
	);
	const newTokens = check.data.token;
		//globalData.token = newTokens;
 console.log(`user ${r.username}, has been created ✅`);
	 
	} catch (err: any) {
		console.log(err?.response?.data);
		process.exit(0);

   }
		







}


}

