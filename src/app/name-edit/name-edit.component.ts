import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-name-edit',
  templateUrl: './name-edit.component.html',
  styleUrls: ['./name-edit.component.css']
})
export class NameEditComponent implements OnInit {

  constructor() { }

  name = new FormControl('');
  ngOnInit(): void {
  }

  updateName(){
    this.name.setValue('Nani!');
  }
}
