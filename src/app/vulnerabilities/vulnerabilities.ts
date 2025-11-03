import { Component, inject, OnInit } from '@angular/core';
import { VulnerabilityService } from '../services/vulnerability.service';
import { Vulnerability } from '../models/vulnerability.model';
import { Observable, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SeverityEnum } from '../models/enums/severity.enum';
import { StatusEnum } from '../models/enums/status.enum';
import { Dialog } from '@angular/cdk/dialog';
import { IncidentModale } from './incident-modale/incident-modale';

@Component({
  selector: 'app-vulnerabilities',
  imports: [CommonModule],
  templateUrl: './vulnerabilities.html',
  styleUrl: './vulnerabilities.scss',
})
export class Vulnerabilities implements OnInit {
  private vulnerabilityService = inject(VulnerabilityService);
  private dialog = inject(Dialog);

  SeverityEnum = SeverityEnum;
  StatusEnum = StatusEnum;
  vulnerabilities$!: Observable<Vulnerability[]>;

  currentFilter?: SeverityEnum;

  ngOnInit(): void {
    this.getVulnerabilities();
  }

  setFilter(selectedFilter:SeverityEnum){
    this.currentFilter = selectedFilter;
    this.vulnerabilities$ = this.vulnerabilityService.getVulnerabilities(selectedFilter);
  }

  getVulnerabilities(){
    this.currentFilter = undefined;
    this.vulnerabilities$ = this.vulnerabilityService.getVulnerabilities();
  }

  createIncident() {
    this.dialog.open(IncidentModale);
  }

}
