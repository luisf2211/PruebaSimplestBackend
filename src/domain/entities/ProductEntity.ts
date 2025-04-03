export class ProductEntity {
    constructor(
      public id: number | null,
      public description: string,
      public quantity: number | null,
      public isActive: boolean = true,
      public user_id: number,
      public created_at?: Date,
      public modified_at?: Date,
    ) {}
  }