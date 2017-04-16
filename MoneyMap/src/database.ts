import Dexie from 'dexie';

export class TransactionAppDB extends Dexie{
	transactions : Dexie.Table<ITransaction,number>;
	constructor(){
		super('MoneyMapAppDB');

		this.version(1).stores({
			transactions: '++id, amount, lat,ln, title ,imageUrl'
			
		});
		this.transactions.mapToClass(Transaction);
	}
} 

export interface ICategory{

}
export interface ITransaction{
	id?: number;
	amount: number;
	lat: number;
	ln: number;
	title: string;
	imageUrl: string;
}

export class Transaction implements ITransaction{
	id?: number;
	amount: number;
	lat: number;
	ln: number;
	title: string;
	imageUrl: string;

	constructor(amount:number, title:string, lat?:number, ln?: number,
		id?:number, imageUrl?:string){
		this.amount=amount;
		this.title= title;
		if(lat) this.lat= lat;
		if(ln) this.ln= ln;
		if(imageUrl) this.imageUrl = imageUrl;
		if(id) this.id	= id;


	}
	save(){
		return db.transactions.add(this);	
	}

	static all(){
		//TRansaction.all() => Todas  las transactions
		//Retorna un Promise
		return db.transactions.orderBy("id").reverse().toArray();
	}
}

export let db = new TransactionAppDB();