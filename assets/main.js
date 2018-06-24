// console.log("This is to confirm my JS file is linked");

$(document).ready(function () {

  Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzafKrWtGRtjqkw5bJAMvfI88uL4ks6Sg",
    authDomain: "train-schedule-f3fbb.firebaseapp.com",
    databaseURL: "https://train-schedule-f3fbb.firebaseio.com",
    projectId: "train-schedule-f3fbb",
    storageBucket: "",
    messagingSenderId: "604209644581"
  }

  firebase.initializeApp(config);

  var trainName = "";
  var destination = "";
  var trainTime = "";
  var timeFormat = "MM/DD/YYYY";
  // var formatedTrainTime = moment(trainTime, timeFormat);
  var frequency ="";
  // var formatedFrequency = 

  console.log(trainTime);

  $("#submitBtn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    formatedTrainTime = moment($("#firstTrainTime").val().trim(),"HH:mm".format("LTS"));
    frequency = $("#frequency").val().trim();

    var newTrain = {
      trainName:TheTrainName,
      destination: TheDestination,
      formatedTrainTime: correctTrainTime,
      formatedFrequency: correctfrequency
    };

    database.ref().push(newTrain);
    console.log(trainName);
    console.log(destination);
    console.log(formatedTrainTime);
    console.log(frequency);

  
  },
  )})
