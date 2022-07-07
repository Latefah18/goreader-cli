import { q1 } from './questions/q1';
import { q2 } from './questions/q2';
import chalk from 'chalk';
var chalkRainbow = require('chalk-rainbow')
export const baseUrl = 'http://0.0.0.0:3002';

export const globalData: any = {
	token: '',
};
let T5T = '';


async function start() {
	
	console.log();
	console.log();
	console.log(chalkRainbow('welcome to GoReader, Born to Read Go To Read !'));
	console.log();
	console.log();

	/// Q1/ please log in or create new acount 
	/// 1- Login
	////2-create account
	/// 2- Quit
	// await q1();

	/// Q2/ Tell logged in user about available options
	/// 1- 'add book',
	/// 2- 'add rivew ',
	/// 3- 'delete book',
	/// 4- 'express your self and write quotes',
	/// 5- 'Search book by name',
	////6- add frind to friend list 
	////7-add the read state to book 
	 await q1();
	while (true) {
		await q2();
		console.log();
		console.log();
	}
}

start();
