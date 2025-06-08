import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export interface RegistrationFormData {
  email: string;
  region: string;
  source: string;
  newsletter: boolean;
}

export const registerUser = async (data: RegistrationFormData): Promise<void> => {
  try {
    const registrationsRef = collection(db, 'registrations');
    await addDoc(registrationsRef, {
      ...data,
      createdAt: new Date().toISOString(),
      status: 'pending',
    });
  } catch (error) {
    console.error('Error registering user:', error);
    throw new Error('Failed to register user');
  }
}; 