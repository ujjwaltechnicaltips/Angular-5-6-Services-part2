import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiodataService {

  constructor() { }

howservicesWorks()
{
  return "this is our services work";
}

biodata(){
 return [
   {"name":"Pushpendra","age":23,"address":"Noida"},
  {"name":"Tripti","age":32,"address":"Noida"}
];
}

}
