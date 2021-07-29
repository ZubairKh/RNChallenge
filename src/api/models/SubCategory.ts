export class SubCategory {
  name: string;
  id: number;
  productIds: number[];
  selected: boolean;

  constructor(
    name: string,
    id: number,
    productIds: number[],
    selected: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.productIds = productIds;
    this.selected = selected;
  }
}
