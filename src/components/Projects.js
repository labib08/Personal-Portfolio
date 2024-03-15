import mewtify from '../assets/img/MewtifyImg.png';
import autoComplete from '../assets/img/autoComplete.png';
import searchCafe from '../assets/img/searchCafe.webp';
import shadowPac from '../assets/img/shadowPacImg.png';
import sqlGraph from '../assets/img/sqlGraph.png';
import topAritst from '../assets/img/top_artist.webp';


const Projects = () => {
    const projects = [
        {
          index: 0,
          title: "ShadowPac",
          description: "This game is an imitation of the original 80’s arcade game Pac-Man. The game was developed using a game engine library using Java Programming language.",
          imgUrl: shadowPac,
          GitHub: "https://github.com/labib08/ShadowPac",
        },
        {
          index: 1,
          title: "Mewtify",
          description: "This code is an imitation of the digital music streaming service Spotify. This music service contains 5 of the songs that are most streamed on Spotify, and 1 song that is not on Spotify.",
          imgUrl: mewtify,
          GitHub: "https://github.com/labib08/Mewtify",
        },
        {
          index: 2,
          title: "Search Dictionary",
          description: "The code uses dynamic memory allocation and linked data structure to create a dictionary and store cafe information from a dataset about the City of Melbourne. A user will be able to search this dictionary to retrieve information about cafes in Melbourne using attributes in the dataset (keys).",
          imgUrl: searchCafe,
          GitHub: "https://github.com/labib08/Cafe-Dictionary",
        },
        {
          index: 3,
          title: "AFL-Analysis-2022",
          description: 'The code parses through the csv file "AFL-2022-totals.csv" and produces the following graphs and tables. Then, Supervised learning techniques are used to determine if predictive models can be developed.',
          imgUrl: sqlGraph,
          GitHub: "https://github.com/labib08/AFL-2022",
        },
        {
          index: 4,
          title: "Top-Artists",
          description: 'The code parses through the URL "https://www.insider.com/spotify-most-monthly-listeners-artists-2023-8" to find the top 20 most streamed artists, along with their monthly listeners and their most streamed song using Beautiful Soup, and is updated in real-time.',
          imgUrl: topAritst,
          GitHub: "https://github.com/labib08/Top-Artists",
        },
        {
          index: 5,
          title: "Autocomplete-lookup",
          description: 'The code uses dynamic memory allocation and data structure to look up cafes around the city of Melbourne by entering their prefix.',
          imgUrl: autoComplete,
          GitHub: "https://github.com/labib08/Autocomplete-Lookup",
        },
      ];
      const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className = 'projects'id = "projects">

            <h2 style={{marginTop: '80px'}}>Projects</h2>
            <p>These are the projects that I worked on over the couple of years</p>
            <div responsive = {responsive} className='container projects_container'>
                {
                    projects.map(({index, title, description, imgUrl, GitHub}) => {
                        return (
                            <article key = {index} className='projects_item'>
                                <div  className='projects_item-image'>
                                    <img src={imgUrl} alt = {title} style={{ width: '300px', height: '200px', borderRadius: '24px' }}/>
                                </div>
                                <h3>{title}</h3>
                                <p >{description}</p>
                                <div className='.projects_item-cta'>
                                <a href={GitHub} className='btn' target='blank'>GitHub</a>
                                </div>

                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects;