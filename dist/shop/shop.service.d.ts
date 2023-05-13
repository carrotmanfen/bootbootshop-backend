import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';
export declare class ShopService {
    private shopRepository;
    constructor(shopRepository: Repository<Shop>);
    create(createShopDto: CreateShopDto): Promise<CreateShopDto & Shop>;
    findAll(): Promise<Shop[]>;
    findOne(id: number): Promise<Shop>;
    update(id: number, updateShopDto: UpdateShopDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
}
