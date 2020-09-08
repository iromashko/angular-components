import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrls: ['./banner-cut-out.component.scss'],
})
export class BannerCutOutComponent implements OnInit {
  @Input() public imageUrl =
    'https://images.unsplash.com/photo-1538739204988-d0b7904aba5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80';
  @Input() title = 'Angular Components';

  constructor() {}

  ngOnInit(): void {}
}
