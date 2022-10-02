import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  fontColor = 'blue';
  sayHelloId= 1;
  canClick = false;
  message = 'Hello, Wolrd!';

  constructor() { }

  ngOnInit(): void {
  }

  sayMessage() {
    alert(this.message);
  }

}
