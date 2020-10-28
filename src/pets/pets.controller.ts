import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ListQuery } from './requests/requests.query';
import { Create, Update } from './requests/requests.dto';
import { Response } from 'express';

@Controller('v1/pets')
export class PetsController {
    @Post()
    create(@Res() res: Response, @Body() create: Create) {
        res.status(HttpStatus.CREATED).send();
    }

    @Get()
    findAll(@Res() res: Response, @Query() query: ListQuery) {
        res.status(HttpStatus.OK).json([]);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} pet`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatepetDto: Update) {
        return `This action updates a #${id} pet`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} pet`;
    }
}
