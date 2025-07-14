export interface TeamInfo {
	id: number;
	name: string;
	regionId?: number; // Может быть необязательным
	useRegionFlag?: boolean; // Может быть необязательным
}


export interface Event {
	id: number;
	sortOrder: string;
	level: number;
	name: string;
	num: number;
	place: string;
	priority: number;
	rootKind: number;
	startTime: number;
	statisticsType?: string; // Может быть необязательным
	statisticsTypes?: string; // Может быть необязательным
	team1: TeamInfo;
	team2: TeamInfo;
	sportId?: number;
}