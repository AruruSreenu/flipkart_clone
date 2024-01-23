export type ArrowProps = {
  onClick: () => void;
};

export interface ProductObjModel {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: object;
  title: string;
}
export interface ProductObjModel2 {
  category: string;
  description: string;
  id: number;
  image: string;
  price: string;
  rating: object;
  title: string;
}

export interface productDataType {
  data: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: Float32List;
      count: number;
    };
  }[];
}
