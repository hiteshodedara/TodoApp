export interface Todo {
    key:string
    value:string
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
