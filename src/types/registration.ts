export interface RegistrationData {
  email: string;
  region: string;
  source: string;
  createdAt: Date;
}

export type RegistrationFormData = Omit<RegistrationData, 'createdAt'>; 