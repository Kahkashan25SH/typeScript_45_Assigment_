function make_album(artistName, albumTitle, tracks) {
    var album = {
        artist: artistName,
        title: albumTitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions
var album = make_album("Neha Kakkar", "Album title 1");
var album2 = make_album("Ali Zafer", "Album title 2");
var album3 = make_album("Mickle Jecson", "Album title 3", 7);
console.log(album);
console.log(album2);
console.log(album3);
