
import axios from 'axios';
import { prompt } from 'inquirer';
//import { v4 } from 'uuid';
import { baseUrl, globalData } from '..';

export async function managebookone () {
 const book = await prompt([
  
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
        name: '"description',
        message: 'Enter book"description ',
    },
                     


        ])
        

        await axios.post(baseUrl+'/Book' ,
        {
            
            ...book ,
        },
        {
			headers: {
				authorization: 'Bearer ' + globalData.token,
                
                
			},
            
		}
        
        
        
    ).catch(function (error) {

        console.log(error);
      })


     
      console.log(`Book  ${book.title}, has been added ✅`);
    }