// console.log("This is to confirm my JS file is linked");

$(document).ready(function () {

  // 1-Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzafKrWtGRtjqkw5bJAMvfI88uL4ks6Sg",
    authDomain: "train-schedule-f3fbb.firebaseapp.com",
    databaseURL: "https://train-schedule-f3fbb.firebaseio.com",
    projectId: "train-schedule-f3fbb",
    storageBucket: "",
    messagingSenderId: "604209644581"
  }

  firebase.initializeApp(config);

  var database = firebase.database()

  // 2-Declare initial variables.
  var trainName = "";
  var destination = "";
  var trainTime = "";
  // var timeFormat = "";
  // var formatedTrainTime = moment(trainTime, timeFormat);
  var frequency = "";
  // var formatedFrequency = 

  console.log(trainTime);

  // 3-Button for adding the train.
  $("#submitBtn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    formatedTrainTime = $("#firstTrainTime").val().trim(), "HH:mm".format("LTS");
    frequency = $("#frequency").val().trim();
    console.log = trainName;
    console.log = destination;
    console.log = trainTime;
    console.log = frequency;

  // Creates a local "temporary" object for holding train data.
  var newTrain = {
    trainName: TheTrainName,
    destination: TheDestination,
    formatedTrainTime: correctTrainTime,
    formatedFrequency: correctfrequency
  };

  // Uploads employee data to the database.
  database.ref().push(newTrain);

  console.log(trainName);
  console.log(destination);
  console.log(formatedTrainTime);
  console.log(frequency);

  // Alert.
  alert("Train sucessfully added.");

  // Clears input areas.
  $("#trainName").val("");
  $("#destination").val("");
  $("#firstTrainTime").val("");
  $("#frequency").val("");
  });
  
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var TheTrainName = childSnapshot.val().trainName;
    var TheDestination = childSnapshot.val().destination;
    var correctTrainTime = childSnapshot.val().formatedTrainTime;
    var correctfrequency =  childSnapshot.val().formatedFrequency;
  
    // Employee Info
    console.log(TheTrainName);
    console.log(TheDestination);
    console.log(correctTrainTime);
    console.log(correctfrequency);

    // Add each train's data into the table
  $("#train-table > tbody").append("<tr><th>" + trainName + "</th><td>" + destination + "</td><td>" +
  formatedTrainTime + "</td><td>" + formatedFrequency + "</td>");
});


})
