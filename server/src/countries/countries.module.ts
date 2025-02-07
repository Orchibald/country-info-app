import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { CountryController } from './countries.controller';
import { CountryService } from './countries.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
  ],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
