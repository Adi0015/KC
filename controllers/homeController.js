const Enquiry = require('../models/enquiry')
exports.getHome = async (req, res) => {
  try {
    res.status(200).render("home", { page: "Home", content: "default" });
  } catch (error) {
    console.log(error);
    res.status(404).render("404", { content: "default" });
  }
}

exports.getAdmission = async (req, res) => {
  res.status(200).render("admission", { page: "admission" });
};
exports.getContact = async (req, res) => {
  res.status(200).render("contact", { page: "contact" });
};
exports.createContact = async (req, res) => {
  let {
    parent_name,
    parent_email,
    parent_phone,
    message
  } = req.body
  console.log(parent_name);
  try {
    let enquiry = new Enquiry(parent_name,
      parent_email,
      parent_phone,
      message)
    let data = await enquiry.save()
    res.status(200).redirect('/')
  } catch (error) {
    console.log(error);
    res.status(500).render('404')
  }
};
exports.getActivity = async (req, res) => {
  res.status(200).render("activity", { page: "activity" });
};
exports.getRegistration = async (req, res) => {
  res.status(200).render("registration", { page: "registration" });
};
