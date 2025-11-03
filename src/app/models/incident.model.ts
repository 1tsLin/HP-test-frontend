import { SeverityEnum } from "./enums/severity.enum";

export class Incident {
  id!: string;
  vulnerabilityId!: string;
  assignedTo?: string;
  priority!: SeverityEnum
  description?: string;
  createdAt!: Date;
}
