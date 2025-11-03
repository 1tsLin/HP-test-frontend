import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeverityEnum } from '../../models/enums/severity.enum';
import { CommonModule } from '@angular/common';
import { Vulnerability } from '../../models/vulnerability.model';
import { Observable } from 'rxjs/internal/Observable';
import { VulnerabilityService } from '../../services/vulnerability.service';
import { IncidentService } from '../../services/incident.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Incident } from '../../models/incident.model';

@Component({
  selector: 'app-incident-modale',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './incident-modale.html',  
  styleUrl: './incident-modale.scss',
})
export class IncidentModale implements OnInit {
  private vulnerabilityService = inject(VulnerabilityService);
  private incidentService = inject(IncidentService);
  private dialogRef = inject(DialogRef, {optional:true});

  incidentForm!: FormGroup;
  SeverityEnum = SeverityEnum;
  vulnerabilities$!: Observable<Vulnerability[]>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.initForm();
      this.vulnerabilities$ = this.vulnerabilityService.getVulnerabilities();
    }

  initForm(): void {
    this.incidentForm = this.formBuilder.group({
      vulnerabilityId: ['', Validators.required],
      assignedTo: ['', [Validators.required, Validators.email]],
      priority: [SeverityEnum.CRITICAL, Validators.required],
      description: ['', Validators.required]
    });
  }
  
  close(): void {
    this.dialogRef?.close();
  }

  submit(): void {
    let incident = new Incident;
    incident.vulnerabilityId = this.incidentForm.get('vulnerabilityId')?.value;
    incident.assignedTo = this.incidentForm.get('assignedTo')?.value;
    incident.priority = this.incidentForm.get('priority')?.value;
    incident.description = this.incidentForm.get('description')?.value;
    this.incidentService.createIncident(incident);

    this.close();
    alert('Incident successfully created.');
  }
}
