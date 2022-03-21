import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  memberBeingEdited: object = null;


  constructor() { }
  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    let crewNames = this.crew.map(item => item["name"]);

    if (!crewNames.includes(memberName)){
      this.crew.push({name: memberName, firstMission: isFirst});
    } else {
      alert(`${memberName} is already in the list.`)
    }
  }

  remove(member: object) {
    let result = this.crew.filter(item => item !== member);
    this.crew = result;
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member["name"] = name;
    this.memberBeingEdited = null;
  }
}
