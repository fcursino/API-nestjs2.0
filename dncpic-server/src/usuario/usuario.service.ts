import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {

    private usuarios: Array<Usuario> = [{
        id: 1,
        nomeDeUsuario: 'faber',
        email: 'faber@gmail.com',
        senha: '123',
        nomeCompleto: 'Fabricio Cursino',
        dataDeEntrada: new Date()
    }];

    public criar(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);

        return usuario;
    }

    public buscarPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario);
    }
}