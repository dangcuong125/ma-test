export interface IAddPointRequest {
    code: string;
}

export interface IResAddPoint {
    addPoint: number;
    percent: number;
    tierCode: EUserRank;
    nextTierCode: string;
    lackRankPoint: number;
    addedGamePlayTimes?: IGamePlayTime[];
}

export enum EUserRank {
    MEMBER = 'MEMBER',
    TITAN = 'TITAN',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM',
}

export interface IGamePlayTime {
    game: {
      id: number;
      name: string;
    };
    playTime: number;
}

export interface IAddPointSuccess {
    data: IResAddPoint;
    isOpenGamePopup: boolean;
    gameData: IGamePlayTime[];
    isOpenScanPopup: boolean;
  }