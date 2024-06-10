import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ClienteModule } from './cliente/cliente.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { PessoaFisicaModule } from './pessoa_fisica/pessoa_fisica.module';
import { PessoaJuridicaModule } from './pessoa_juridica/pessoa_juridica.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ProdutoModule } from './produto/produto.module';
import { EmpresaModule } from './empresa/empresa.module';
import { AuthModule } from './auth/auth.module';
import { LibsodiumModule } from './libsodium/libsodium.module';
import { ItemVendaModule } from './item_venda/item_venda.module';
import { VendaModule } from './venda/venda.module';

@Module({
  imports: [PrismaModule, UserModule, ClienteModule, PessoaModule, PessoaFisicaModule, PessoaJuridicaModule, EnderecoModule, ProdutoModule, EmpresaModule, LibsodiumModule, AuthModule, ItemVendaModule, VendaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
