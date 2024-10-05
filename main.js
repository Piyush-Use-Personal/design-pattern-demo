import { AccessToken } from "./access-token.js";
import { API } from "./api.js";
import { TestEngine } from "./engine.js";
import { BadRequest, Success, Unauthorized } from "./response.js";

const engine = new TestEngine();

const someInput = {}

const accessToken = new AccessToken()

engine.addTest(
    [
        {
            name: 'Check if category is fetched',
            run: () => {
                const categoryApi = API
                    .withSuccess('/category', someInput, new Success(200, 'category fetched'))
                    .addToken(accessToken)
        
                return categoryApi.call()
            },
            shouldBe: new Success(200, 'category fetched')
        },
        {
            name: 'Check if no token results in unauthorized',
            run: () => {
                const categoryApi = API
                    .withSuccess('/category', someInput)
                return categoryApi.call()
            },
            shouldBe: new Unauthorized(401, 'unauthorized')
        },
        {
            name: 'Check no input result in bad request',
            run: () => {
                const productApi = API
                    .withSuccess('/product')
                    .addToken(accessToken)
                return productApi.call()
            },
            shouldBe: new Unauthorized(400, 'bad request')
        },
    ]
)

engine.run()