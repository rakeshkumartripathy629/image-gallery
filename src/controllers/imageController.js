const userModel = require("../models/userModel.js");
const imageModel = require("../models/imageModel.js");

module.exports.createImage = async (req, res) => {
  try {
    let requestbody = req.body;
    let {userId } = requestbody;
    const finduser = await userModel.findById({ _id: userId });
    console.log(finduser.role);
    if (!finduser) return res.status(404).send({ msg: "User Not Found" });

    if (finduser.role === "ADMIN") {
      let addimage = await imageModel.create(requestbody);
      return res.status(201).send({
        status: true,
        message: "image Create Successfully",
        data: addimage,
      });
    } else{
      return res.status(401).send({
        status: true,
        message: "Not Authorised",
      });
    }
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports. getImage = async function (req, res) {
  try {
    const query = req.query;
    let findImage = await imageModel.find(query);

    return res
      .status(200)
      .send({ staus: true, msg: "All image", data: findImage });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports. updateImage = async function (req, res) {
  try {
    
    req.userId;
    let finduser = await userModel.findById(req.userId);
    console.log(finduser.role);
    if (!finduser)
      return res.status(404).send({ status: false, message: "User Not Found" });
    if (finduser.role === "ADMIN") {
      const requestbody = req.body;
      let ImageId = req.params.id;
      const findImage = await imageModel.findById(ImageId);
      if (!findImage)
        return res.status(404).send({ status: false, msg: "Image not Found" });
  
      const updateImage = await imageModel.findByIdAndUpdate(
        { _id: ImageId },
        requestbody,
        { new: true }
      );
      return res.status(200) .send({
          status: true,
          msg: "Image  Update Successfully",
          data: updateImage,
        });
    } else {
      return res.status(200).send({
        status: false,
        message: "Unautrorized User",
      });
    }


  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });

  }
 
};

module.exports. deleteImage = async function (req, res) {
 try {
  req.userId;
  let finduser = await userModel.findById(req.userId);
  console.log(finduser.role);
  if (!finduser)
    return res.status(404).send({ status: false, message: "User Not Found" });
  if (finduser.role === "ADMIN") {
    let ImageId = req.params.id;
    console.log(ImageId);

    const findImage = await imageModel.findById(ImageId);
    if (!findImage)
      return res.status(404).send({ status: false, msg: "Image not Found" });

    let deleteImage = await imageModel.findByIdAndDelete({
      _id: ImageId,
    });
    return res.status(200).send({
      status: true,
      message: "Image Deleted Successfully",
      data: deleteImage,
    });
  } else {
    return res.status(200).send({
      status: false,
      message: "Unautrorized User",
    });
  }

 } catch (error) {
  return res.status(500).send({ status: false, message: error.message });

 }
  
};
