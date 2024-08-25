// Email.ts
export class Email {
    private id: string;
    private to: string;
    private subject: string;
    private body: string;
  
    constructor(id: string, to: string, subject: string, body: string) {
      this.id = id;
      this.to = to;
      this.subject = subject;
      this.body = body;
    }
  }