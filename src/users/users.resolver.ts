import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MutationOutPut } from 'src/common/dtos/output.dto';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => Boolean)
  hi() {
    return true;
  }

  @Mutation(() => MutationOutPut)
  async createAccount(
    @Args('input') createAccountInput: CreateAccountInput,
  ): Promise<MutationOutPut> {
    try {
      const result = await this.usersService.createAccount(createAccountInput);
      return result;
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }

  @Mutation(() => LoginOutput)
  async login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    try {
      const result = this.usersService.login(loginInput);
      return result;
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
