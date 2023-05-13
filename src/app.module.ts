import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [ShopModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'bootbootshop',
    entities: ['dist/**/*.entity.{js,ts}'],
    synchronize: true,
})],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
