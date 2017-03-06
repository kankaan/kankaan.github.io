

// init carousel
$(document).ready(function(){
    // Activate Carousel
    $("#Carousel").carousel("pause");
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#Carousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#Carousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#Carousel").carousel(2);
    });
    /*$(".item4").click(function(){
        $("#Carousel").carousel(3);
    });
    */
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});

var readBooks = [
            {
                "title": "Vuonna 1984",
                "author": "George Orwell",
                "description": "Klassinen dystopiakuvaus, jonka yhteiskuntakuvaus muistuttaa merkittävästi myös omaa aikaamme.",
                "stars": 4
            },
            {
                "title": "Uusi uljas maailma",
                "author": "Huxley",
                "description": "Ihmisten luokkajakoa pohtiva dystopiakuvaus.",
                "stars": 4
            },
            {
                "title": "Lean Software Development: An Agile Toolkit",
                "author": "Mary & Tom Poppendieck",
                "description": "Kirja kertoo Lean-menetelmistä, kuten hukan poistosta, ohjelmistotuotannossa.",
                "stars": 4
            },
            {
                "title": "Ohjelmistotuotannon käytännöt",
                "author": "Ilkka Haikala, Tommi Mikkonen",
                "description": "Perusteos ohjelmistotuotannosta. Tosi hyvää asiaa tiiviisti esitettynä",
                "stars": 5
            },
                        {
                "title": "Sinuhe egyptiläinen",
                "author": "Mika Waltari",
                "description": "Suomen kenties parhaan kirjailijan pääteos. Huikea, mukaansatempaava kuvaus muinaisesta Egyptistä.",
                "stars": 5
            },
        ];

var instance = new Vue({
	
	// A DOM element to mount our view model.
	el: '#app',

    // This is the model.
	// Define properties and give them initial values.
	data: {
        home : true,
        workHistory: false,
        hobbies: false,
        workSamples: false,
        skills: false,
        workHistory: false,
        workHistoryVirusScanner: false,
        me: false,
        title: "Etusivu",
        searchString: "",
        books: readBooks
	},

    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredBooks: function () {
            var booksArray = this.books,
                searchString = this.searchString;

            if(!searchString){
                return booksArray;
            }

            searchString = searchString.trim().toLowerCase();

            booksArray = booksArray.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
				if(item.author.toLowerCase().indexOf(searchString) !== -1) {
					return item;
				}
            })

            // Return an array with the filtered data.
            return booksArray;
        }
    },

	// Functions we will be using.
	methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.activeName = item;
            this.home = false;
            this.hobbies = false;
            this.skills = false;
            this.me = false;
            this.workHistory =false;
            switch (item) {
                case 0:
                    this.home = true;
                    this.title = "";
                    $("#Carousel").carousel(5)
                    break;
                case 1:
                    this.workHistory = true;
                    this.title = "Työhistoriani";
                    $("#Carousel").carousel(2)
                    break;
                case 2:
                    this.me = true;
                    this.title = "Minusta";
                    $("#Carousel").carousel(4);
                    break;
                case 3:
                    this.skills = true;
                    this.title = "Taidot & Työnäytteet";
                     $("#Carousel").carousel(1);
                    break;
                default:
                    break;
            } 
            

		}
	}
});
