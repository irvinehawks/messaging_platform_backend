/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getHello(): string {
        return "Welcome to the users list route!"
    } 
}
