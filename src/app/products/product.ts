export class Product {

  constructor(id: number, name: string, price: number, quantity: number, store: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.store = store;
  }

  id: number;
  name: string;
  price: number;
  quantity: number;
  store: string;
}
