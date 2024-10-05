// Factory Pattern (Creational) – if we expand it more to support sub-routes
import { BadRequest, Unauthorized } from "./response.js";

export class API {
    constructor(url, input) {
        this.url = url;
        this.input = input;
    }

    call() {
        // Simulate API call here
        if(!this.accessToken) {
            return new Unauthorized(401, 'unauthorized')
        }
        if(!this.input) {
            return new BadRequest(400, 'bad request')
        }
        return this.response;  // Return the expected response class
    }

    // to manage access token
    addToken(accessToken) {
        this.accessToken = accessToken
        return this
    }

    // static function to mock success
    static withSuccess(url, input, response){
        const api = new API(url, input)
        api.response = response
        return api
    }
}
