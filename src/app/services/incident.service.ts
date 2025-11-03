// src/app/services/incident.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incident } from '../models/incident.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

    private apiUrl = 'http://localhost:8080/api/incidents';

    constructor(private http: HttpClient) {}

    // GET
    getIncidents(): Observable<Incident[]> {
        return this.http.get<Incident[]>(this.apiUrl);
    }

    // CREATE
    createIncident(incident: Incident) {
        this.http.post<{ message: string; id: string }>(this.apiUrl, incident)
        .subscribe({
            next: (res) => {
            console.log('Created incident ID:', res.id);
            },
            error: (err) => {
            console.error('Error while trying to create incident:', err);
            }
        });
  }
}
