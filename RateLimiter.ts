// RateLimiter.ts
export class RateLimiter {
    private limit: number;
    private count: number;
  
    constructor(limit: number) {
      this.limit = limit;
      this.count = 0;
    }
  
    allow(): boolean {
      if (this.count >= this.limit) {
        return false;
      }
      this.count++;
      return true;
    }
  
    reset(): void {
      this.count = 0;
    }
  }