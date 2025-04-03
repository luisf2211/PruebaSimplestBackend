export class UserEntity {
    constructor(
      public id: number | null,
      public name: string,
      public email: string,
      public password: string,
      public user_role: number,
      public isActive: boolean = true,
      public created_at?: Date,
      public modified_at?: Date
    ) {}
  }