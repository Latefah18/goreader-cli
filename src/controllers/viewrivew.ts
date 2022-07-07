
import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function viewrivew() {

    try{
    const { data: riv } = await axios.get(baseUrl + '/Bookg');
    const formattedContacts = riv.map((c: any) => ({ book_id: c.book_id,title:c.title}));
    console.table(formattedContacts);

    const { index } = await prompt({
        type: 'number',
        name: 'index',
        message: 'Enter index to view rivews ',
        filter: (val) => +val,
    });
    const rivs = riv[index];
    const y= await axios.get(baseUrl + `/Rivew/${rivs.book_id}`);
    console.table(y.data);

}
catch (error) { 
    console.log(error)
    
}

}
