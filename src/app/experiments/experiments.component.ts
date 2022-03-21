import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ["Mars soil sample", "Plant growth in habitat", "Human bone density"]
  selectedTest = "";

  constructor() { }
  ngOnInit() {
  }

  addTest(newTest: string) {
    if (this.experiments.includes(newTest)) {
      alert("We already have that experiment on list.")
    } else { 
      this.experiments.push(newTest);
    }
  }

  removeTest(targetTest: string) {
    let result = this.experiments.filter(item => item !== targetTest);
    this.experiments = result;
  }

  pickTest(testName: string) {
    this.selectedTest = testName;
  }

  edit(newName: string) {

      let index = this.experiments.indexOf(this.selectedTest);
      this.experiments[index] = newName;
      this.selectedTest = "";
  }
}
