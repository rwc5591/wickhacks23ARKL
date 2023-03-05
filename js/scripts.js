/*!
* Start Bootstrap - Landing Page v6.0.5 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//import selection html file

//multiple element selector

let userList = [
    { username: "JuliaHarp", firstName: "Julia", lastName: "Harp", age: 19, gender: "Female", pronouns: "She/Her", location: "New York, NY", genre1: "Pop", genre2: "Indie", genre3: "Country"},
    { username: "AlexSmith", firstName: "Alex", lastName: "Smith", age: 22, gender: "Male", pronouns: "He/Him", location: "Buffalo, NY", genre1: "Indie", genre2: "Pop", genre3: "Jazz"},
    { username: "MariaRose", firstName: "Maria", lastName: "Rose", age: 20, gender: "Nonbinary", pronouns: "They/Them", location: "Rochester, NY", genre1: "K-Pop", genre2: "Indie", genre3: "EDM"},
    { firstName: "Aisha", lastName: "Bhakta", age: 19, gender: "Female", pronouns: "They/Them", location: "Rochester, NY"}
]

function fillObjectUsername(user) {
    userList[3].username == user;
}

function fillGenre(gen1, gen2, gen3) {
    userList[3].genre1 == gen1;
    userList[3].genre2 == gen2;
    userList[3].genre3 == gen3;
}

function fillArtist(art1, art2, art3) {
    userList[3].artist1 == art1;
    userList[3].artist2 == art2;
    userList[3].artist3 == art3;
}