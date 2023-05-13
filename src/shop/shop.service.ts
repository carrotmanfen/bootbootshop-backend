import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';

// service here and control in controller
@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private shopRepository: Repository<Shop>,
  ) {}

  create(createShopDto: CreateShopDto) {
    return this.shopRepository.save(createShopDto);
  }

  findAll() {
    return this.shopRepository.find();
  }

  findOne(id: number) {
    return this.shopRepository.findOneBy({id});
  }

  update(id: number, updateShopDto: UpdateShopDto) {
    return this.shopRepository.update(id,updateShopDto);
  }

  async remove(id: number): Promise<void> {
    await this.shopRepository.delete(id);
  }

}
