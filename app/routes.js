//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Run this code when a form is submitted to
router.post("/Question4", function (req, res) {
  var careHome = req.session.data["care-home"];

  // Check whether the variable matches a condition
  if (careHome == "Yes") {
    // Send user to next page
    res.redirect("/ineligible");
  } else {
    res.redirect("/Question4");
  }
});

router.post("/Question2", function (req, res) {
  var ageCheck = req.session.data["age-2"];

  // Check whether the variable matches a condition
  if (ageCheck == "No") {
    // Send user to next page
    res.redirect("/ineligible2");
  } else {
    res.redirect("/Question2");
  }
});

router.post("/Question3", function (req, res) {
  var whereCheck = req.session.data["whereDoYouLive-2"];

  // Check whether the variable matches a condition
  if (whereCheck == "No") {
    // Send user to next page
    res.redirect("/ineligible3");
  } else {
    res.redirect("/Question3");
  }
});
router.post("/End", function (req, res) {
  var whereCheck = req.session.data["wage-2"];

  // Check whether the variable matches a condition
  if (whereCheck == "No") {
    // Send user to next page
    res.redirect("/introMain");
  } else {
    res.redirect("/End");
  }
});

const session = function () {
  var req = req.session.data;
  req.session.data["full-name"],
    req.session.data["nino"],
    req.session.data["DOB-day"],
    req.session.data["DOB-month"],
    req.session.data["DOB-year"],
    req.session.data["addressLine1"],
    req.session.data["addressLine2"],
    req.session.data["addressTown"],
    req.session.data["addressCountry"],
    req.session.data["addressPostcode"];
};

// function addClaimant (){

// function processResponse(response){

//     console.log("Done")
// }

// let handleSubmit = ()=>{

//     let data = {

//             "fullName": req.session.data["full-name"],
//            "Nino": req.session.data["nino"],
//            "DOB": req.session.data["DOB-day"]["DOB-month"]["DOB-year"],
//            "Address": req.session.data["addressLine1"]["addressLine2"]["addressTown"]["addressPostcode"],
//            "Country" : req.session.data["addressCountry"],

// let obj1=fetch("http://localhost:8000/",{
//     method:"POST",
//     headers:{"Content-Type": "application/json"},
//     body: JSON.stringify(data)
// })

// obj1.then(processResponse)
// }
