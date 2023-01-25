// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

      
 let imgUrlArr = [/* Take to the skies 0*/"https://r1.ilikewallpaper.net/ipad-air-wallpapers/download/4412/Legend-of-the-Guardians-the-Owls-of-GA-Hoole-iPad-4-wallpaper-                              ilikewallpaper_com_200.jpg", 
                  /* can't smile without you 1*/ "https://img.discogs.com/NiWUUGLUccmrfuBlOK797i_Q5qo=/fit-in/600x594/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2447871-1557493627-4076.jpeg.jpg",
                  /* lagtrain (english cover) 2*/ "https://www.bing.com/images/search?view=detailV2&ccid=haiqWJRu&id=E26C3D061996F286F788F104D84FAEAC8E64BE08&thid=OIP.haiqWJRuvtZLcrfqH4RChgHaEK&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2fBEnZ0VgQAXw%2fmaxresdefault.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.85a8aa58946ebed64b72b7ea1f844286%3frik%3dCL5kjqyuT9gE8Q%26pid%3dImgRaw%26r%3d0&exph=720&expw=1280&q=lagTrain+english+cover&simid=608004727873484749&FORM=IRPRST&ck=4911A9AD81A9FBC3693011C76BB6289D&selectedIndex=2" , 
                  /*she's leaving home 3*/ "https://pleasuresofpasttimes.com/wp-content/uploads/2017/07/FullSizeRender-15.jpg" , 
                  /* rainbow connection 4*/ "https://www.bing.com/images/search?view=detailV2&ccid=cQyTv1Yj&id=4FE564BDD7BC465700F22D93A96F82BFC5DA5F62&thid=OIP.cQyTv1Yjw1aTH6gdve_fwwHaE7&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.710c93bf5623c356931fa81dbdefdfc3%3frik%3dYl%252faxb%252bCb6mTLQ%26riu%3dhttp%253a%252f%252fvignette2.wikia.nocookie.net%252fmuppet%252fimages%252fa%252faf%252fRainbow_connection_duet.jpg%252frevision%252flatest%252fscale-to-width-down%252f2000%253fcb%253d20120207003515%26ehk%3dIjn2E3soqzrNKsznvqWcvntc2%252fUgC2UbgBWRhPHqWhg%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1333&expw=2000&q=rainbow+connection+&simid=608028586411372035&FORM=IRPRST&ck=7A6CB22FA71F854BC172F55738378AED&selectedIndex=0"];

let songNameArr = ["Take to the skies", "can't smile without you", "lagtrain (english cover)", "she's leaving home" , "Rainbow connection"];

let artistArr = [/* Take to the skies 0*/ "Owl city",  /* can't smile without you 1*/, "Barry Manilow",/* lagtrain (english cover) 2*/,"Will Stetson", /*she's leaving home 3*/, "The beatles"  /* rainbow connection 4*/, "Kermit the frog" ];

let songLinkArr = [/* Take to the skies 0*/, "https://www.youtube.com/watch?v=ukgvTE3A0Ic", /* can't smile without you 1*/ "https://www.youtube.com/watch?v=3V_7-7myPxM", /* lagtrain (english cover) 2*/ " https://www.youtube.com/watch?v=BEnZ0VgQAXw&list=WL&index=33", /*she's leaving home 3*/ "https://www.youtube.com/watch?v=Dypv4SLyAfg",  /* rainbow connection 4*/, "https://www.youtube.com/watch?v=69PQuw0r3oM"];


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
