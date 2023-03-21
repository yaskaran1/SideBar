
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rt-side-bar',
  templateUrl: './rt-side-bar.component.html',
  styleUrls: ['./rt-side-bar.component.scss']
})
export class RtSideBarComponent implements OnInit {
  toggleStatus=false;
  dropdown_click=false;
  id:number=0;
  data=[
    {
      id:1,
      title:"Bots",
      parent: 0,
      iconPath: "https://dev.botpenguin.relinns.com.au/assets/version2/images/sidebar/tree_blue.svg"
    },
    {
      id:2,
      title:"yaskaran",
      parent: 1,
      iconPath: "https://dev.botpenguin.relinns.com.au/assets/version2/images/bots/website-bot.svg"
    },
    {
      id:3,
      title:"Rahul",
      parent: 1,
      iconPath: "https://dev.botpenguin.relinns.com.au/assets/version2/images/bots/website-bot.svg"
    },
    {
      id:4,
      title:"Bot 2",
      parent: 0,
      iconPath: "https://dev.botpenguin.relinns.com.au/assets/version2/images/sidebar/tree_blue.svg"
    },
    {
      id:5,
      title:"Rajan",
      parent: 4,
      iconPath: "https://dev.botpenguin.relinns.com.au/assets/version2/images/bots/website-bot.svg"
    },
    {
      id:6,
      title:"Bot3",
      parent: 0,
      iconPath: "https://dev.botpenguin.relinns.com.au/assets/version2/images/sidebar/tree_blue.svg"
    },
    {
      id:7,
      title:"Sajan",
      parent: 6,
      iconPath: "https://dev.botpenguin.relinns.com.au/assets/version2/images/bots/website-bot.svg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleBar(dropclick:boolean){
    if(dropclick){
      this.dropdown_click=!this.dropdown_click;
    }
      this.toggleStatus=!this.toggleStatus;
  }
  dropdown(id:number,title:string ){
    this.id=id;
    this.dropdown_click=!this.dropdown_click;
  }

}
