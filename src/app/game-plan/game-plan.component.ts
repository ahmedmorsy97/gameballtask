import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-plan',
  templateUrl: './game-plan.component.html',
  styleUrls: ['./game-plan.component.css'],
})
export class GamePlanComponent implements OnInit {
  activeTab = 'challenges';
  tabContentcards = [
    {
      isActive: true,
      title: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      desc:
        'It is a long established fact that a reader will be distracted by the readable eye.',
      diamond: '5,000 Frubies',
      star: '2,500 Points',
      flag: '3 Milestones',
      tag: 'The Big Thing',
    },
    {
      isActive: false,
      title: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      desc:
        'It is a long established fact that a reader will be distracted by the readable eye.',
      diamond: '5,000 Frubies',
      star: '2,500 Points',
      flag: '5,000 Frubies',
      tag: 'The Big Thing',
    },
    {
      isActive: true,
      title: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      desc:
        'It is a long established fact that a reader will be distracted by the readable eye.',
      diamond: '5,000 Frubies',
      star: '2,500 Points',
      flag: '5,000 Frubies',
      tag: 'The Big Thing',
    },
    {
      isActive: true,
      title: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      desc:
        'It is a long established fact that a reader will be distracted by the readable eye.',
      diamond: '5,000 Frubies',
      star: '2,500 Points',
      flag: '5,000 Frubies',
      tag: 'The Big Thing',
    },
    {
      isActive: true,
      title: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      desc:
        'It is a long established fact that a reader will be distracted by the readable eye.',
      diamond: '5,000 Frubies',
      star: '2,500 Points',
      flag: '3 Milestones',
      tag: 'The Big Thing',
    },
    {
      isActive: false,
      title: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      desc:
        'It is a long established fact that a reader will be distracted by the readable eye.',
      diamond: '5,000 Frubies',
      star: '2,500 Points',
      flag: '5,000 Frubies',
      tag: 'The Big Thing',
    },
  ];

  setTabName(name: string) {
    this.activeTab = name;
  }

  constructor() {}

  ngOnInit() {}
}
