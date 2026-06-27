import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from "../../ui/card/card";
import { ApiService } from '../../api-service';

@Component({
  selector: 'app-products',
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
	data: any =[];
	constructor(private api: ApiService,private cdr: ChangeDetectorRef){}
	ngOnInit(){
		this.api.getAllProducts().subscribe((res:any)=>{
			this.data = res;
			this.cdr.detectChanges();
		});
	}




  // data: any = [
  //   {
  //     id: 1,
  //     name: 'Boat Rockerz | Wireless Headphone',
  //     description: 'Premium sound quality with noise cancellation.',
  //     price: 2999,
  //     image: 'https://m.media-amazon.com/images/I/41+ZNH9XkOL._SY300_SX300_QL70_FMwebp_.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'Apple iPhone 17 Pro | Mobile Phone',
  //     description: 'Latest smartphone with advanced features.',
  //     price: 134900,
  //     image: 'https://m.media-amazon.com/images/I/618vU2qKXQL._SX569_.jpg',
  //   },
  //   {
  //     id: 3,
  //     name: 'Fastrack Limitless Glide | Smart Watch',
  //     description: 'Advanced smartwatch with health monitoring.',
  //     price: 1299,
  //     image: 'https://m.media-amazon.com/images/I/41mUgZ8BvJL._SY300_SX300_QL70_FMwebp_.jpg',
  //   },
  //   {
  //     id: 4,
  //     name: 'Xiaomi HD Ready Smart LED | Smart TV',
  //     description: 'High-definition smart TV with streaming capabilities.',
  //     price: 12999,
  //     image: 'https://m.media-amazon.com/images/I/417hNvs+R8L._SY300_SX300_QL70_FMwebp_.jpg',
  //   },
  //   {
  //     id: 5,
  //     name: 'Sonos Era 100 | Smart Speaker',
  //     description: 'Voice-controlled smart speaker with virtual assistant.',
  //     price: 1499,
  //     image: 'https://m.media-amazon.com/images/I/71o7CiJtipL._SY679_.jpg',
  //   },
  //   {
  //     id: 6,
  //     name: 'OnePlus Nord Buds | In-Ear Headphones',
  //     description: 'Compact and comfortable in-ear headphones for on-the-go listening.',
  //     price: 499,
  //     image: 'https://m.media-amazon.com/images/I/311+txXADYL._SY300_SX300_QL70_FMwebp_.jpg',
  //   },
  //   {
  //     id: 7,
  //     name: "Campus Men's FEROX | Shoes",
  //     description: 'Comfortable and stylish shoes for everyday wear.',
  //     price: 1999,
  //     image: 'https://m.media-amazon.com/images/I/71lDfZEVFML._SY575_.jpg',
  //   },
  //   {
  //     id: 8,
  //     name: "Cargo Pants",
  //     description: 'Comfortable and stylish cargo pants for everyday wear.',
  //     price: 1499,
  //     image:
  //       'https://prod4-sprcdn-assets.sprinklr.com/200052/5b5b94f9-3bab-4e6b-ac8f-2183c4218a27-361538681/370.png',
  //   },
  // ];
}
