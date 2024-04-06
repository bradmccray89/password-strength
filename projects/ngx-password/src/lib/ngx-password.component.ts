import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-password',
  templateUrl: './ngx-password.component.html',
  styleUrls: ['./ngx-password.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class NgxPasswordComponent {
  @Input() passwordInput: string = '';
  // strength is a number between 0 and 100
  passwordStrength: number = 0;

  public onInput() {
    console.log('Password', this.passwordInput);
    this.calculatePasswordStrength(this.passwordInput);
  }

  private calculatePasswordStrength(password: string) {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
    }

    switch (strength) {
      case 0:
        this.passwordStrength = 0;
        break;

      case 1:
        this.passwordStrength = 25;
        break;

      case 2:
        this.passwordStrength = 50;
        break;

      case 3:
        this.passwordStrength = 75;
        break;

      case 4:
        this.passwordStrength = 100;
        break;
    }
    console.log('Password strength', this.passwordStrength);
  }
}
