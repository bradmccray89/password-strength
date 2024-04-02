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
  @Input() password: string = '';
  // strength is a number between 0 and 100
  passwordStrength: number = 0;

  public onInput() {
    console.log('Password changed', this.password);
    this.passwordStrength = this.calculatePasswordStrength(this.password);
  }

  private calculatePasswordStrength(password: string): number {
    let strength = 0;
    if (password.length > 0) {
      // Add points for password length
      strength += password.length * 4;
      // Add points for uppercase letters
      strength += this.countOccurences(password, /[A-Z]/) * 2;
      // Add points for lowercase letters
      strength += this.countOccurences(password, /[a-z]/) * 2;
      // Add points for numbers
      strength += this.countOccurences(password, /[0-9]/) * 4;
      // Add points for special characters
      strength += this.countOccurences(password, /[^a-zA-Z0-9]/) * 6;
      // Add points for consecutive uppercase letters
      strength -= this.countOccurences(password, /[A-Z]{2,}/) * 2;
      // Add points for consecutive lowercase letters
      strength -= this.countOccurences(password, /[a-z]{2,}/) * 2;
      // Add points for consecutive numbers
      strength -= this.countOccurences(password, /[0-9]{2,}/) * 2;
      // Add points for consecutive special characters
      strength -= this.countOccurences(password, /[^a-zA-Z0-9]{2,}/) * 2;
      // Deduct points for repeating characters
      strength -= this.countRepeatingChars(password) * 2;
    }
    return Math.max(0, Math.min(100, strength));
  }

  private countOccurences(password: string, pattern: RegExp): number {
    return (password.match(pattern) || []).length;
  }

  private countRepeatingChars(password: string): number {
    let repeatingChars = 0;
    for (let i = 0; i < password.length - 1; i++) {
      if (password.charAt(i) === password.charAt(i + 1)) {
        repeatingChars++;
      }
    }
    return repeatingChars;
  }
}
