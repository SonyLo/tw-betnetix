

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

import { Sport } from '../interfaces/sport.interfaces';
import { Event } from '../interfaces/event.interfaces';

@Injectable()
export class FetchService {




	async getDataBase(url: string) {
		try {
			const response = await axios.get(url);

			if (typeof response.data !== 'object' || response.data === null) {
				return console.log('Некорректный формат данных: не объект');
			}

			if ('sports' in response.data) {
				// console.log('Sports:', response.data.sports);
				if (Array.isArray(response.data.sports)) {
					const sports: Sport[] = response.data.sports.filter((item: any) => item.kind === 'sport' && item.id === 1 || item.parentId === 1);
					// const sports: Sport[] = [...response.data.sports];
					// console.log('Sports:', sports.length);
					// return sports
				}

			} else {
				console.log('Поле "sports" отсутствует');
			}

			// Или tournamentInfos
			if ('tournamentInfos' in response.data) {
				// console.log('Tournament Infos:', response.data.tournamentInfos);
			}

			// Или events
			if ('events' in response.data && Array.isArray(response.data.events)) {

				const events: Event[] = [...response.data.events];
				console.log('Events:', events);
				console.log('Events:', events.length);
			}


			// return response.data;

		} catch (error) {
			throw new HttpException(
				`Ошибка при получении данных: ${error.message}`,
				HttpStatus.BAD_GATEWAY,
			);
		}
	}


}

