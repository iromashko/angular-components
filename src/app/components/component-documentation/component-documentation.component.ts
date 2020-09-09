import { Component, ViewChild } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';
import { LoaderType } from '../loader/models/loader-type.enum';
import { TabInterface } from '../tabs/tabs.component';
import { RibbonType } from '../ribbon/ribbon-type';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';
import { ButtonMeta } from '../button-toggle/button-meta.model';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SocialMedia } from '../social-media-bar/social-media.enum';
import { ISocialMediaIcon } from '../social-media-bar/social-media-icon.interface';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'],
})
export class ComponentDocumentationComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ];
  public progressValue = 25;
  public loaderType = LoaderType.Loading;
  public toggleValue = false;
  public RibbonType = RibbonType;
  public RibbonLocation = RibbonLocation;
  public ribbonStyle = {
    type: RibbonType.Info,
    location: RibbonLocation.BottomLeft,
  };
  public loaded = true;

  public socialMedia: ISocialMediaIcon[] = [
    { href: 'http://facebook.com', type: SocialMedia.Facebook },
    { href: 'http://facebook.com', type: SocialMedia.Instagram },
    { href: 'http://facebook.com', type: SocialMedia.LinkedIn },
    { href: 'http://facebook.com', type: SocialMedia.Twitter },
    { href: 'http://facebook.com', type: SocialMedia.YouTube },
  ];

  public debounceOutput = 'Debounce text...';
  public selectedTab = 0;
  public tabs: TabInterface[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];
  public buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ];

  @ViewChild(SnackbarComponent) public snackBar: SnackbarComponent;

  public snackbarShow(): void {
    this.snackBar.showMessage('Snackbar Example');
  }

  public debounceExampleMethod(value: string): void {
    this.debounceOutput = value;
  }
}
