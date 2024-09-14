document.addEventListener('DOMContentLoaded', function() {
    // Fetch quotes and orders data from your backend
    fetchQuotes();
    fetchOrders();
});

function fetchQuotes() {
    // Example AJAX call to fetch quotes
    fetch('/api/quotes')
        .then(response => response.json())
        .then(data => {
            const quotesContainer = document.getElementById('quotes');
            quotesContainer.innerHTML = '<h2>Quotes</h2>';
            data.forEach(quote => {
                const quoteItem = document.createElement('div');
                quoteItem.classList.add('quote-item');
                quoteItem.innerHTML = `
                    <h5>Quote #${quote.id}</h5>
                    <p>Status: <span class="badge bg-warning">${quote.status}</span></p>
                    <p>Details: <a href="/quote/${quote.id}">View Quote</a></p>
                `;
                quotesContainer.appendChild(quoteItem);
            });
        });
}

function fetchOrders() {
    // Example AJAX call to fetch orders
    fetch('/api/orders')
        .then(response => response.json())
        .then(data => {
            const ordersContainer = document.getElementById('orders');
            ordersContainer.innerHTML = '<h2>Orders</h2>';
            data.forEach(order => {
                const orderItem = document.createElement('div');
                orderItem.classList.add('order-item');
                orderItem.innerHTML = `
                    <h5>Order #${order.id}</h5>
                    <p>Status: <span class="badge bg-info">${order.status}</span></p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${order.progress}%" aria-valuenow="${order.progress}" aria-valuemin="0" aria-valuemax="100">${order.progress}%</div>
                    </div>
                    <p>Details: <a href="/order/${order.id}">View Order</a></p>
                `;
                ordersContainer.appendChild(orderItem);
            });
        });
}
