import { Controller, Get, HttpCode, Body, Param, Post } from '@nestjs/common';
import { SignIn } from './dto/auth';

@Controller('users')
export class UsersController {

    @Get('/profile')
    profile(): string {
        return "This is profile"
    }

    @Get('/account')
    account(): string {
        return "This is account"
    }

    @Get('/wild*card')
    @HttpCode(204)
    wildCard(): string {
        return 'This route any wirldcard';
    }

    @Get('/all')
    async findAll(): Promise<any[]> {
        return [];
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} users`;
    }

    @Post('/login')
    login(@Body() signIn: SignIn): string {
        return 'login action hit'
    }

}
