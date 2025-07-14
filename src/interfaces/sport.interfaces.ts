export interface OutrightTableLink {
	oraId: number;
	tabTournamentAlias: string;
}

// Базовый элемент: может быть "sport", "segment" и т.д.
export interface BaseItem {
	id: number;
	kind: string;
	name: string;
	sortOrder: string;
}

// Расширенная версия для "sport"
export interface Sport extends BaseItem {
	kind: 'sport';
	alias: string;
}

// Расширенная версия для "segment"
export interface Segment extends BaseItem {
	kind: 'segment';
	parentId: number;
	parentIds: number[];
	regionId?: number; // может отсутствовать
	sportCategoryId?: number;
	tournamentInfoId?: number;
	outrightTableOraIds?: number[]; // может отсутствовать
	outrightTableLinks?: OutrightTableLink[]; // может отсутствовать
}

// Объединяем общий тип: элемент может быть либо "sport", либо "segment"
export type SportOrSegment = Sport | Segment;

// Ответ от API — массив из таких элементов
export type ApiResponse = SportOrSegment[];