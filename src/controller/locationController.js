const locationModel = require("../model/locationModel");

exports.getAllLocation = async (req, res) => {
try {
    const location = await locationModel.getAllLocation();
    res.render("listLocation", { location: location });
} catch (err) {
    res.status(500).json({ error: err.toString() });
}
};

exports.getContact = async (req, res) => {
try {
    res.render("contact");
} catch (err) {
    res.status(500).json({ error: err.toString() });
}
};

exports.getHome = async (req, res) => {
try {
    res.render("home");
} catch (err) {
    res.status(500).json({ error: err.toString() });
}
};

exports.getFormulario = async (req, res) => {
try {
    res.render("formulario"); // Certifique-se de que o nome do arquivo EJS é "formulario.ejs"
    
} catch (err) {
    res.status(500).json({ error: err.toString() });
}
};