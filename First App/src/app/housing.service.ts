import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  housingLocationList: HousingLocation[] = [];
  API_URL = 'http://localhost:3000/locations';

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.API_URL);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.API_URL}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application recieved: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
