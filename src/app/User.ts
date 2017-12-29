export class User {

  private id: number;
  private firstNane: string;
  private lastName: string;
  private age: number;
  private sex: string;
  private mail: string;

  get _id(): number {
    return this.id;
  }

  set _id(value: number) {
    this.id = value;
  }

  get _firstNane(): string {
    return this.firstNane;
  }

  set _firstNane(value: string) {
    this.firstNane = value;
  }

  get _lastName(): string {
    return this.lastName;
  }

  set _lastName(value: string) {
    this.lastName = value;
  }

  get _age(): number {
    return this.age;
  }

  set _age(value: number) {
    this.age = value;
  }

  get _sex(): string {
    return this.sex;
  }

  set _sex(value: string) {
    this.sex = value;
  }

  get _mail(): string {
    return this.mail;
  }

  set _mail(value: string) {
    this.mail = value;
  }


  constructor(id: number, firstName: string, lastName: string, age: number, sex: string, mail: string) {
    this.id = id;
    this.firstNane = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
    this.mail = mail;
  }
}
