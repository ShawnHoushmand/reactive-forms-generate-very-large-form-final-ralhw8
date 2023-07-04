import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

import { Hotel, RoomType, MealType, MarketGroup, Market, RateSegment, HotelSeason, Rate } from './hotel.model';

@Injectable()
export class UtilService {

  constructor(
    private readonly fb: FormBuilder,
    private readonly http: HttpClient
  ) { }

  getHotelForm() {
    return this.getHotel().pipe(
      map((apiResponse: any) => this.fb.group({
        id: [apiResponse.id, Validators.required],
        currencyId: [apiResponse.currencyId, Validators.required],
        hotelYearId: [apiResponse.hotelYearId, Validators.required],
        priceTaxTypeId: [apiResponse.priceTaxTypeId, Validators.required],
        code: [apiResponse.code, Validators.required],
        name: [apiResponse.name, Validators.required],
        createBy: [apiResponse.createBy, Validators.required],
        createDate: [apiResponse.createDate, Validators.required],
        lastUpdateBy: [apiResponse.lastUpdateBy, Validators.required],
        lastUpdateDate: [apiResponse.lastUpdateDate, Validators.required],
        remark: [apiResponse.remark, Validators.required],
        internalRemark: [apiResponse.internalRemark, Validators.required],
        roomTypes: this.fb.array(apiResponse.roomTypes.map(roomType => this.generateRoomTypeForm(roomType)))
      }))
    );
  }

  private getHotel() {
    return this.http.get('/assets/hotel.json');
  }

  private generateRoomTypeForm(roomType: RoomType) {

    const roomTypeForm = this.fb.group({
      chk: [roomType.chk, Validators.required],
      roomTypeId: [roomType.roomTypeId, Validators.required],
      mealTypes: this.fb.array(roomType.mealTypes.map(mealType => this.generateMealTypeForm(mealType)))
    });

    return roomTypeForm;
  }

  private generateMealTypeForm(mealType: MealType) {

    const mealTypeForm = this.fb.group({
      chk: [mealType.chk, Validators.required],
      mealTypeId: [mealType.mealTypeId, Validators.required],
      marketGroups: this.fb.array(mealType.marketGroups.map(marketGroup => this.generateMarketGroupForm(marketGroup)))
    });

    return mealTypeForm;
  }

  private generateMarketGroupForm(marketGroup: MarketGroup) {

    const marketGroupForm = this.fb.group({
      chk: [marketGroup.chk, Validators.required],
      markets: this.fb.array(marketGroup.markets.map(market => this.generateMarketForm(market))),
      rateSegments: this.fb.array(marketGroup.rateSegments.map(rateSegment => this.generateRateSegmentForm(rateSegment))),
    });

    return marketGroupForm;
  }

  private generateMarketForm(market: Market) {
    return this.fb.group({
      marketId: [market.marketId, Validators.required]
    });
  }

  private generateRateSegmentForm(rateSegment: RateSegment) {
    const rateSegmentForm = this.fb.group({
      chk: [rateSegment.chk, Validators.required],
      rateSegmentId: [rateSegment.rateSegmentId, Validators.required],
      hotelSeasons: this.fb.array(rateSegment.hotelSeasons.map(hotelSeason => this.generateHotelSeasonForm(hotelSeason)))
    });

    return rateSegmentForm;
  }

  private generateHotelSeasonForm(hotelSeason: HotelSeason) {

    const hotelSeasonForm = this.fb.group({
      chk: [hotelSeason.chk, Validators.required],
      hotelSeasonId: [hotelSeason.hotelSeasonId, Validators.required],
      rates: this.fb.array(hotelSeason.rates.map(rate => this.generateRateForm(rate)))
    });
    return hotelSeasonForm;
  }

  private generateRateForm(rate: Rate) {
    return this.fb.group({
      rateCodeId: [rate.rateCodeId, Validators.required],
      cancellationPolicyId: [rate.cancellationPolicyId, Validators.required],
      dayFlag: [rate.dayFlag, Validators.required],
      singlePrice: [rate.singlePrice, Validators.required],
      doublePrice: [rate.doublePrice, Validators.required],
      xbedPrice: [rate.xbedPrice, Validators.required],
      xbedChildPrice: [rate.xbedChildPrice, Validators.required],
      bfPrice: [rate.bfPrice, Validators.required],
      bfChildPrice: [rate.bfChildPrice, Validators.required],
      unitMonth: [rate.unitMonth, Validators.required],
      unitDay: [rate.unitDay, Validators.required],
      minStay: [rate.minStay, Validators.required]
    });
  }

}
