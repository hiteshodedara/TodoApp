export interface Todo {
    key:string
    title:string
    id:number
    assigneduser?:{
        userid:number;
        username:string;
    }
    todocreater?:{
        uid:number;
        username:string;
        sdate:any;
        edate:any;
    }
}
