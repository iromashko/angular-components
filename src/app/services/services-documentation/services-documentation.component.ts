import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-services-documentation',
  templateUrl: './services-documentation.component.html',
  styleUrls: ['./services-documentation.component.scss'],
})
export class ServicesDocumentationComponent implements OnInit {
  public user: User = new User();

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserById(1).subscribe({
      next: (response: any) => {
        this.user = response;
        console.log(this.user);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log(`Done`);
      },
    });
  }
}
