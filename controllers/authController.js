exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Lognin",
    currentPage: "login",
    editing: false,
    isLoggedIn: false
  });
};

exports.postlogin = (req,res,next) =>{
  console.log(req.body)
  res.cookie("isLoggedIn", "true");
  res.redirect("/")
}

exports.postLogout = (req,res,next)=>{
  res.cookie("isLoggedIn",false)
  res.redirect("/login")
}