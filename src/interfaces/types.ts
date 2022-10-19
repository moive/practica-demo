export interface InfoReq {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export enum GenderReq {
  Male = 'Male',
}

export interface LocationReq {
  name: string;
  url: string;
}

export enum SpeciesReq {
  Alien = 'Alien',
  Cronenberg = 'Cronenberg',
  Human = 'Human',
  Humanoid = 'Humanoid',
}

export enum StatusReq {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export enum TypeReq {
  Empty = '',
  FishPerson = 'Fish-Person',
  HumanWithAntennae = 'Human with antennae',
  Robot = 'Robot',
}

export interface ResultReq {
  id: number;
  name: string;
  status: StatusReq;
  species: SpeciesReq;
  type: TypeReq;
  gender: GenderReq;
  origin: LocationReq;
  location: LocationReq;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface IRickAndMorty {
  info: InfoReq;
  results: ResultReq[];
}

export interface IStatusSelected {
  value: string;
  name: string;
}
