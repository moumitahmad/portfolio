
    const projects = [
        {
            id: 0,
            title: "FamilyTree",
            description: "Anwedung zum Speichern und Visuallisieren von Familenhistorien.",
            team: "Drei-köpfiges Team",
            duration: "ein Semester",
            time: "6. Semester, Beginn 2021",
            technologies: [
                "C++", 
                "SQLite", 
                "Qt"
            ],
            image: "FT/FamilyTreePreview.svg",
            about: [
                "Familienbeziehungen visualisieren und diese durch eine einfache GUI von verschieden Nutzer bearbeiten lassen. Dies waren die wesentlichen Ansprüche an dieses Projekt.",
                "Dabei ist dieses Projekt in meinem sechsten Semester entstanden und diente dazu C++ etwas besser kennenzulernen.",
                "Umgesetzt wurde die Idee in Qt mit einer SQLite Datenbank."
            ],
            hasGallery: true,
            mockup: "",
            myWork: [],
            path: "https://github.com/moumitahmad/Stammbaum",
            docu: ""
        },
        {
            id: 1,
            title: "Fantasy Score",
            description: "Datenbank basierte Webanwendung für mehrere User",
            team: "Drei köpfiges Team",
            duration: "ein Semester",
            time: "4. Semester, Beginn 2020",
            technologies: [
                "Angular", 
                "Database",
                "Node.js"
            ],
            image: "FS/FSPreview.svg",
            about: [
                "Dieses Projekt entstand im Modul Datenbankbasierte Web-Anwendung.",
                "Das Projekt hat mir gezeigt MySQL Datenbanken aufzusetzen und diese Daten anschließend mit Angular in eine interaktive Webseite zu entwickeln. So haben wir Typscript für den Frontend-Teil und NodeJs für den Backend-Teil genutzt.",
                "Ich habe dieses Projekt in einem Team von drei Personen entwickelt.",
                <br />,
                "Bei FANTASY SCORE kannst du als Tugendhafter loslegen und verschiedene Aufgaben, sogenannte Tugenden, erfüllen und somit dein Social Score immer weiter steigern, sodass du ganz oben auf der Bestenliste stehst.",
                "Zudem kannst du Dienste anbieten, mit denen du Suchenden und anderen Tudendhaften deine einzigartigen Fähigkeiten, wie zum Beispiel Gasen mit einer Nagelschere schneiden, präsentierst und anbietest.",
                "Suchende sowie andere Tugendhaften können dieses Angebot buchen und diese Dienste zu einem bestimmten Datum in Anspruch nehmen.",
                "Wenn du dich zunächst nur als Suchender registrierst, wirst du schnell merken, dass dir die Tugenden fehlen, aber natürlich kannst du auf Knopfdruck dein Account upgraden, ohne deine gebuchten Dienste zu verlieren.",
                "Außerdem gibt es noch Älteste, die dafür sorgen, dass neuen Bonusprogramme existieren und die Tugenden unserer Gesellschaft updaten. Doch um dich als Ältester registrieren zu können musst du in den Ältestenrat gewählt werden und die anschließen mit dem Geheimcode auf der Webseite registrieren.",
                "Frohes Sammeln!"
            ],
            hasGallery: true,
            mockup: "",
            myWork: [
                "In diesem Projekt hatten wir keine klare Aufteilung, sodass alle in fast allen Bereichen mal etwas geänderten und nur kleinere Features aufgeteilt wurden.",
                "Dies funktionierte, da wir zuerst gemeinsam ein grundlegendes Konzept erarbeiteten, sodass alle über die Planung aller Bereiche Bescheid wussten. Anschließend gab es so in der Implementierung nur wenige offene Fragen.",
                "Doch ein paar Features habe ich auch komplett alleine implementiert, diese waren: die Such und Filter-Funktionen, sowie ein Großteil der Datendarstellung für Tugenden, Dienste und Bonusprogramme."
            ],
            path: "https://github.com/NiJoW/NiJoW.github.io",
            doku: "Doku_Schuster_Ahmad_Wennesheimer_DBWeb_FantasyScore.pdf"
        },
        {
            id: 2,
            title: "BuildAR",
            description: "Entwicklung einer AR Anwendung mit Hilfe von User-Feedback",
            team: "Drei köpfiges Team",
            duration: "ein Semester",
            time: "3. Semester, Ende 2019",
            technologies: [
                "Usertests", 
                "Unity", 
                "Augmented Reality"
            ],
            image: "BAR/BuildARPreview.svg",
            about: [
                "In dem Projekt BuildAR habe ich meine Kompetenzen in Usertests und Augmented Reality entwickelt. Wir haben uns die Frage gestellt, welche Alternativen es zur etablierten Papieranleitung gibt und inwiefern diese in der User Experience mithalten können.", 
                "Im Laufe des Projektes haben wir zwei größere Usertests durchgeführt und drei Prototypen erstellt. Wobei der erste Usertest verschiedene Darstellungsmöglichkeiten in AR verglich und der zweite die Usability der einzelnen Prototypen.",
                "Als Kontroll-Anleitung haben wir eine Papieranleitung erstellt und als Alternativen eine XD Anleitung, die ein simple online Anleitung symbolisieren sollte, und eine Anleitung, die mithilfe von Augmented Reality dem User den nächsten Schritt angezeigt.",
                <br/>,
                "In den folgenden Bildern können Sie ein Eindruck unseres Prozesses und unseren Ergebnissen erhalten. Für einen tieferen Eindruck empfiehlt sich aber die Dokumentation."
            ],
            hasGallery: true,
            mockup: "BAR/BuildARMockup.mp4",
            mockupVorschau: "BAR/BuildAR_preview.PNG",
            mockupDescription: "Eine kleine Live-Demo des AR Prototyps",
            myWork: [
                "Wir habe dieses Projekt zu dritt entwickelt, wobei wir alle viel an der Konzeption und den Tests gearbeitet haben. Doch im Verlauf des Projektes habe ich mich vorrangig auf den Prototyp in AR konzentriert."
            ],
            path: "https://github.com/moumitahmad/hciProject",
            docu: ""
        },
        {
            id: 3,
            title: "Tangible Music",
            description: "Musik fühlbar gestalten, entwickelt für gehörlose Menschen",
            team: "fünf-köpfiges Team",
            duration: "ein Semester",
            time: "6. Semester, Beginn 2021",
            technologies: [ 
                "Usertests", 
                "besondere Bedürfnisse",
                "Unity"
            ],
            image: "TM/TangibleMusicPreview.svg",
            about: [
                "Dieses Projekt ist im Rahmen des Moduls 'Design Media for People with Special Needs' entstanden. Dieses Modul diente dazu, sensibler für Probleme von Menschen mit besonderen Bedürfnissen zu werden und im Gespräch mit ihnen etwas zu entwickeln.",
                "Wir hatten uns in diesem Rahmen dazu entschieden, uns auf gehörlose Menschen zu spezialisieren und zu erforschen, ob es mögliche wäre Musik durch den Tastsinn anders wahrnehmbar zu machen.",
                "Daraus entstand die Idee Musik in Vibrationen umzuwandeln, wodurch auch gehörlose Menschen die Möglichkeit gegeben werden soll Musik zu 'hören'.",
                "Oder auch gehörlosen Tänzern soll damit eine Alternative zum Erfühlen von Rhythmus gegeben werden."
            ],
            hasGallery: true,
            mockup: "",
            myWork: [
                "Dieses Projekt diente für uns mehr als Studie von tastbarer Musik, sodass am Ende zwar kein produktionsreifer Prototyp entstand, aber Ergebnisse, die darauf schließen lassen, dass es sich lohnen könnte, sich damit noch einmal intensiver zu beschäftigen.",
                <br/>,
                "Die folgende Demo kann nur auf einem Android Handy getested werden."
            ],
            path: "",
            docu: "DDM_documentation_Sattler_Lehmkuhl_Ahmad_Jacobse_Ward.pdf",
            demo: "https://drive.google.com/drive/u/0/folders/1DVErdCQUQjox-1C67vcjzUI6_QsQ9V4r"
        },
        {
            id: 4,
            title: "SmartFactory",
            description: "Anwendung zum Planen und Simulieren von Fabriken in AR",
            team: "Drei köpfiges Team",
            duration: "elfköpfiges Semester",
            time: "3. & 4. Semester, 2020",
            technologies: [
                "SCRUM", 
                "Unity",
                "Augmented Reality"
            ],
            image: "SF/ARFactoryPreview.svg",
            about: [
                "Dieses Projekt ist im Modul Mixed Reality entstanden, welches über ein ganzes Jahr ging. Wobei das erste Semester nur dafür genutzt wurde verschiedene Mixed Reality Technologien auszuprobieren  und kleine Anwendungen damit zu entwickeln.",
                "Im zweiten Semester haben wir dann die AR Factory entwickelt.",
                "Indem wir nun die Erfahrungen, sowie den erbauten Tisch aus dem ersten Semester für die Anwendung nutzen konnten.",
                "Die AR Factory stellte ein Planungstool für Fabriken dar, an dem es möglich sein sollte modulare Fabriken nach dem Motto Industrie 4.0 zu planen und Fehler zu simulieren.",
                "Dieser Prozess sollte dann auf dem Tisch projiziert werden und mit tangible Objekten manipulierbar sein.",
                "Die folgenden Bilder zeigen den Prototyp aus dem ersten Semester, während in Video das Ergebnis aus dem zweiten zu sehen ist:"
            ],
            hasGallery: true,
            mockup: "SF/DokufilmSmartfactory.mp4",
            mockupVorschau: "SF/ARFactoryMockupVorschau.png",
            myWork: [
                "Im ersten Semester habe ich mich mit der HoloLense beschäftigt und eine kleine Anwendung in Unity dazu programmiert. Sie war sehr rudimentär und ermöglichte den Nutzer verschiedene Würfen in AR zu erschaffen, diese dann zu skalieren und einfärben. Zusätzlich war es möglich die Erdanziehungskraft einzuschalten und zu sehen wie die Würfel mit der Umgebung reagieren. Des Weiteren habe ich mich in diesem Semester auch mit Tangibles beschäftigt, sodass die beschriebene Anwendung mit einem Holzwürfel gesteuert werden konnte.",
                "So konnte ich in diesem Semester auch ein Lasercutter und ein 3D Drucker etwas näher kennenlernen.",
                <br />,
                "Im zweiten Semester habe ich größtenteils an dem User Interface, der Steuerung mit Tangibles, sowie ein bisschen an der Persistent gearbeitet."
            ],
            path: "",
            docu: "SmartfactoryDokumentation.pdf",
            docu2: "MixedRealityDokumentation_Semester1.pdf"
        },
        {
            id: 5,
            title: "Fantasy League",
            description: "Softwareentwicklungsprozesse kennenlernen",
            team: "Neun Kommilitonen, mit Unterteilungen in dreier Gruppen",
            duration: "ein Semester",
            time: "4. Semester, Beginn 2020",
            technologies: [
                "Software Modelle", 
                "Agile Softwareentwicklung", 
                "Entwicklungsprozesse"
            ],
            image: "FL/FantasyLeaguePreview.svg",
            about: [
                "Dieses Projekt ist im Modul Softwareentwicklung entstanden und war dazu da um Entwicklungsmethodik und Modelle kennenzulernen.",
                "Wir haben uns das Thema Fantasy League herausgesucht, in denen man individuelle Mannschaften erstellen kann und gegen andere Mannschaften antreten kann.",
                "In diesem Projekt erstellen wir mehrere Diagramme und konzeptionierten so die Funktionen der Software.",
                "Zum Erstellen dieser Modelle nutzen wir Visual Paradigm und lernten so auch viel über diese Software."
            ],
            hasGallery: true,
            mockup: "",
            myWork: [],
            path: "",
            docu:""
        },
        {
            id: 6,
            title: "TeaCooker",
            description: "Ein Assistent, um immer den optimalsten Tee zu brühen",
            team: "alleine",
            duration: "ein Semester",
            time: "6. Semester, Beginn 2021",
            technologies: [
                "Microcontroller", 
                "Arduino",
                "C++"
            ],
            image: "TC/TeaCookerPreview.svg",
            about: [
                "Dies war mein erstes größeres Hardware Projekt.",
                "Ich trinke gerne Grün-Tee, aber es passiert mir sehr schnell, dass ich den Teebeutel zu lange in Wasser lasse oder die Wassertemperatur zu heiß ist, wodurch der Tee dann bitter wird. Um dass nun in der Zukunft zu vermeiden, habe ich nun den TeaCooker entwickelt, der selbstständig den Teebeutel entfernt und auch die Wassertemperatur überprüft.",
                "Zusätzlich hatte ich noch den Anspruch so gut wie kein klassisches Userinterface zu benötigen."
            ],
            hasGallery: true,
            mockup: "TC/TeaCooker_Video.mp4",
            mockupVorschau: "TC/VidoVorschau.png",
            myWork: [],
            path: "https://github.com/moumitahmad/TeaCooker",
            docu: "MoumitaAhmad_TeaCooker_Documentation.pdf"
        },
        {
            id: 7,
            title: "Risiko",
            description: "Das Brettspiel 'Risiko' als Java-basiertes Multiplayer Spiel",
            team: "Drei köpfiges Team",
            duration: "ein Semester",
            time: "2. Semester, Beginn 2019",
            technologies: [
                "Java", 
                "Client-Server",
                "Multiplayer Spiel"
            ],
            image: "Risiko/RisikoPreview.svg",
            about: [
                "Dieses Projekt ist in meinem zweiten Semester an der Hochschule entstanden und in Java programmiert. Es ist eine online Anwendung des Spiels Risiko, in dem es darum geht die Welt mit den eigenen Einheiten zu erobern. Wobei man die Einheiten sinnvoll platzieren muss, um nicht die eigenen Länder zu verlieren."
            ],
            hasGallery: true,
            mockup: "",
            myWork: [
                "In diesem Projekt haben wir uns kaum aufgeteilt und besonders am Anfang zu viel gemeinsam gemacht. Auch wenn dies vielleicht an manchen Punkten durch unsere geringe Erfahrung hilfreich war, war dies doch überhaupt nicht zeit-effizient.",
                "Auch wenn wir durch Fleiß letztendlich ein gutes und vollständiges Projekt entwickeln konnten, habe ich dennoch viel über Arbeitsteilung und wie man es besser nicht machen sollte in diesem Projekt gelernt."
            ],
            path: "https://github.com/NiJoW/RisikoMNT",
            docu: ""
        }
    ]

    export default projects;