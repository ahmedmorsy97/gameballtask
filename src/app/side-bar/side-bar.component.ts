import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @Output() activeViewName = new EventEmitter<string>();
  activeBtn = 'gameplan';
  btns = [
    {
      name: 'dashboard',
      title: 'Dashboard',
      img: {
        src: '../../assets/svgs/dashboard.svg',
        alt: 'dashboard logo',
      },
    },
    {
      name: 'gameplan',
      title: 'Game Plan',
      img: {
        src: '../../assets/svgs/gameplan.svg',
        alt: 'gameplan logo',
      },
    },
    {
      name: 'levels',
      title: 'Levels',
      img: {
        src: '../../assets/svgs/levels.svg',
        alt: 'levels logo',
      },
    },
  ];

  chooseTab(name: string) {
    this.activeBtn = name;
    this.activeViewName.emit(name);
  }

  constructor() {}

  ngOnInit() {}
}
