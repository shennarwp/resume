COMPANY = "at Technology Corp ";
SKILLS = "my superior technology skills";
OUTCOME = "ensure a high level of efficiency and productivity";


DATA = {
    resumeName:"General Resume",
    resumeVersion:"2.3.0",
    applicant:"Shenna R Wilfred Piri",
    role:"Junior Java Developer",          //what you would consider yourself, this can be the position applied for
    website:"https://shennarwp.com/cv/",                       //your personal website
    linkedin:"linkedin.com/in/shennarwp/",
    email:"shennawew@outlook.com",
    phone:"+4915257523364",
    github:"github.com/shennarwp",
    // objective:`Seeking a position ${COMPANY} where I can apply ${SKILLS} to ${OUTCOME}.`,                                                              //for tailored resumes
    profile:`Reliable, independent and detail oriented. Analytical and highly motivated in teamwork.`,    //for non-specific resumes
    displayObjective:false,         //only object OR profile can be displayed at once.  If false, profile is displayed.  If true, objective is displayed.
    experience:[                    //professional experience
        {
            company:"AG der Dillinger Hüttenwerke",
            title:"Intern",
            from:"August 2019",
            to:"March 2020",
            description:"Intern in an IT department responsible for controlling the blast furnace.",
            results:[
                "Wrote bachelor thesis regarding database systems (PostgreSQL and Amazon DynamoDB) in an existing Java program.",
                "Modified the program so that it can communicate with different database types (SQL and NoSQL).",
                "Learned how enterprise software architectures (Domain Driven Design, Hexagonal Architecture) are applied to a real project.",
                "Learned about different CI/CD tools like Jenkins, SonarQube and how they support the agile software process.",
                "Assisted other colleagues in migrating various tools and infrastructure software to Docker."
            ],
            technologies:[
                "Java",
                "PostgreSQL",
                "Amazon DynamoDB",
                "Docker",
                "Jenkins",
            ]
        }
    ],
    education:[
        {
            type:"B.Sc.",
            subject:"Praktische Informatik",
            school:"Hochschule für Technik und Wirtschaftlich des Saarlandes",
            from:"October 2016",
            to:"September 2020",
            summary:"Overall grade of 2.5. Built a solid foundation to logically and systematically address and analyze problems. Subjects included database, data analysis, distributed system, and information retrieval. Sample Projects:",
            projects:[
                "A small client-server calendar program. Responsible for the backend (REST API, database). Written in Java.",
                "A mini search engine that could return relevant documents from the New York Times article archive. With Elasticsearch as the database."
            ],

        },
        {
            type:"Hochschulzugangsberechtigung",
            subject:"T-Kurs",
            school:"Studienkolleg Universität des Saarlandes",
            from:"March 2014",
            to:"February 2015",
            summary:""

        }
    ],
    primarySkills:6,    //display this many skills on first page
    secondarySkills:20, //display this many skills in overflow on second page
    skills:[
        {
            name:"Java",
            level:4,
            desc:"Good knowledge and experience in modern Java (8 or 11). Familiar with JPA, Lambda expressions and Stream API."
        },
        {
            name:"Unix/Linux and Shell Script",
            level:4,
            desc:"Experience in managing Debian-based servers in college and as a hobby. Wrote several shell scripts to automate various tasks."
        },
        {
            name:"Docker",
            level:3,
            desc:"Good knowledge and experience with Docker, Docker Compose as a hobby. Experience includes containerization of various applications, CI/CD tools, networking tools, and a static website."
        },
        {
            name:"SQL",
            level:3,
            desc:"Basic knowledge and experience with SQL in managing the backend side for projects during my studies."
        },
        {
            name:"git",
            level:3,
            desc:"Experience using CLI Git and GitHub for team collaboration and software version control."
        },
        {
            name:"maven",
            level:2.5,
            desc:"Experience using maven to manage dependency on Java projects."
        },
        {
            name:"Jenkins",
            level:2,
            desc:"Experience with using Jenkins on a few small projects. One of them was to create my thesis from latex to pdf."
        },
        {
            name:"JUnit",
            level:1.5,
            desc:"Beginner experience using JUnit to test Java projects. Still learning the best practice of Test Driven Development."
        },
        {
            name:"Spring",
            level:1.5,
            desc:"Basic knowledge and beginner experience from small projects. Example: Creating a simple REST endpoint for a small Java program."
        },
        {
            name:"HTML/CSS/JavaScript",
            level:1.5,
            desc:"Beginner skills and experience in the hobby. This resume is modified from the template on GitHub."
        },
        {
            name:"Kubernetes",
            level:1,
            desc:"Beginner experience as a hobby."
        }
    ],
    projects:[      // this just fills up space on the second page, idk what else to put here ¯\_(ツ)_/¯
        {
            title:"counterpostgres",
            category:"Testing programm",
            url:"https://github.com/shennarwp/counterpostgres",
            description:"Small Java program to test the streaming replication mechanism and the failover mechanism between 2 PostgreSQL database instances. Both instances are deployed locally via Docker container.",
            technologies:[
                "Java",
                "PostgreSQL",
                "Docker"
            ]
        },
        {
            title:"dashboard",
            category:"Static website",
            url:"https://github.com/shennarwp/dashboard",
            description:"A small static website, written in Java using Spring and Vaadin as GUI framework. Available at: https://m900.shennarwp.com/dashboard",
            technologies:[
                "Java",
                "Spring",
                "Vaadin"
            ]
        },
        // {
        //     title:"counterdynamo",
        //     category:"Testingprogramm",
        //     url:"https://github.com/shennarwp/counterdynamo",
        //     description:"Kleines Programm zum Testen der Funktionalität von Amazon DynamoDB, das lokal im Docker-Container eingesetzt wird.",
        //     technologies:[
        //         "Java",
        //         "Amazon DynamoDB",
        //         "Docker"
        //     ]
        // },
        {
            title:"compose",
            category:"Konfigurationsdateien",
            url:"https://github.com/shennarwp/compose",
            description:"A collection of Docker compose files from multiple applications deployed to the home server using Docker. An overview can be seen at https://m900.shennarwp.com/grafana/d/dc/docker-containers.",
            technologies:[
                "Docker",
                "Nginx",
                "ELK-Stack",
                "Prometheus",
                "Grafana"
            ]
        },
        {
            title:"resume",
            category:"Static Website",
            url:"https://github.com/shennarwp/resume",
            description:"A static web page that serves as a resume. Use a template from a GitHub project. Available at https://shennarwp.com/cv/.",
            technologies:[
                "Vue.js",
                "HTML",
                "CSS",
            ]
        },

    ]
};