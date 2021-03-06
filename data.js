// ================================================================
//  VARIABLES
// ================================================================

// Your name.
var myName = ""

// The input message.
var myMsg = [
    "What will you do today?",
    "How many days till holiday?",
    "What will you eat today?",
    "How are you today?",
    "Why is Gamora?",
]

// Name of the images.
var myImages = [
    "1","2","3","4","5","6","7","8","9"
]
// ================================================================
//  WEB LINKS
// ================================================================
// Use object file to define weblinks.
webLinksObject = {
    "title":"Links:",
    "containerType":"links",
    "linkArray": [
        { "label":"BBC News",           "link":"https://www.bbc.com/"                             },
        { "label":"Favorite Music",     "link":"https://www.youtube.com/watch?v=ECLoE-bw3Kw"      },
        { "label":"Email",              "link":"https://www.gmail.com"                            },
        { "label":"Software Toolbox",   "link":"https://dannyramasawmy.github.io/ElasticMatrix/"  },
        { "label":"Next Holiday!",      "link":"https://en.wikipedia.org/wiki/Mauritius"          },
    ]
}

// ================================================================
//  PRACTICE SUGGESTIONS
// ================================================================
// The labels for each suggestion 1-5, each suggestion is an array of items.
var suggestionsTitle = [
    'Music Practice:'
]
var suggestionsLabels = [
    "Scale", 
    "Key", 
    "Pattern", 
    "Progression", 
    "Song"
]
// Scale practice.
var suggestions0 = [
    "Ionian DI","Dorian Dii","Phrygian Diii",              
    "Lydian DIV","Mixolydian DV","Aeolian Dvi", "Locrian Dviii", 
    "Melodic Minor Mi","Dorian b2 Mii","Lydian Augemented MIII", 
    "Lydian b7 MIV","Aeolian Major (Mix b6) MV","Locrian n2 Mvi","Altered (super) MVII",
    "Harmonic Minor Hi","Dorian #4 Hiv","Phryigan Major HV","Diminished", 
    "Whole Tone","Lydian #2 Hvi","Symmetric Dominant","Major Pentatonic","Minor Pentatonic"
]
// Key choice.                
var suggestions1 = [
    "C","G (1#)","D (2#'s)","A (3#'s)","E (4#'s)","B (5#'s)",
    "F# (6#'s)","Gb (6b's)","Db (5b's)","Ab (4b's)","Eb (3b's)","Bb (2b's)","F (1b)"
]
// Practice pattern.
var suggestions2 = [
    "1-2-3","1-2-3-1","3-2-1-3","1-2-3-5","Arp 7","Triad",
    "1-2-3-4","Enclosed root","Enclosed 5th","Honeysuckle","4ths","5ths","6ths","7ths"
]
// Practice progression.
var suggestions3 = [
    "iim7-V7-IM7","iim7b5-V7-im7","I-vim7-iim7-V7",
    "I-II7-iim7-V7","III7-VI7-II7-V7"
]
// Songs to practice.
var suggestions4 = [
    "Autumn Leaves","Someday my Prince Will Come",
    "All of me", "Blue Bossa","Take the A Train",
    "So What","Round Midnight","Rhythm Changes",
    "All the things you are","Major 2-5-1","Minor 2-5-1",
    "Recordame","Stella by Starlight","Blues",
    "Body and Soul","Maiden Voyage","Fly to me the Moon","Footprints","Black Nile","How High the Moon"
]

