class Stock {
    constructor(symbol) {
        this.symbol = symbol;
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notify(price) {
        this.observers.forEach(observer => observer.update(this.symbol, price));
    }
}

class Trader {
    update(symbol, price) {
        console.log(`${symbol} is now priced at ${price}`);
    }
}
