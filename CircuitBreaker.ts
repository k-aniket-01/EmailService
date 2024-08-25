// CircuitBreaker.ts
export class CircuitBreaker {
    private timeout: number;
    private maxFailures: number;
    private failures: number;
    private timeoutId: NodeJS.Timeout | null;
  
    constructor(timeout: number, maxFailures: number) {
      this.timeout = timeout;
      this.maxFailures = maxFailures;
      this.failures = 0;
      this.timeoutId = null;
    }
  
    async execute<T>(fn: () => Promise<T>): Promise<T> {
      if (this.failures >= this.maxFailures) {
        throw new Error('Circuit breaker is open');
      }
  
      try {
        return await fn();
      } catch (error) {
        this.failures++;
        if (this.failures >= this.maxFailures) {
          this.open();
        }
        throw error;
      }
    }
  
    private open(): void {
      this.timeoutId = setTimeout(() => {
        this.failures = 0;
        this.timeoutId = null;
      }, this.timeout);
    }
  }