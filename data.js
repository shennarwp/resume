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
    profile:`Zuverlässig, unabhängig und detailorientiert. Analytisch und hoch motiviert im Teamarbeit.`,    //for non-specific resumes
    displayObjective:false,         //only object OR profile can be displayed at once.  If false, profile is displayed.  If true, objective is displayed.
    experience:[                    //professional experience
        {
            company:"AG der Dillinger Hüttenwerke",
            title:"Praktikant",
            from:"August 2019",
            to:"März 2020",
            description:"Praktikant in einer IT-Abteilung, die für die Steuerung des Hochofens verantwortlich ist.",
            results:[
                "Schreibte die Bachelorarbeit mit dem Thema Datenbanksysteme (PostgreSQL und Amazon DynamoDB) in einem bestehenden Java-Programm.",
                "Modifizierte das Programm, so dass es mit verschidene Datenbanktypen (SQL und NoSQL) kommunizieren kann.",
                "Lernte, wie Unternehmenssoftware-Architekturen (Domain Driven Design, Hexagonale Architektur) einem realen Projekt angewendet werden.",
                "Lernte verschiedene CI/CD Tools wie Jenkins, SonarQube kennen und wie sie den agilen Software-Prozess unterstützten.",
                "Unterstützte anderer Kollegen bei der Migration verschiedener Tools und Infrastruktur-Software auf Docker."
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
            from:"Oktober 2016",
            to:"September 2020",
            summary:"Gesamtnote 2,5. Baute eine solide Grundlage auf, um Probleme logisch und systematisch zu behandeln und zu analysieren. Zu den Fächern gehörten Datenbank, Datenanalyse, verteiltes System und Information Retrieval. Beispielprojekte:",
            projects:[
                "Ein kleines Client-Server-Terminkalender-Programm. Für das Backend (REST API, Datenbank) verantwortlich. In Java geschrieben.",
                "Eine Mini-Suchmaschine, die relevante Dokumente aus dem Artikelarchiv der New York Times zurückgeben könnte. Mit elasticsearch als Datenbank."
            ],

        },
        {
            type:"Hochschulzugangsberechtigung",
            subject:"T-Kurs",
            school:"Studienkolleg Universität des Saarlandes",
            from:"März 2014",
            to:"Februar 2015",
            summary:""

        }
    ],
    primarySkills:6,    //display this many skills on first page
    secondarySkills:20, //display this many skills in overflow on second page
    skills:[
        {
            name:"Java",
            level:4,
            desc:"Fundierte Kenntnisse und Erfahrungen im modernen Java (8 bzw. 11). Mit JPA, Lambda-Ausdrücke und Stream API vertraut."
        },
        {
            name:"Unix/Linux bzw. Shell Script",
            level:4,
            desc:"Erfahrung in der Verwaltung von Debian-basierten Servern im Studium undn als Hobby. Schrieb mehrere Shellskripte, um Aufgaben zu automatisieren."
        },
        {
            name:"Docker",
            level:3,
            desc:"Gute Kentnisse und Erfahrungen mit Docker, Docker Compose im Hobbybereich. Zu den Erfahrungen gehören unter anderem die Containerisierung verschiedener Anwendungen, CI/CD-Tools, Netzwerk-Tools und eine statische Webseite."
        },
        {
            name:"SQL",
            level:3,
            desc:"Grundkenntnisse und Erfahrung mit SQL bei der Verwaltung der Backend-Seite für Projekte während meines Studiums."
        },
        {
            name:"git",
            level:3,
            desc:"Erfahrung mit der Verwendung von CLI Git und GitHub zur Zusammenarbeit in einem Team und zur Softwareversionkontrolle."
        },
        {
            name:"maven",
            level:2.5,
            desc:"Erfahrung mit der Verwendung von maven zur Verwaltung der Abhängigkeit bei Java-Projekten."
        },
        {
            name:"Jenkins",
            level:2,
            desc:"Erfahrung mit dem Einsatz von Jenkins bei einigen kleinen Projekten. Eines davon war, mein Thesis von Latex zu pdf zu erstellen."
        },
        {
            name:"JUnit",
            level:1.5,
            desc:"Anfänger Erfahrung mit JUnit zum testen von Java-Projekten. Lernte noch die beste Praxis der Test Driven Development."
        },
        {
            name:"HTML/CSS/JavaScript",
            level:1.5,
            desc:"Anfänger Kentnisse und Erfahrung im Hobbybereich. Dieser Lebenslauf wird von der Vorlage von GitHub modifiziert."
        },
        {
            name:"Kubernetes",
            level:1,
            desc:"Anfänger Erfahrung im Hobbybereich."
        }
    ],
    projects:[      // this just fills up space on the second page, idk what else to put here ¯\_(ツ)_/¯
        {
            title:"counterpostgres",
            category:"Testingprogramm",
            url:"https://github.com/shennarwp/counterpostgres",
            description:"Kleines Java Programm zum Testen des Streaming-Replikationsmechanismus und des Failover-Mechanismus zwischen 2 PostgreSQL-Datenbankinstanzen. Beide Instanzen werden lokal über den Docker-Container bereitgestellt.",
            technologies:[
                "Java",
                "PostgreSQL",
                "Docker"
            ]
        },
        {
            title:"counterdynamo",
            category:"Testingprogramm",
            url:"https://github.com/shennarwp/counterdynamo",
            description:"Kleines Programm zum Testen der Funktionalität von Amazon DynamoDB, das lokal im Docker-Container eingesetzt wird.",
            technologies:[
                "Java",
                "Amazon DynamoDB",
                "Docker"
            ]
        },
        {
            title:"compose",
            category:"Konfigurationsdateien",
            url:"https://github.com/shennarwp/compose",
            description:"Eine Sammlung von Docker-Compose-Dateieneine Sammlung von Docker-Compose-Dateien von mehreren Anwendungen, die mit Docker auf meinem Heimserver bereitgestellt werden. Eine Visualisierung des Servers ist unter https://m900.shennarwp.com/grafana/ zu sehen.",
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
            category:"Statische Webseite",
            url:"https://github.com/shennarwp/resume",
            description:"Eine statische Webseite, die als Lebenslauf dient. Verwende eine Template von ein GitHub-Projekt. Unter https://shennarwp.com/cv/ verfügbar.",
            technologies:[
                "Vue.js",
                "HTML",
                "CSS",
            ]
        },

    ]
};