import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../../api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  data: any;
	id: any;
  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef,
		private ar: ActivatedRoute
  ) {}
  ngOnInit() {
		this.id = this.ar.snapshot.params['id'];
    this.api.getProductDetails(this.id).subscribe((res: any) => {
      this.data = res;
      this.cdr.detectChanges();
    });
  }
}
