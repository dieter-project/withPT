export interface PlaceInfo {
  id: string;
  address_name: string;
  categroy_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  phone: string;
  name: string;
  place_name: string;
  place_url: string;
  content: string;
  roadAddress: string;
  position: Position[];
}

export interface Position {
  x: string;
  y: string;
}

export interface GymsInfo {
  name: string;
  address: string;
  latitude: number;
  longtitude: number;
}

export interface WorkSchedule {
  days: string[];
  startTime: string;
  endTime: string;
}

export interface CenterSchedules {
  [centerName: string]: WorkSchedule[];
}
