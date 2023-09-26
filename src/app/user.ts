export class User {

  constructor(
    public id: number | string,
    public firstName: string,
    public lastName: string,
    public profilePic: string,
    public description: string
  ) {}
}
