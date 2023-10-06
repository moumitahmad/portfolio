const imageGallery = [
    // ---------------- Fantasy Score
    {
        id: 0,
        name: "FS/FS_Startseite.jpg",
        description: "Die Startseite der Webseite",
        projectId: 2
    },
    {
        id: 1,
        name: "FS/FS_Tugendhafter.jpg",
        description: "Die Startseite des Tugendhaften",
        projectId: 2
    },
    {
        id: 2,
        name: "FS/FS_Suchender.jpg",
        description: "Die Startseite des Suchender",
        projectId: 2
    },
    {
        id: 3,
        name: "FS/FS_Aeltester.jpg",
        description: "Die Startseite des Ältesten",
        projectId: 2
    },
    {
        id: 4,
        name: "FS/FS_Tugende.jpg",
        description: "Die Seite, auf der die Tugenden präsentiert werden und von Tugendhaften abgeschlossen werden können.",
        projectId: 2
    },
    {
        id: 5,
        name: "FS/FS_Dienste.jpg",
        description: "Die Seite, auf der die Dienste der Tugendhaften präsentiert werden und von Suchenden gebucht werden können.",
        projectId: 2
    },
    {
        id: 6,
        name: "FS/FS_Bonusprogramme.jpg",
        description: "Die Seite, auf der die Bonusprogramme präsentiert werden, sodass die Tugendhaften entsprechende Tugenden erfüllen können und auf Belohnungen hinarbeiten können.",
        projectId: 2
    },
    
    // ---------------- BuildAR
    {
        id: 7,
        name: "BAR/UsertestEins.png",
        description: "Bilder aus dem ersten Usertest",
        projectId: 4
    },
    {
        id: 8,
        name: "BAR/BuildAR_Prozess.png",
        description: "Ein Ausschnitt des Entwicklungsprozesses des AR Prototyps",
        projectId: 4
    },
    {
        id: 9,
        name: "BAR/Paper_XD.png",
        description: "Ein Ausschnitt des Papier und XD Prototyps für den zweiten Usertest",
        projectId: 4
    },
    {
        id: 10,
        name: "BAR/AR_UsertestZwei.png",
        description: "Ein Ausschnitt des AR Prototyp und Bilder des zweiten Usertests",
        projectId: 4
    },
    {
        id: 11,
        name: "BAR/Auswertung.png",
        description: "Ausschnitte unserer Auswertung nach dem zweiten Usertest",
        projectId: 4
    },
    
    //----------------FANTASY LEAGUE
    {
        id: 12,
        name: "FL/useCaseDiagramm.PNG",
        description: "Das Use Case Diagramm beschreibt die groben Funktionen der Software und wie die einzelnen Instanzen zusammen arbeiten.",
        projectId: 7
    },
    {
        id: 13,
        name: "FL/klassendiagramm.PNG",
        description: "Das Klassendiagramm beschreibt, welche Klassen für welche Aufgaben zuständig sind und wie diese untereinander zusammen arbeiten.",
        projectId: 7
    },
    {
        id: 14,
        name: "FL/softwareArchitektur_part1.PNG",
        description: "Die Softwarearchitektur beschreibt, die Klassen und deren Zusammenarbeit detailreicher und bestimmt Interfaces.",
        projectId: 7
    },
    {
        id: 15,
        name: "FL/softwareArchitektur_part2.PNG",
        description: "Eine klare Einteilung der Aufgabenbereiche war sehr wichtig. Interessant dabei ist die Benutzerklasse, die keine Schnittstelle auf anderen Klassen der Software benötigt und so auch in anderen Projekten eingesetzt werden könnte.",
        projectId: 7
    },
    {
        id: 16,
        name: "FL/SD_BenutzerEinladen_part1.PNG",
        description: "Das Sequenz-Diagramm beschreibt die Interaktion der Objekte während eines Use Cases: Benutzer einladen.",
        projectId: 7
    },
    {
        id: 17,
        name: "FL/SD_BenutzerEinladen_part2.PNG",
        description: "Diese Funktion wird benötigt, wenn ein League erstellt wird und Gegenspieler eingeladen werden.",
        projectId: 7
    },
    {
        id: 18,
        name: "FL/AD_BenutzerEinladen.PNG",
        description: "Im Aktivitätsdiagramm werden verschiedene Szenarien eine Funktion konzipiert und mögliche Fehler simuliert.",
        projectId: 7
    },

    //------------------------SMARTFACTORY
    {
        id: 19,
        name: "SF/HoloCubes_Tangible.png",
        description: "Dies ist die Lasercutter Datei, sowie der fertige Würfel, der zum Steuern der Anwendung genutzt werden kann.",
        projectId: 6
    },
    {
        id: 20,
        name: "SF/HoloCubesApplication.png",
        description: "Dies sind Screenshots, aus der Sicht der HoloLens, der entstandene Anwendung aus dem ersten Semester",
        projectId: 6
    },
    
    //----------------------------RISIKO
    {
        id: 21,
        name: "Risiko/Klassendiagramm.png",
        description: "Ein grobes Klassendiagramm der Risiko-Anwendung, welches allerding mehr für unseres Verständnis diehnte als dass es 100% richtig ist.",
        projectId: 9
    },
    {
        id: 22,
        name: "Risiko/Risiko_Screenshot_part1.png",
        description: "Ein kleiner Ausschnitt der fertigen Anwendung. Das User Interface ist in drei Teile unterteilt. Der größte, mittlere Teil nimmt die Landkarte mit den Kampfeinheiten ein. Mit dem rechten Teil kann der Nutzer interagieren und beeinflusst den Spielverlauf. Während der untere Teil als Kommentar und Erklährung der Spielzüge fungiert.",
        projectId: 9
    },
    {
        id: 22,
        name: "Risiko/Risiko_Screenshot_part2.png",
        description: "Ein weitere Ausschnitt der fertigen Anwendung. Die zeigen wie der Großteil des Spiels abläuft.",
        projectId: 9
    },
    
    //----------------------------TEACOOKER
    {
        id: 23,
        name: "TC/Planing.jpg",
        description: "eine grobe Konzept Plannung",
        projectId: 8
    },
    {
        id: 24,
        name: "TC/conzetiionPic.jpg",
        description: "Von Plannung zur Umsetzung",
        projectId: 8
    },
    {
        id: 25,
        name: "TC/circutePic.jpg",
        description: "Die Hardware hinter den Funktionen",
        projectId: 8
    },
    
    //----------------------------FAMILYTREE
    {
        id: 26,
        name: "FT/Plannung_Wireframes.jpg",
        description: "Konzeption des Projektes, in Form von Wireframes",
        projectId: 1
    },
    {
        id: 27,
        name: "FT/startPreview.jpg",
        description: "Ein Preview auf die Login und Startseite des Projektes",
        projectId: 1
    },
    {
        id: 28,
        name: "FT/pagePreview.jpg",
        description: "Ein Preview auf die View- und Edit-Page aus dem Bilck des Admins",
        projectId: 1
    },
    
    //----------------------------TANGIBLE MUSIC
    {
        id: 29,
        name: "TM/Persona.jpg",
        description: "Um dieses Projekt gezielter umsetzen zu können, haben wir eine Persona erstellt",
        projectId: 5
    },
    {
        id: 30,
        name: "TM/KonzeptZurDemo.jpg",
        description: "Von Konzeption zur prototypischen Umsetzung",
        projectId: 5
    },

    //----------------------------LEFTLOVERS
    {
        id: 31,
        name: "LL/files_overview_leftlovers.png",
        description: "Der Aufbau der App: Die App ist in drei Segmenten unterteilt, der Suche-Part, der Kühlschrak-Part und der Favoriten-Part. EDAMAM ist die genutzte Rezept Bibliothek und alle eingaben der Nutzer, werden local auf dem jeweiligem Endgerät gespeichert.",
        projectId: 3
    },
    {
        id: 32,
        name: "LL/Search_App_Screenshots.png",
        description: "Die abgeschlossene App: Der Suche Bereich",
        projectId: 3
    },
    {
        id: 33,
        name: "LL/Fridge_App_Screenshots.png",
        description: "Die abgeschlossene App: Der Kühlschrak  und Favoriten Bereich",
        projectId: 3
    },

    //----------------------------BACHELORARBEIT
    {
        id: 34,
        name: "BA/PlannungUmsetzung.png",
        description: "Visualisierung des Ergebniss der letzten Iteration. Diese Planung wurde als Grundlage für die Entwicklung genommen",
        projectId: 0
    },
    {
        id: 35,
        name: "BA/GamificationAspects.png",
        description: "Diese Grafiken zeigen die untersuchten Gamification-basierten Aspekte",
        projectId: 0
    },
    {
        id: 36,
        name: "BA/Prehome_welcome.png",
        description: "Die Willkommensseite des Prototyps, sie soll den Teilnehmer*innen des Nutzertests eine Einführung in den Test geben",
        projectId: 0
    },
    {
        id: 37,
        name: "BA/HerausforderungenPräsentieren.png",
        description: "Die Mainseite des Prototyps zeigt die Gamification Aspekte. Hier können die Herausforderungen ausgewählt werden",
        projectId: 0
    },
]

export default imageGallery;