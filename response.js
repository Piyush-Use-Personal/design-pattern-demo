// Strategy Pattern (Behavioral) –
export class Response {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }

    handle() {
        throw new Error("This method should be overridden by subclasses");
    }
}

export class BadRequest extends Response {
    handle() {
        console.log(`Handling 400: ${this.message}`);
    }
}

export class Unauthorized extends Response {
    handle() {
        console.log(`Handling 401: ${this.message}`);
    }
}

export class Success extends Response {
    handle() {
        console.log(`Handling 200: ${this.message}`);
    }
}