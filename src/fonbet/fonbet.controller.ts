import { Controller } from '@nestjs/common';

@Controller('fonbet')
export class FonbetController {
	url = process.env.BASE_API_URL || 'https://line02w.bk6bba-resources.com/events/listBase?lang=ru&scopeMarket=1600';

}
