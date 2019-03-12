import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedserviceService {

// private datum=new Subject<any>();
// datum$=this.datum.asObservable();

// publishData(data:any){
//   this.datum.next(data);
// }
Tabthird: [];
Tab=[];
readonly TabSelections=[];
readonly ThirdSelections=[];

moveAndOverwriteSelectedRecords(fromTable: any[], toTable: any[]) {
  const selections = fromTable === this.Tab ? this.TabSelections : this.ThirdSelections;
  selections.forEach(selectedRecord => {
    const removedRecordIndex = fromTable.findIndex(record => record === selectedRecord);
    const removedRecord = fromTable.splice(removedRecordIndex, 1)[0];
    const indexInSecondTable = toTable.findIndex(record => record.cost_code === removedRecord.cost_code);
    indexInSecondTable !== -1
      ? toTable[indexInSecondTable] = removedRecord
      : toTable.push(removedRecord);
  });
  selections.length = 0;
}

 constructor() { }
}
