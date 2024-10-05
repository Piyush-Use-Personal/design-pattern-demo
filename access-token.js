// Singleton Pattern
export class AccessToken {
    constructor() {
        if (AccessToken.instance) {
            return AccessToken.instance;
        }
        this.token = null;
        AccessToken.instance = this;
    }

    generateToken(credentials) {
        // Simulate token generation from credentials
        this.token = `token_${credentials.username}_${credentials.password}`;
        return this.token;
    }

    getToken() {
        return this.token;
    }
    
    verifyToken() {
        return true; // check for validity
    }
}