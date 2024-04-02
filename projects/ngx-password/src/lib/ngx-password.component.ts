import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-password',
  templateUrl: './ngx-password.component.html',
  styleUrls: ['./ngx-password.component.scss'],
})
export class NgxPasswordComponent {
  @Input() password: string = 'testing123';
  // strength is a number between 0 and 100
  passwordStrength: number = 0;

  constructor() {}

  ngOnInit() {
    this.passwordStrength = this.calculatePasswordStrength(this.password);
  }

  onInput() {
    this.passwordStrength = this.calculatePasswordStrength(this.password);
  }

  calculatePasswordStrength(password: string): number {
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

  countOccurences(password: string, pattern: RegExp): number {
    return (password.match(pattern) || []).length;
  }

  countRepeatingChars(password: string): number {
    let repeatingChars = 0;
    for (let i = 0; i < password.length - 1; i++) {
      if (password.charAt(i) === password.charAt(i + 1)) {
        repeatingChars++;
      }
    }
    return repeatingChars;
  }
}
