export interface Design {
  id: string;
  designName: string;
  category:
    | "PACKING_BOX"
    | "PACKING_BOX_DESIGN";

  image: string;

  createdAt?: string;
  updatedAt?: string;
}