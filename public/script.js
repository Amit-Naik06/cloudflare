function orderProduct(productName) {
    const phone = "9850038125";  // <--- put your WhatsApp number here (without +)
    const message = `Hello, I want to order: ${productName}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
