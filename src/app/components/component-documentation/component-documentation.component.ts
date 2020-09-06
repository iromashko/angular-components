import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';
import { LoaderType } from '../loader/models/loader-type.enum';
import { TabInterface } from '../tabs/tabs.component';

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

  public debounceOutput = 'Debounce text...';
  public debounceExampleMethod(value: string): void {
    this.debounceOutput = value;
  }
  public tabs: TabInterface[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];

  public selectedTab = 0;
}
