// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Empolyee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName) {
        super(name, id, email);
        this.gitHubUserName = this.gitHubUserName;
}
getGitHub() {
    return this.gitHub;
}
getRole() {
    return "Engineer";
}
}
module.exports = Engineer;