import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt,FaReact} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si'

/**Project 1 URL */
let project1ImageCover = require('../Images/project1/1.png');
let project1Image2 = require('../Images/project1/2.png');
let project1Image3 = require('../Images/project1/3.png');
let project1Image4 = require('../Images/project1/4.png');

/**Project 2 URL */
let project2ImageCover = require('../Images/project2/FunApp1.PNG');
let project2Image2 = require('../Images/project2/FunApp4.png');
let project2Image3 = require('../Images/project2/FunApp2.PNG');
let project2Image4 = require('../Images/project2/FunApp3.PNG');

/**Project 4 URL */
let project4ImageCover = require('../Images/project4/0.PNG');
let project4Image2 = require('../Images/project4/1.png');


/** No project space */
let coverPath = require('../Images/empty_project.jpg');
let assestPath = require('../Images/empty_project.jpg');

const Information = [{
    id:1,
    title: 'Personal Portfolio',
    description: 'The Project was made by using ReactJs framework and css.',
    cover:project1ImageCover,
    demoURL:'https://christianromerotaipe.netlify.app/',
    codeURL:'https://github.com/romerotac/Portfolio',
    icons:[{
        id:1,
        icon:<AiFillHtml5/>
        },
        {
        id:2,
        icon:<FaCss3Alt/>
        },
        {
        id:3,
        icon:<FaReact/>
        },
    ],
    images:[{
        id:1,
        src: project1ImageCover,
        alt: "Image1"
        },
        {
        id:2,
        src: project1Image2,
        alt: "Image2"
        },
        {
        id:3,
        src: project1Image3,
        alt: "Image3"
        },
        {
        id:4,
        src: project1Image4,
        alt: "Image4"
        },
    ],
},

{
    id:2,
    title: 'FunWeb',
    description: 'Project about creating a two fun pages, one containing a randomizer music player with the usage of Spotify API, and another a random generator of Chuck Norris Jokes',
    cover:project2ImageCover,
    demoURL:'https://myfunweb.netlify.app/',
    codeURL:'https://github.com/romerotac/FunWebDeployment',
    icons:[{
        id:1,
        icon:<AiFillHtml5/>
        },
        {
        id:2,
        icon:<FaCss3Alt/>
        },
        {
        id:3,
        icon:<FaReact/>
        },
    ],
    images:[{
        id:1,
        src: project2ImageCover,
        alt: "Image1"
        },
        {
        id:2,
        src: project2Image2,
        alt: "Image2"
        },
        {
        id:3,
        src: project2Image3,
        alt: "Image3"
        },
        {
        id:4,
        src: project2Image4,
        alt: "Image4"
        }
    ], 
},
{
    id:3,
    title: 'Project Number 3',
    description: 'This is the description of the third project',
    cover:coverPath,
    demoURL:'null',
    codeURL:'null',
    icons:[{
        id:1,
        icon:<AiFillHtml5/>
        },
        {
        id:2,
        icon:<FaCss3Alt/>
        },
        {
        id:3,
        icon:<FaReact/>
        },
    ],
    images:[{
        id:1,
        src: assestPath,
        alt: "Image1"
        },
        {
        id:2,
        src: assestPath,
        alt: "Image2"
        },
        {
        id:3,
        src: assestPath,
        alt: "Image3"
        }
    ], 
},
{
    id:4,
    title: 'Expense Tracker',
    description: 'Calculator of expeses made in JavaScript',
    cover:project4ImageCover,
    demoURL:'https://romerotac.github.io/JS-basic/',
    codeURL:'https://github.com/romerotac/JS-basic',
    icons:[{
        id:1,
        icon:<AiFillHtml5/>
        },
        {
        id:2,
        icon:<FaCss3Alt/>
        },
        {
        id:3,
        icon:<SiJavascript/>
        },
    ],
    images:[{
        id:1,
        src: project4ImageCover,
        alt: "Image1"
        },
        {
        id:2,
        src: project4Image2,
        alt: "Image2"
        }
    ], 
},
{
    id:5,
    title: 'Project Number 5',
    description: 'This is the description of the fifth project',
    cover:coverPath,
    demoURL:'null',
    codeURL:'null',
    icons:[{
        id:1,
        icon:<AiFillHtml5/>
        },
        {
        id:2,
        icon:<FaCss3Alt/>
        },
        {
        id:3,
        icon:<FaReact/>
        },
    ],
    images:[{
        id:1,
        src: assestPath,
        alt: "Image1"
        },
        {
        id:2,
        src: assestPath,
        alt: "Image2"
        },
        {
        id:3,
        src: assestPath,
        alt: "Image3"
        }
    ],
},
{
    id:6,
    title: 'Project Number 6',
    description: 'This is the description of the sixth project',
    cover:coverPath,
    demoURL:'null',
    codeURL:'null',
    icons:[{
        id:1,
        icon:<AiFillHtml5/>
        },
        {
        id:2,
        icon:<FaCss3Alt/>
        },
        {
        id:3,
        icon:<FaReact/>
        },
    ],
    images:[{
        id:1,
        src: assestPath,
        alt: "Image1"
        },
        {
        id:2,
        src: assestPath,
        alt: "Image2"
        },
        {
        id:3,
        src: assestPath,
        alt: "Image3"
        }
    ], 
},
];

export default Information;
