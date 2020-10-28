import { Controller, Get } from '@nestjs/common';

@Controller('v1/users')
export class UsersController {

    @Get('/profile')
    profile(): string {
        return "This is profile"
    }

    @Get('/account')
    account(): string {
        return "This is account"
    }
}
