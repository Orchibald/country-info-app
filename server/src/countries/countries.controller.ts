import { Controller, Get, Param, Query } from '@nestjs/common';
import { CountryService } from './countries.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getAvailableCountries(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.countryService.getAvailableCountries(page, limit);
  }

  @Get(':code')
  async getCountryInfo(@Param('code') code: string) {
    return this.countryService.getCountryInfo(code);
  }
}
