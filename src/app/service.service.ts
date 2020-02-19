import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  updateUrl = 'http://dummy.restapiexample.com/api/v1/update';
  constructor(private http: HttpClient) { }

  getEmp() {
    return this.http.get(this.getUrl);
  }

  updateEmp(id: number, data: Employee) {
    return this.http.put(`${this.updateUrl}/${id}`, data);
  }
}

