import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { IProduct } from '../../model/IProduct.interface';
import { ApiService } from '../../services/api.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-list',
  imports: [  DeleteComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  // probs
  protected data = signal<IProduct[]>([]);

  //injects
  private readonly apiService = inject(ApiService);

  ngOnInit(): void {
    this.getData();
    
  }
  getData(product?: any): void {
    if (product) {
      this.data.update((products) =>
        products.filter((p) => p.id !== product?.id)
      );
    } else {
      this.apiService.get().subscribe({
        next: (res: IProduct[]) => {
          this.data.set(res);
        },
        error: () => {},
      });
    }
  }
}
