import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.scss'],
})
export class LinkedinPostComponent implements OnInit {
  constructor(public router: Router) {}

  public get linkedinMessage(): string {
    const base = 'https://www.linkedin.com/shareArticle?mini=true';
    const currentSite = `&url=http://google.com${this.router.url}`;

    return `${base}${currentSite}`;
  }

  ngOnInit(): void {}
}
