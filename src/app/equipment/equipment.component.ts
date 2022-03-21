import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipments: string[] = ["Habitat dome", "Drones", "Food containers", "Oxygen tanks"]
  clickedItem: string = "";

  constructor() { }
  ngOnInit() {
  }

  addEquip(itemName: string) {
    if (!this.equipments.includes(itemName)) {
      this.equipments.push(itemName);
    } else {
      alert(`${itemName} is already in the list.`)
    }
  }

  removeItem(item: string) {
    let index = this.equipments.indexOf(item);
    this.equipments.splice(index, 1);
  }

  picked(name: string) {
    this.clickedItem = name;
  }

  editItemName(newName: string, currentName: string) {
    let index = this.equipments.indexOf(currentName);
    this.equipments[index] = newName;
    this.clickedItem = "";
  }
}
