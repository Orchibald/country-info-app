import { Module } from '@nestjs/common';
import { CountryModule } from './countries/countries.module';

@Module({
  imports: [CountryModule],
})
export class AppModule {}
