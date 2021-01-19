import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent {
  date = new Date();
}