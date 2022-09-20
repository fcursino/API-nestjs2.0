import { Controller, Post, Body, Get, Param, HttpStatus, NotFoundException } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller("users")
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) {}

    @Post()
    public criar(@Body() usuario: Usuario): NestResponse {
        const usuarioCriado = this.usuarioService.criar(usuario)
        return new NestResponseBuilder()
                .comStatus(HttpStatus.CREATED)
                .comHeaders({
                    'Location': `/users/${usuarioCriado.nomeDeUsuario}`
                })
                .comBody(usuarioCriado)
                .build();
    }

    @Get(':nomeDeUsuario')
    public buscarPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
        const usuarioEncontrado = this.usuarioService.buscarPorNomeDeUsuario(nomeDeUsuario);

        if(!usuarioEncontrado) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Usuário não encontrado.'
            });
        }
        return usuarioEncontrado;
    }
}