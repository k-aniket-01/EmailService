// // EmailProvider.ts
// export class EmailProvider {
//     private available: boolean;
  
//     constructor(available: boolean) {
//       this.available = available;
//     }
  
//     isAvailable(): boolean {
//       return this.available;
//     }
  
//     async sendEmail(email: Email): Promise<void> {
//       // Simulate sending an email
//       await new Promise(resolve => setTimeout(resolve, 1000));
//     }
//   }
// Define the Email type or interface
interface Email {
  to: string;
  subject: string;
  body: string;
}

export class EmailProvider {
  private available: boolean;

  constructor(available: boolean) {
    this.available = available;
  }

  /**
   * Check if the email provider is available.
   * @returns {boolean} - True if the provider is available, false otherwise.
   */
  isAvailable(): boolean {
    return this.available;
  }

  /**
   * Simulate sending an email.
   * @param {Email} email - The email to be sent.
   * @returns {Promise<void>} - A promise that resolves when the email has been sent.
   * @throws {Error} - Throws an error if the email could not be sent.
   */
  async sendEmail(email: Email): Promise<void> {
    if (!this.available) {
      throw new Error('Email provider is not available');
    }

    try {
      // Simulate sending an email with a delay
      await new Promise<void>((resolve, reject) =>
        setTimeout(() => {
          // Simulate success
          resolve();
          // Or simulate failure
          // reject(new Error('Failed to send email'));
        }, 1000)
      );
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}
