import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';



@Component({
  selector: 'app-project',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})


export class ProjectPageComponent implements OnInit {


  constructor(
    public resourceService: ResourceService
    ) {}


  TableOne: Array<any>;
   columns = ['cost_code', 'name'];
   Tab = [];
  // selectedAll: any;

  masterSelected: boolean;
  checklist: any;
  checkedList: any;


  readonly TableOneSelections = [];
  readonly TabSelections = [];

  ngOnInit() {
    this.resourceService.readResource(0, 10).subscribe(
      response => {
        // console.log(response.data);
        this.TableOne = response.data;
        // console.log(this.TableOne);
      }  ); }

  moveSelectedRecords(fromTable: any[], toTable: any[]) {
    const selections = fromTable === this.TableOne ? this.TableOneSelections : this.TabSelections;
    selections.forEach(selectedRecord => {
      const removedRecordIndex = fromTable.findIndex(record => record === selectedRecord);
      const removedRecord = fromTable.splice(removedRecordIndex, 1)[0];
      toTable.push(removedRecord);
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
        : toTable.push(removedRecord);
    });
    selections.length = 0;
  }

  getSelectedRecords(fromTable: any[]) {
    const selections = fromTable === this.TableOne ? this.TableOneSelections : this.TabSelections;
    console.log(selections);
  }

  onSelectionChanged(event, record, table) {
    const selections = table === this.TableOne ? this.TableOneSelections : this.TabSelections;
    event.target.checked
      ? selections.push(record)
      : selections.splice(selections.findIndex(selection => selection.cost_code === record.cost_code), 1);
  }

  // selectAll() {
  //   for (var i = 0; i < this.TableOne.length; i++) {
  //     this.TableOne[i].selected = this.selectedAll;
  //   }
  // }
  // checkIfAllSelected() {
  //   this.selectedAll = this.TableOne.every(function(item:any) {
  //       return item.selected == true;
  //     })
  // }

  // addToAnotherTable(ind) {
  //   var index = this.Tab.indexOf(ind);
  //   if (index > -1) {
  //     this.Tab.splice(index, 1);
  //   }
  //   else{
  //     this.Tab.push(ind);
  //   }
  // }

  checkUncheckAll() {
    for (let i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every((item: any) => {
        return item.isSelected == true;
      });
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedList = [];
    for (let i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected) {
      this.checkedList.push(this.checklist[i]);
      }
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

}




