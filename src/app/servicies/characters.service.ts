import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService extends BaseService {
  endpoint: string = 'characters';
  getAll() {
    this.setEndpoint(this.endpoint);
    return this.get();
  }
  getSingle(id: any) {
    this.setEndpoint(`${this.endpoint}/${id}`);
    return this.get();
  }
}
