const enquiryModel = require("../../models/enquiry.modal");

let enquiryinsert = async (req, res) => {
  try {
    let { name, email, phone, message } = req.body;
    let enquiry = new enquiryModel({ name, email, phone, message });
    await enquiry.save();
    res.send({ status: true, message: "Enquiry Saved" });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

let enquirylist = async (req, res) => {
  try {
    let data = await enquiryModel.find();
    res.send({ status: true, data: data });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

let enquirydelete = async (req, res) => {
  try {
    let id = req.params.id;
    await enquiryModel.deleteOne({ _id: id });
    res.send({ status: true, message: "Deleted" });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

let enquiryupdate = async (req, res) => {
  try {
    let id = req.params.id;
    let enquiry = await enquiryModel.findOne({ _id: id });
    res.send({ status: true, enquiry });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

let updaterow = async (req, res) => {
  try {
    let id = req.params.id;
    let { name, email, phone, message } = req.body;
    await enquiryModel.updateOne({ _id: id }, { name, email, phone, message });
    res.send({ status: true, message: "Updated" });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { enquiryinsert, enquirylist, enquirydelete, enquiryupdate, updaterow };