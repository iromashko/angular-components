import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-services-documentation',
  templateUrl: './services-documentation.component.html',
  styleUrls: ['./services-documentation.component.scss'],
})
export class ServicesDocumentationComponent implements OnInit {
  public user: User = new User();

  constructor(
    public userService: UserService,
    public snackbarService: SnackbarService
  ) {}

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

  public callSnackbar(): void {
    this.snackbarService.callSnackbar('Snackbar Service Example');
  }
}
