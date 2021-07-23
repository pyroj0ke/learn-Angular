import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'TestServer';

  username = '';
  isButtonAble = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }


  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  checkInputText(event: any): boolean {
    return event.target.value === '' ? this.isButtonAble = false: this.isButtonAble = true;
  }

  onClickButton(event: any) {
    this.username = '';
    this.isButtonAble = false;
  }
}
