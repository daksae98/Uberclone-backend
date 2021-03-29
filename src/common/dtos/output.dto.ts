import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@ObjectType()
export class MutationOutPut {
  @Field(() => Boolean)
  @IsBoolean()
  ok: boolean;

  @Field(() => String, { nullable: true })
  @IsString()
  error?: string;
}
