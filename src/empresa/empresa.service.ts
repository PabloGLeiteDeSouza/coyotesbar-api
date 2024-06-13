import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmpresaService {

  constructor(private prisma: PrismaService) {}

  create(createEmpresaDto: CreateEmpresaDto) {
    return this.prisma.empresa.create({ data: createEmpresaDto });
  }

  findAll() {
    return this.prisma.empresa.findMany();
  }

  async findEmpresasWithName(){
    const dados = [];
    const empresas = await this.prisma.empresa.findMany();
    for (const empresa of empresas) {
      const { id, id_pessoa } = empresa;
      const pessoa = await this.prisma.pessoa.findUnique({ where: { id: id_pessoa }});
      const pessoa_fisica = await this.prisma.pessoa_fisica.findUnique({where: { id_pessoa }});
      const pessoa_juridica = await this.prisma.pessoa_juridica.findMany({ where: { id_pessoa } });
      if (pessoa_juridica.length > 0) {
        for (const pj of pessoa_juridica) {
          const endereco = await this.prisma.endereco.findUnique({where:{id: pj.id_endereco}});
          dados.push({...endereco, ...pj, ...pessoa, id_pessoa_juridica: pj.id, ...empresa})
        }
      } 
      if (pessoa_fisica) {
        const endereco = await this.prisma.endereco.findUnique({where:{id: pessoa_fisica.id_endereco}})
        dados.push({ 
          ...endereco,
          ...pessoa_fisica,
          id_pessoa_fisica: pessoa_fisica.id,
          ...pessoa,
          ...empresa
        })
      }
    }

    return dados;
  }


  findOne(id: number) {
    return this.prisma.empresa.findUnique({ where: { id } });
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return this.prisma.empresa.update({where:{id},data:updateEmpresaDto});
  }

  remove(id: number) {
    return this.prisma.empresa.delete({where:{id}});
  }
}
