import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44385/api/";

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getallcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:Number):Observable<ListResponseModel<Car>>{
    console.log("service",colorId)
    let newPath = this.apiUrl +"cars/getbycolor?colorid="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailById(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"cars/getcardetailbyid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
