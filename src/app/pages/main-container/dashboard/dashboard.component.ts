import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  test: boolean;

  data: any = [];
  data: any = [
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295'
    }
  ];

  constructor() {
    this.test = true;
  }

  ngOnInit() {
  }

}
