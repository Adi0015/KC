
exports.getHome = async (req, res) => {
  try{
    res.status(200).render("home", { page: "Home", content: "default" });
  } catch (error) {
    console.log(error);
    res.status(404).render("404",{content:"default"});
  }
}

exports.getAdmission = async (req, res) => {
  res.status(200).render("admission", { page: "admission"});
};
exports.getContact= async (req, res) => {
    res.status(200).render("contact", { page: "contact"});
};
exports.getActivity = async (req, res) => {
    res.status(200).render("activity", { page: "activity"});
};
exports.getRegistration = async (req, res) => {
    res.status(200).render("registration", { page: "registration"});
};