class User {
    constructor(data) {
        this.id = data.id;
        this.email = data.email;
        this.firstName = data.first_name;
        this.lastName = data.last_name;
        this.avatar = data.avatar;
    }
}

export default User;