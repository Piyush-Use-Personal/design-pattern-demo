class User {
    constructor(name) {
        this.name = name;
    }

    getPermissions() {
        return 'Basic user permissions';
    }
}

class AdminDecorator {
    constructor(user) {
        this.user = user;
    }

    getPermissions() {
        return `${this.user.getPermissions()} + Admin privileges`;
    }
}
