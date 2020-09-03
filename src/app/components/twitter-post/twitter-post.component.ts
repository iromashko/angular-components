import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss'],
})
export class TwitterPostComponent {
  @Input() public baseHref = 'http://google.com';
  @Input() public hashTags: string[] = ['JS', 'Angular', 'TS'];

  constructor(public titleService: Title) {}

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(
      `Check out ${this.titleService.getTitle()} and lorem ipsum`
    );

    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute() {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `http://twitter.com/intent/tweet?hashTags=${encodeURIComponent(
      hashTags
    )}&related=lorem_ipsum&url=${route}&text=`;
  }
}
