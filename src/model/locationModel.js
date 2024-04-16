const { rejects } = require("assert");
const fs = require("fs");
const path = require("path");
const fileName = "dbLocation.json";
const filePath = path.join(__dirname, "..", "database", fileName);
class locationModel {
static async getLocation() {
    return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
        if (err.code === "ENOENT") {
            this.writeProductsToFile([]);
            return [];
        } else {
            reject(err);
        }
        } else {
        resolve(JSON.parse(data));
        }
    });
    });
}

static async writeLocationToFile(location) {
    return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(location), (err) => {
        if (err) reject(err);
        console.log(`Data written to file: ${filePath}`);
        resolve(this.getAllLocation());
    });
    });
}

static async getAllLocation() {
    const location = await this.getLocation();
    return location;
}

static async getnewlocation(){
    const location = await this.getAllLocation();
    return location;
}
}


module.exports = locationModel;