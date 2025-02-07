import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CountryService {
  private readonly DATE_NAGER_API: string;
  private readonly COUNTRIES_NOW_API: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.DATE_NAGER_API = this.configService.get<string>('DATE_NAGER_API') || 'https://date.nager.at/api/v3';
    this.COUNTRIES_NOW_API = this.configService.get<string>('COUNTRIES_NOW_API') || 'https://countriesnow.space/api/v0.1/countries';
  }

  async getAvailableCountries(page: number, limit: number): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.DATE_NAGER_API}/AvailableCountries`)
    );
    
    const countries = response.data;
    const paginatedCountries = countries.slice((page - 1) * limit, page * limit);
    return {
      countries: paginatedCountries,
      total: countries.length
    };
  }

  async getCountryInfo(countryCode: string): Promise<any> {
    const { data: countryInfo } = await firstValueFrom(
      this.httpService.get(`${this.DATE_NAGER_API}/CountryInfo/${countryCode}`)
    );

    const { data: populationData } = await firstValueFrom(
      this.httpService.post(`${this.COUNTRIES_NOW_API}/population`, {
        country: countryInfo.commonName,
      })
    );

    const { data: flagData } = await firstValueFrom(
      this.httpService.post(`${this.COUNTRIES_NOW_API}/flag/images`, {
        country: countryInfo.commonName,
      })
    );

    return {
      borders: countryInfo.borders || [],
      population: populationData?.data?.populationCounts || [],
      flagUrl: flagData?.data?.flag || '',
    };
  }
}
