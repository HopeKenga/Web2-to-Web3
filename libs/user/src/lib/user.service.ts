import { HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { RegisterDTO } from '../dto/register.dto';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
    public async create(params: Prisma.UserCreateInput): Promise<User> {
        const { password } = params;       
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { ...params, password: hashedPassword }
        });
        return user;
    }

    public async findOneByUsername(username: string): Promise<User|null> {
        return prisma.user.findFirst({
            where: {
                username,
            }
        });
    }  

    public async randomSecret() {
        const secrets = await prisma.secret.findMany({});
        const randomSecret = secrets[Math.floor(Math.random() * secrets.length)];
        return randomSecret;
    }
    
    public validateUserInputs(params: RegisterDTO, res: Response) {
        const { username, password } = params;
        //check if password has a min length of 6 characters
        if (password.length < 6) {
            // throw new Error('Password must be at least 6 characters');
            return res.status(HttpStatus.BAD_REQUEST).json({'statusCode': HttpStatus.BAD_REQUEST,'message': 'Password must be at least 6 characters'});
        }
        //check if username is a string
        if (typeof username !== 'string') {
            // throw new Error('Username must be a string');
            return res.status(HttpStatus.BAD_REQUEST).json({'statusCode': HttpStatus.BAD_REQUEST,'message': 'Username must be a string'});
        }
        //check if username has symbols
        if (username.match(/[^a-zA-Z0-9]/)) {
            // throw new Error('Username must be alphanumeric');
            return res.status(HttpStatus.BAD_REQUEST).json({'statusCode': HttpStatus.BAD_REQUEST,'message': 'Username must be alphanumeric'});
        }
        //check if username has a max length of 100 characters
        if (username.length > 100) {
            // throw new Error('Username must be at most 100 characters');
            return res.status(HttpStatus.BAD_REQUEST).json({'statusCode': HttpStatus.BAD_REQUEST,'message': 'Username must be at most 100 characters'});
        }
        //check if username has spaces
        if (username.match(/\s/)) {
            // throw new Error('Username must not contain spaces');
            return res.status(HttpStatus.BAD_REQUEST).json({'statusCode': HttpStatus.BAD_REQUEST,'message': 'Username must not contain spaces'});
        }
        return true;
    }
}

