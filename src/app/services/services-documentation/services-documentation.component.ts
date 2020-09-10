import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { SnackbarService } from '../snackbar.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { ILocalStorage } from '../../services/ILocalStorage';

@Component({
  selector: 'app-services-documentation',
  templateUrl: './services-documentation.component.html',
  styleUrls: ['./services-documentation.component.scss'],
})
export class ServicesDocumentationComponent implements OnInit {
  public user: User = new User();
  public state: ILocalStorage = {};

  constructor(
    public userService: UserService,
    public snackbarService: SnackbarService,
    public localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.localStorageService.state$.subscribe((data) => {
      this.state = data;
    });

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

  public updateState(): void {
    this.localStorageService.setState('hello', 'angular');
  }
}
