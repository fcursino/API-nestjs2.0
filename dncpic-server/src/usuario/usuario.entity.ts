import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsString, IsEmail } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico.validator";

export class Usuario {

    id: number;

    @Expose({
        name:"username"
    })
    @IsNomeDeUsuarioUnico({
        message: 'nomeDeUsuario precisa ser único.'
    })
    @IsNotEmpty({
        message: 'nomeDeUsuario é obrigatório.'
    })
    @IsString({
        message: 'nomeDeUsuario precisa ser uma string.'
    })
    nomeDeUsuario: string;

    @IsEmail({}, {
        message: 'email precisa ser um endereçõ de email válido.'
    })
    email: string;

    @Expose({
        name:"password"
    })
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: 'senha é obrigatório.'
    })
    senha: string;

    @Expose({
        name:"fullName"
    })
    @IsNotEmpty({
        message: 'nomeCompleto é obrigatório'
    })
    nomeCompleto: string;
    
    @Expose({
        name:"joinDate"
    })
    dataDeEntrada: Date;
}