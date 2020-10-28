import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PetsController } from './pets/pets.controller';
import { PetsService } from './pets/pets.service';

@Module({
  imports: [],
  controllers: [UsersController, PetsController],
  providers: [UsersService, PetsService],
})

export class AppModule { }
