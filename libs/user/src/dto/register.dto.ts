import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterDTO {
    @IsNotEmpty()
    @MaxLength(100)
    username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    //validate alphanumeric, min 8 characters, max 20 characters, unique, required, no spaces, no symbols
    
}

