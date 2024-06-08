import { Injectable } from '@nestjs/common';
import { CreateUserDto, CreateUserDtoRevcive } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LibsodiumService } from 'src/libsodium/libsodium.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService, private libsodium: LibsodiumService) {}

  async create(createUserDto: CreateUserDtoRevcive) {
    const key_pair = await this.libsodium.generate_key_pair();
    const password_encripted = await this.libsodium.encrypt_with_public_and_private_keys(key_pair.publicKey, key_pair.privateKey, createUserDto.password);
    const private_string_key = await this.libsodium.uint_8_array_to_string(key_pair.privateKey)
    const public_string_key = await this.libsodium.uint_8_array_to_string(key_pair.publicKey);
    return this.prisma.user.create({data: {
      email: createUserDto.email,
      username: createUserDto.username,
      id_pessoa: createUserDto.id_pessoa,
      password: password_encripted,
      private_key: private_string_key,
      public_key: public_string_key,
      active: true,
    }});
  }
  
  findAll() {
    return this.prisma.user.findMany();
  }

  findOneWithUsername(username: string){
    return this.prisma.user.findFirst({
      where: {
        username
      }
    });
  }

  findOneWithEmail(email: string){
    return this.prisma.user.findFirst({
      where: {
        email
      }
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({where: { id }});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({data: updateUserDto, where: { id }});
  }

  disable(id: number){

  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
