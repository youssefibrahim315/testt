import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../model/IProduct.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete',
  imports: [CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
})
export class DeleteComponent {
  //injects
  private readonly apiService = inject(ApiService);
  private readonly fb = inject(FormBuilder);

  //input
  @Input() item: IProduct | undefined = undefined;

  //out
  @Output() onConfirm = new EventEmitter<IProduct>();

  protected remove(product: IProduct):void {
    const confirmed = confirm('Are you sure you want to delete this product?');

    if (!confirmed) return;

    this.apiService.delete(this.item!).subscribe({
      next: (res) => {
        this.onConfirm.emit(this.item);
      },
      error: () => {
        this.onConfirm.emit(this.item);
      },
    });
  }
}
