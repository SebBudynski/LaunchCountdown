import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit {
  countdownDate = new Date('Dec 31, 2024 23:59:59').getTime();
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  countdownFunction: any;

  ngOnInit() {
    this.countdownFunction = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);


      if (distance < 0) {
        clearInterval(this.countdownFunction);
      }

    }, 1000);
  }
}
