import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  password = 'password';
  show = false;
  form!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  showPassword() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  get fc() {
    return this.form.controls;
  }

  submit() {
    this.isSubmitted = true;
    console.log(this.form);
    if(this.form.invalid) return
    this.router.navigate(['/landing/users'])
  }
}
