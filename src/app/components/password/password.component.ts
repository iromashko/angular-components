import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  public passwordStrengthPercent = 0;

  private currentPassword = '';

  public set password(value: string) {
    this.currentPassword = value;
    this.updatePasswordStrength(value);
  }

  public get password(): string {
    return this.currentPassword;
  }

  public get has8Characters(): boolean {
    return this.currentPassword.length >= 8;
  }

  public get hasCapitalLetter(): boolean {
    return /(.*[A-Z].*)/.test(this.currentPassword);
  }

  public get hasNumber(): boolean {
    return /(.*\d.*)/.test(this.currentPassword);
  }
  public get hasSpecialCharacters(): boolean {
    return /(\W)/.test(this.currentPassword);
  }

  private updatePasswordStrength(value: string): void {
    let passwordStrength = 0;

    if (this.has8Characters) {
      passwordStrength += 25;
    }

    if (this.hasCapitalLetter) {
      passwordStrength += 25;
    }
    if (this.hasNumber) {
      passwordStrength += 25;
    }
    if (this.hasSpecialCharacters) {
      passwordStrength += 25;
    }

    this.passwordStrengthPercent = passwordStrength;
  }

  constructor() {}

  ngOnInit(): void {}
}
