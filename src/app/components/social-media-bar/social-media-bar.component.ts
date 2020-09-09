import { Component, OnInit, Input } from '@angular/core';
import { ISocialMediaIcon } from '../social-media-bar/social-media-icon.interface';
import { SocialMedia } from './social-media.enum';

@Component({
  selector: 'app-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss'],
})
export class SocialMediaBarComponent implements OnInit {
  @Input() public socialMedia: ISocialMediaIcon[] = [];
  public SocialMedia = SocialMedia;

  constructor() {}

  ngOnInit(): void {}
}
