export interface IProduct {
  id: number;
  name: string;
  data: {
    color: string;
    capacity: string;
  };
}

export interface ICreateProduct {
  name: string;
  data: {
    year: Date;
    price: any;
    'CPU model':string;
    'Hard disk size': string;
  };
}
