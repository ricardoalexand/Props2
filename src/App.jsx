import './App.css'

// A completed exercises will look like this: https://imgur.com/vnh32uM
// Information is stored in the object titled `artistData`.

let artistData = {
  cities: ["The Weeknd", "Lizzo", "Bad Bunny"],
  image: [
    "https://akns-images.eonline.com/eol_images/Entire_Site/2021330/rs_1200x1200-210430163406-1200-the-weeknd.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
    "https://media.allure.com/photos/630514200b069bdf8c93f72f/3:2/w_2571,h_1714,c_limit/lizzo%20side%20ponytail%20.png",
    "https://s1.ticketm.net/dam/a/010/aa178e43-b5e8-44aa-bc2b-8c5975412010_1419701_TABLET_LANDSCAPE_LARGE_16_9.jpg"
  ],
  famousSongs: [
    "Save Your Tears, I Can't Feel My Face, Blinding Lights",
    "About Damn Time, Truth Hurts, 2 Be Loved",
    "Me porto bonito, Neverita, Moscow Mule"
  ]
};

export default function App() {

// 2. Render 3 instances of the ArtistCard component.
//  - Use object notation to have information about each artist display in its own instance.
//  - When you use JavaScript in JSX, you MUST use curly braces.
  return (
    <div>
      <h1 className="title">MusicPedia</h1>
      <h2 className="subheading">Find out info about your favorite artists 🎶🔍</h2>
    </div>
  );
}




// 1. We want to create a div that contains information about each artist in the `artistData` object.
//  - Code the following JSX using props:
//    - An `h2` tag to hold the name of the artist
//    - An `img` tag to display a picture of the artists
//    - A `p` tag to list popular songs by the artist
function ArtistCards(props) {
  return <div className="card"></div>;
}