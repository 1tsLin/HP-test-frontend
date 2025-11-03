import { Component, inject, OnInit } from '@angular/core';
import { IncidentService } from '../services/incident.service';
import { Incident } from '../models/incident.model';
import { Observable } from 'rxjs';
import { SeverityEnum } from '../models/enums/severity.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incidents-stats',
  imports: [CommonModule],
  templateUrl: './incidents-stats.html',
  styleUrl: './incidents-stats.scss',
})
export class IncidentsStats implements OnInit{
  private incidentService = inject(IncidentService);
  incidents$!: Observable<Incident[]>;

  criticalCount = 0;
  highCount = 0;
  mediumCount = 0;
  lowCount = 0;

  ngOnInit(): void {
    this.incidents$ = this.incidentService.getIncidents();
    this.incidents$.subscribe(incidents => {
      this.criticalCount = incidents.filter(i => i.priority === SeverityEnum.CRITICAL).length;
      this.highCount = incidents.filter(i => i.priority === SeverityEnum.HIGH).length;
      this.mediumCount = incidents.filter(i => i.priority === SeverityEnum.MEDIUM).length;
      this.lowCount = incidents.filter(i => i.priority === SeverityEnum.LOW).length;
    });
  }

}
