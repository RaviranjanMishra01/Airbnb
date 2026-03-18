exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Lognin",
    currentPage: "login",
    editing: false,
  });
};

exports.postlogin = (req,res,next) =>{
  res.render("/")
}
 