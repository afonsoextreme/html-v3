function redirectToPaymentPage(paymentMethod) {
    var paymentPage;

    // Defina URLs fictícias para cada método de pagamento
    switch (paymentMethod) {
        case 'paypal':
            paymentPage = 'https://www.paypal.com';
            break;
        case 'multibanco':
            paymentPage = 'https://www.multibanco.com';
            break;
        case 'mbway':
            paymentPage = 'https://www.mbway.com';
            break;
        case 'visa':
            paymentPage = 'https://www.visa.com';
            break;
        default:
            paymentPage = 'https://www.example.com';
    }

    // Redireciona para a página correspondente
    window.location.href = paymentPage;
}