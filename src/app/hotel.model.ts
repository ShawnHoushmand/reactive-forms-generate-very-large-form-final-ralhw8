export interface Hotel {
  id: string;
  currencyId: string;
  hotelYearId: string;
  priceTaxTypeId: string;
  code: string;
  name: string;
  createBy: string;
  createDate: string;
  lastUpdateBy: string;
  lastUpdateDate: string;
  remark: string;
  internalRemark: string;
  roomTypes: RoomType[];
}

export interface RoomType {
  chk: boolean;
  roomTypeId: string;
  mealTypes: MealType[];
}

export interface MealType {
  chk: boolean;
  mealTypeId: string;
  marketGroups: MarketGroup[];
}

export interface MarketGroup {
  chk: boolean;
  markets: Market[];
  rateSegments: RateSegment[];
}

export interface Market {
  marketId: string;
}

export interface RateSegment {
  chk: boolean;
  rateSegmentId: string;
  hotelSeasons: HotelSeason[];
}

export interface HotelSeason {
  chk: boolean;
  hotelSeasonId: string;
  rates: Rate[];
}

export interface Rate {
  rateCodeId: string;
  cancellationPolicyId: string;
  dayFlag: string;
  singlePrice: string;
  doublePrice: string;
  xbedPrice: string;
  xbedChildPrice: string;
  bfPrice: string;
  bfChildPrice: string;
  unitMonth: string;
  unitDay: string;
  minStay: number;
}