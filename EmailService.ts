// EmailService.ts
import { EmailProvider } from './EmailProvider';
import { Email } from './Email';
import { EmailStatus } from './EmailStatus';
import { RateLimiter } from './RateLimiter';
import { CircuitBreaker } from './CircuitBreaker';
import { Logger } from './Logger';


class EmailService {
    private providers: EmailProvider[];
    private rateLimiter: RateLimiter;
    private circuitBreaker: CircuitBreaker;
    private logger: Logger;
  
    constructor(providers: EmailProvider[], rateLimiter: RateLimiter, circuitBreaker: CircuitBreaker, logger: Logger) {
      this.providers = providers;
      this.rateLimiter = rateLimiter;
      this.circuitBreaker = circuitBreaker;
      this.logger = logger;
    }
  
    async sendEmail(email: Email): Promise<EmailStatus> {
      if (!this.rateLimiter.allow()) {
        return EmailStatus.RateLimitExceeded;
      }
}}