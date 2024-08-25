"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailStatus = void 0;
// EmailStatus.ts
var EmailStatus;
(function (EmailStatus) {
    EmailStatus[EmailStatus["Sent"] = 0] = "Sent";
    EmailStatus[EmailStatus["Failed"] = 1] = "Failed";
    EmailStatus[EmailStatus["RateLimitExceeded"] = 2] = "RateLimitExceeded";
    EmailStatus[EmailStatus["NoAvailableProviders"] = 3] = "NoAvailableProviders";
})(EmailStatus || (exports.EmailStatus = EmailStatus = {}));
//# sourceMappingURL=EmailStatus.js.map