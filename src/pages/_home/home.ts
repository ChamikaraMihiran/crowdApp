import { Component } from '@angular/core';
import { IonicPage, NavController, Events, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  flashCards = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.flashCards = [
      {
        front: { image: 'assets/img/flashcards/1.jpg', title: 'The Minister of Finance, Sri Lanka, visited Crowderia', subtitle: '' },
        back: {
          title: 'The Minister of Finance, Sri Lanka, visited Crowderia',
          subtitle: '',
          content: 'How exiting wasn´t it to have had such a distinguished guest as the Minister of Finance, Mr. Ravi Karunanayaka, visiting our office in Nawala. He was really interested in our business and progress but also in the industry as an important contributor to the GDP growth. Next time we will tell him about the Crowderia Center of IT-Innovation!!!!'
        }
      },
      {
        front: {
          image: 'assets/img/flashcards/2.jpg',
          title: 'FIT SIXES 2017',
          subtitle: ''
        },
        back: {
          title: 'FIT SIXES 2017',
          subtitle: '',
          content: 'The annual six-a-side softball cricket tournament is the tremendous cricket championship organized by Faculty of Information technology, University of Moratuwa.'
        }
      },
      {
        front: {
          image: 'assets/img/flashcards/4.jpg',
          title: 'Crowd Family',
          subtitle: ''
        },
        back: {
          title: 'Crowd Family',
          subtitle: '',
          content: ''
        }
      },
        {
        front: {
          image: 'assets/img/flashcards/6.jpg',
          title: 'Crowdria day out to Ahungalla 2016',
          subtitle: ''
        },
        back: {
          title: 'Crowdria day out to Ahungalla 2016',
          subtitle: '',
          content: 'The day was rounded off with lights and sounds the DJ and prize awards.'
        }
        
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashCardPage');
  }

}
