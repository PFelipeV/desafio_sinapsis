import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface ApiProduct {
    id: number;
    name: string;
    price: number;
    type?: string;
    category?: string;
    image?: string;
}

interface ApiCartItem {
    id: number;
    product: ApiProduct;
    amount: number;
    subtotal: number;
}

export class InMemoryBackendService implements InMemoryDbService {
    createDb() {
        const products: ApiProduct[] = [
            { id: 1, name: 'iPhone 13', price: 500, type: 'default' , category: 'Celular' , image: 'assets/Iphone13.jpg' },
            { id: 2, name: 'Samsung Galaxy S23', price: 600, type: 'default', category: 'Celular' , image: 'assets/S23-10.jpg'},
            { id: 3, name: 'Huawei P20', price: 700, type: 'default', category: 'Celular' , image: 'assets/HuaweiP20.jpg'},
            { id: 4, name: 'TV Samsung 55"', price: 900, type: 'promo', category: 'Televisor' , image: 'assets/TVSamsung55.jpg'},
            { id: 5, name: 'TLC Led 43', price: 700, type: 'promo', category: 'Televisor' , image: 'assets/TCLHD.jpg'},
            { id: 6, name: 'Samsung HD', price: 1200, type: 'promo', category: 'Televisor' , image: 'assets/SamsungHD.jpg'},
            { id: 7, name: 'Macbook', price: 1200, type: 'outlet', category: 'Computador' , image: 'assets/Macbook.jpg' },
            { id: 8, name: 'Lenovo 23', price: 1500, type: 'outlet', category: 'Computador' , image: 'assets/Lenovo23.jpg'},
            { id: 9, name: 'ASUS TUF', price: 1800, type: 'outlet', category: 'Computador' , image: 'assets/AsusTUF.jpg'},
        ];
        // const cart: ApiCartItem[] = [
        //     { id: 1, product: products[0], amount: 1, subtotal: products[0].price },
        //     { id: 2, product: products[1], amount: 2, subtotal: products[1].price * 2 },
        // ];
        return {
            products,
            // cart,
        };
    }
}
