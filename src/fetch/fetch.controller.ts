import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { FetchService } from './fetch.service';


@ApiTags('Fetch')
@Controller('fetch')
export class FetchController {
	private readonly apiUrl = "https://line02w.bk6bba-resources.com/events/listBase?lang=ru&scopeMarket=1600";
	constructor(private fetchService: FetchService) { }

	@ApiOperation({ summary: 'Функция для получения данных о регионах и чемпионатах' })
	// @ApiResponse({ status: 200, type: [void] })
	@Get()
	getAll() {
		return this.fetchService.getDataBase(this.apiUrl);
	}
}






