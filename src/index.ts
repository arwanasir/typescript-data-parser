import {loadData} from './services/fileLoader';
import { validateUser,validateOrder } from './services/validator';
import {summary} from './services/summary';

const filePath =  process.argv[2];

if(!filePath){
    console.error("provide a JSON file path");
    process.exit(1);
}

try{
    const {users, orders}= loadData(filePath);
    const userErrors = validateUser(users);
    const orderErrors = validateOrder(orders,users);
    const allErrors = [...userErrors,...orderErrors];
    if(allErrors.length>0){
        console.error(`validation Error`);
        allErrors.forEach((error) =>{
            console.error(`Type:${error.type}`)
            console.error(`Id: ${error.id}`);
            console.error(`Errors:`)
            error.errors.forEach(msg => {
                console.error(`${msg}`);
            })
        });
        process.exit(1);
    }


    summary(users,orders);
    process.exit(0);
}catch(error){
    console.error(error);
    process.exit(1);
}