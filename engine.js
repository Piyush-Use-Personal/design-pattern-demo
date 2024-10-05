// Chain of Responsibility (Behavioral)
export class TestEngine {
    constructor() {
        this.tests = [];
    }

    addTest(test) {
        if(Array.isArray(test)) {
            this.tests.push(...test)
        } else {
            this.tests.push(test);
        }
    }

    run() {
        let i = 1;
        const total = this.tests.length;
        for (const test of this.tests) {
            const counter = `${i}/${total}`

            const result = test.run();
            const shouldBe = test.shouldBe
            if (!result) {
                console.error(`Test ${counter} failed: ${test.name}`);
            } else if(
                result.status === shouldBe.status &&
                result.message === shouldBe.message
            ) {
                console.log(`Test ${counter} passed: ${test.name}`)
            } else {
                console.error(`Test ${counter} failed: ${test.name}`);
            }
            i++;
        }
    }
}