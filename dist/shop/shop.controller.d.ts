import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
export declare class ShopController {
    private readonly shopService;
    constructor(shopService: ShopService);
    create(createShopDto: CreateShopDto): Promise<CreateShopDto & import("./entities/shop.entity").Shop>;
    findAll(): Promise<import("./entities/shop.entity").Shop[]>;
    findOne(id: string): Promise<import("./entities/shop.entity").Shop>;
    update(id: string, updateShopDto: UpdateShopDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
