import {Field, Int, ObjectType} from '@nestjs/graphql';

@ObjectType()
export default class MouseQueryDto {
  /**
   * Data coming from or sent back to the client (frontend/other) in the form of graphql object
   */
  constructor(name: string, gender: string, age: number) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  @Field()
  public name: string;

  @Field()
  public gender: string;

  @Field(() => Int)
  public age: number;
}
