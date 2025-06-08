import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import { DocumentSnapshot } from 'firebase-functions/v1/firestore';
import { EventContext } from 'firebase-functions';
import { adminDb } from './firebase-admin';
import * as admin from 'firebase-admin';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendConfirmationEmail = functions.firestore
  .document('registrations/{registrationId}')
  .onCreate(async (snapshot: DocumentSnapshot, context: EventContext) => {
    const registrationData = snapshot.data();
    if (!registrationData) {
      throw new Error('No data found in document');
    }
    
    const { email, name } = registrationData;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Підтвердження реєстрації на Mentalka.ai',
      html: `
        <h1>Вітаємо, ${name}!</h1>
        <p>Дякуємо за реєстрацію на Mentalka.ai.</p>
        <p>Ваша заявка успішно отримана. Ми зв'яжемося з вами найближчим часом.</p>
        <p>З повагою,<br>Команда Mentalka.ai</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Confirmation email sent to:', email);
      
      // Оновлюємо статус відправки листа в Firestore
      await adminDb.collection('registrations').doc(context.params.registrationId).update({
        emailSent: true,
        emailSentAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      throw new Error('Failed to send confirmation email');
    }
  }); 