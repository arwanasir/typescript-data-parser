import {User,Order} from '../models';

export function summary(users:User[],orders:Order[]):void{
    console.log("summary\n");
    console.log(`Total user: ${users.length}`);
    console.log(`Total order: ${orders.length}`);

    const totalAmount = orders.reduce((sum,order)=>{
        return sum + order.amount 
    }, 0);

    const averageAmount = orders.length>0 ? totalAmount/orders.length:0;

    console.log(`Total Amount: ${totalAmount}`);
    console.log(`Average Amount: ${averageAmount}`);

    const statusCount: Record<string,number> = {};

    orders.forEach(order =>{
        statusCount[order.status] = (statusCount[order.status] || 0) + 1 
    });
    console.log("order by status \n");
    Object.entries(statusCount).forEach(([status,count]) =>{
        console.log(`${status}: ${count}`);
    });


}