// EmailStatus.ts
var EmailStatus;
(function (EmailStatus) {
    EmailStatus[EmailStatus["Sent"] = 0] = "Sent";
    EmailStatus[EmailStatus["Failed"] = 1] = "Failed";
    EmailStatus[EmailStatus["RateLimitExceeded"] = 2] = "RateLimitExceeded";
    EmailStatus[EmailStatus["NoAvailableProviders"] = 3] = "NoAvailableProviders";
})(EmailStatus || (EmailStatus = {}));
