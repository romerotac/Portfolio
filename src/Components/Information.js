import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt,FaReact} from 'react-icons/fa';


/**Project 1 URL */
let project1ImageCover = require('../Images/project1/1.png');
let project1Image2 = require('../Images/project1/2.png');
let project1Image3 = require('../Images/project1/3.png');
let project1Image4 = require('../Images/project1/4.png');


let coverPath = require('../Images/empty_project.jpg')
let assestPath = require('../Images/empty_project.jpg')

const Information = [{
    id:1,
    title: 'Personal Portfolio',
    description: 'The Project was made by using ReactJs framework and css.',
    cover:project1ImageCover,
    demoURL:'https://github.com/romerotac/Portfolio',
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
    title: 'Project Number 2',
    description: 'This is the description of the second project',
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
    title: 'Project Number 4',
    description: 'This is the description of the fourth project',
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
