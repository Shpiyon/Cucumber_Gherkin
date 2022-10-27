class IncomingTransactionRequestDetailsFrame{
    constructor() {}

    getTransactionAmount(transactionId){
        return cy.get(`[data-test="transaction-amount-${transactionId}`)
    }

    getTransactionSender(transactionId){
        return cy.get(`[data-test="transaction-sender-${transactionId}"]`)
    }

    getTransactionReceiver(transactionId){
        return cy.get(`[data-test="transaction-receiver-${transactionId}"]`)
    }

    get transactionDescription() {
        return cy.get('[data-test="transaction-description"]')
    }

    getTransactionRejectBTN(transactionId){
        return cy.get(`[data-test="transaction-reject-request-${transactionId}"]`)
    }

    getTransactionAcceptBTN(transactionId){
        return cy.get(`[data-test="transaction-accept-request-${transactionId}"]`)
    }

    getTranscationLiketBTN(transactionId){
        return cy.get(`[data-test="transaction-like-button-${transactionId}"]`)
    }

    getTransactionLikesAmount(transactionId){
        return cy.get(`[data-test="transaction-like-count-${transactionId}"]`)
    }

    getTransactionCommentInput(transactionId){
        return cy.get(`[data-test="transaction-comment-input-${transactionId}"]`)
    }

    get commentsList(){
        return cy.get(`[data-test="comments-list"]`)
    }
}

module.exports = new IncomingTransactionRequestDetailsFrame()