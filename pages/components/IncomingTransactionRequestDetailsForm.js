class IncomingTransactionRequestDetailsFrame {
    constructor() { }

    getTransactionAmount(transactionId) {
        return { css: `[data-test="transaction-amount-${transactionId}` }
    }

    getTransactionSender(transactionId) {
        return { css: `[data-test="transaction-sender-${transactionId}"]` }
    }

    getTransactionReceiver(transactionId) {
        return { css: `[data-test="transaction-receiver-${transactionId}"]` }
    }

    get transactionDescription() {
        return { css: '[data-test="transaction-description"]' }
    }

    getTransactionRejectBTN(transactionId) {
        return { css: `[data-test="transaction-reject-request-${transactionId}"]` }
    }

    getTransactionAcceptBTN(transactionId) {
        return { css: `[data-test="transaction-accept-request-${transactionId}"]` }
    }

    getTranscationLiketBTN(transactionId) {
        return { css: `[data-test="transaction-like-button-${transactionId}"]` }
    }

    getTransactionLikesAmount(transactionId) {
        return { css: `[data-test="transaction-like-count-${transactionId}"]` }
    }

    getTransactionCommentInput(transactionId) {
        return { css: `[data-test="transaction-comment-input-${transactionId}"]` }
    }

    get commentsList() {
        return { css: `[data-test="comments-list"]` }
    }
}

module.exports = IncomingTransactionRequestDetailsFrame