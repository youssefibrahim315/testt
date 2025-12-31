import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ICreateProduct } from '../../model/IProduct.interface';

@Component({
  selector: 'app-add',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  //injects
  private readonly apiService = inject(ApiService);
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(Router);

  // probs
  protected form = this.initForm();

  protected add(): void {
    // if (this.form.invalid) return;
        debugger;

    this.apiService.add(this.form.value as ICreateProduct).subscribe({
      next: (res) => {
        debugger;
        this.route.navigate(['/products']);
      },
      error: (err) => {
        debugger;
        this.route.navigate(['/products']);

      },
    });
  }

  private initForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      data: this.fb.group({
        year: ['', Validators.required],
        price: ['', Validators.required],
        'CPU model': ['', Validators.required],
        'Hard disk size': ['', Validators.required],
      }),
    });
  }
}
