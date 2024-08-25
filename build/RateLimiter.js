"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiter = void 0;
// RateLimiter.ts
var RateLimiter = /** @class */ (function () {
    function RateLimiter(limit) {
        this.limit = limit;
        this.count = 0;
    }
    RateLimiter.prototype.allow = function () {
        if (this.count >= this.limit) {
            return false;
        }
        this.count++;
        return true;
    };
    RateLimiter.prototype.reset = function () {
        this.count = 0;
    };
    return RateLimiter;
}());
exports.RateLimiter = RateLimiter;
//# sourceMappingURL=RateLimiter.js.map