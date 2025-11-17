import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car, statusCar } from '../models/storage-models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private http: HttpClient
  ) { }


    api = 'http://localhost:3000/storage';
  
    getCountStorageStatus(): Observable<any[]> {
      return this.http.get<Car[]>(this.api).pipe(
        map((cars: Car[]) => {
          const status = Object.keys(statusCar).filter(key => isNaN(Number(key))).map((key, index) => ({ name: statusCar[key], id: key, count: 0 }));

          cars.forEach(car => {
            status.forEach(s => {
              if (car.status === s.id) {
                s.count++
              }
            })
          });

          return status
        })
      )
      
    }

    getCountStorage(): Observable<number> {
      return this.http.get<Car[]>(this.api).pipe(
        map(cars => cars.length)
      );
    }

    getStorage(): Observable<Car[]> {
      return this.http.get<Car[]>(this.api);
    }
  
    addStorage(car: Car): Observable<Car> {
      return this.http.post<Car>(this.api, car);
    }
  
    updateStorage(car: Car, id): Observable<Car> {
      return this.http.patch<Car>(`${this.api}/${id}`, car);
    }

    deleteStorage(id): Observable<Car> {
      return this.http.delete<Car>(`${this.api}/${id}`);
    }
}
