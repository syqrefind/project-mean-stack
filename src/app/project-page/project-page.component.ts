import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})


export class ProjectPageComponent implements OnInit {


   TableOne:Array<any>;
   columns = ['cost_code', 'name'];
   Tab=[]
   Tabthird=[]
   pager: any = {};
   pagedItems: any[];
   selectedAll: any;

  constructor(public resourceService: ResourceService) {}

  ngOnInit() {
        this.resourceService.readResource({title:'project0'}).subscribe(
          response => {

            this.TableOne = response.data;
            this.setPage(1);

          }  ) }


          readonly TableOneSelections = [];
          readonly TabSelections = [];
          readonly TabthirdSelections = [];



  Delete(fromTable: any[], toTable: any[]) {
        const selections = fromTable === this.Tab ? this.TabSelections : this.TabthirdSelections;
        selections.forEach(selectedRecord => {
          const removedRecordIndex = fromTable.findIndex(record => record === selectedRecord);
          const removedRecord = fromTable.splice(removedRecordIndex, 1)[0];
          const indexInSecondTable = toTable.findIndex(record => record.cost_code === removedRecord.cost_code);
          indexInSecondTable !== 0
            ? toTable[indexInSecondTable] = removedRecord
            : toTable.push(removedRecord)
        });
        selections.length = 0;
      }

  moveAndOverwriteSelectedRecords(fromTable: any[], toTable: any[]) {
        const selections = fromTable === this.TableOne ? this.TableOneSelections : this.TabSelections;
        selections.forEach(selectedRecord => {
          const removedRecordIndex = fromTable.findIndex(record => record === selectedRecord);
          const removedRecord = fromTable.splice(removedRecordIndex, 1)[0];
          const indexInSecondTable = toTable.findIndex(record => record.cost_code === removedRecord.cost_code);
          indexInSecondTable !== -1
            ? toTable[indexInSecondTable] = removedRecord
            : toTable.push(removedRecord)
        });
        selections.length = 0;
      }

  // moveTothird(fromTable: any[], toTable: any[]) {
  //   const selections = fromTable === this.Tab ? this.TabSelections : this.TabthirdSelections;
  //   selections.forEach(selectedRecord => {
  //     const removedRecordIndex = fromTable.findIndex(record => record === selectedRecord);
  //     const removedRecord = fromTable.splice(removedRecordIndex, 1)[0];
  //     const indexInSecondTable = toTable.findIndex(record => record.cost_code === removedRecord.cost_code);
  //     indexInSecondTable !== -1
  //       ? toTable[indexInSecondTable] = removedRecord
  //       : toTable.push(removedRecord)
  //   });
  //   selections.length = 0;
  // }

  getSelectedRecords(fromTable: any[]) {
        const selections = fromTable === this.TableOne ? this.TableOneSelections : this.TabSelections;
        console.log(selections)
      }

  onSelectionChanged(event, record, table) {
        const selections = table === this.TableOne ? this.TableOneSelections : this.TabSelections;
        event.target.checked
          ? selections.push(record)
          : selections.splice(selections.findIndex(selection => selection.cost_code === record.cost_code), 1)
        }

setPage(page: number) {
        this.pager = this.resourceService.getPager(this.TableOne.length, page);

        this.pagedItems = this.TableOne.slice(this.pager.startIndex, this.pager.endIndex +1);
 }

getpagertwty(page: number) {
      this.pager = this.resourceService.getPagertwty(this.TableOne.length, page);

      this.pagedItems = this.TableOne.slice(this.pager.startIndex, this.pager.endIndex +1);
}

getpagerthid(page: number) {
      this.pager = this.resourceService.getPagerthid(this.TableOne.length, page);

      this.pagedItems = this.TableOne.slice(this.pager.startIndex, this.pager.endIndex +1);
}

projecttwo() {
  this.resourceService.readResource({title:'project1'}).subscribe(
    response => {

      this.TableOne = response.data;
      console.log(this.TableOne)
      this.setPage(1);

    }  ) }
    
// projectone() {
//   this.resourceService.readResource({title:'project0'}).subscribe(
//         response => {
    
//           this.TableOne = response.data;
//           console.log(this.TableOne)
//           this.setPage(1);
    
//         }  ) }

selectAll() {
          for (var i = 0; i < this.TableOne.length; i++) {
            this.TableOne[i].selected = this.selectedAll;
          }
        }

checkIfAllSelected() {
          this.selectedAll = this.TableOne.every(function(item:any) {
              return item.selected == true;
            })
        }

        moveten(fromTable: any[], toTable: any[]) {
          const selections = fromTable === this.TableOne.slice() ? this.TableOneSelections : this.TabSelections;
          selections.forEach(selectedRecord => {
            const removedRecordIndex = fromTable.findIndex(record => record === selectedRecord);
            const removedRecord = fromTable.splice(removedRecordIndex, 1)[0];
            const indexInSecondTable = toTable.findIndex(record => record.cost_code === removedRecord.cost_code);
            indexInSecondTable !== -1
              ? toTable[indexInSecondTable] = removedRecord
              : toTable.push(removedRecord)
          });
          selections.length = 0;
        }
        // moveten(fromTable: any[], toTable: any[]) {
        //   const selections = fromTable === this.TableOne.slice(0,10) ? this.TableOneSelections : this.TabSelections;
        //   selections.forEach(selectedRecord => {
        //     const removedRecordIndex = fromTable.findIndex(record => record === selectedRecord);
        //     const removedRecord = fromTable.splice(removedRecordIndex, 1)[0][1][2][3][4][5][6][7];
        //     const indexInSecondTable = toTable.findIndex(record => record.cost_code === removedRecord.cost_code);
        //     indexInSecondTable !== -1
        //       ? toTable[indexInSecondTable] = removedRecord
        //       : toTable.push(removedRecord)
        //   });
        //   selections.length = 0;
        // }
}



