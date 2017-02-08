

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
        philosophy: false,
        workHistoryVirusScanner: false,
        title: "Etusivu",
        searchString: "",
        books: [
            {
                "title": "Vuonna 1984",
                "author": "George Orwell",
                "description": "Dystopiakuvas. suosittelen",
                "stars": 4
            },
            {
                "title": "Uusi uljas maailma",
                "author": "Huxley",
                "description": "Dystopiakuvas. suosittelen",
                "stars": 4
            }
        ]
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
            this.workHistory = false;
            this.hobbies = false;
            this.workSamples = false;
            this.skills = false;
            this.philosophy = false;
            switch (item) {
                case 0:
                    this.home = true;
                    this.title = "Etusivu";
                    $("#Carousel").carousel(1)
                    break;
                case 1:
                    this.workHistory = true;
                    this.title = "Työhistoria";
                    $("#Carousel").carousel(2)
                    break;
                case 2:
                    this.hobbies = true;
                    this.title = "Harrastukset";
                    $("#Carousel").carousel(1);
                    break;
                case 3:
                    this.workSamples = true;
                    this.title = "Työnäytteet";
                    break;
                case 4:
                    this.skills = true;
                    this.title = "Taidot";
                    break;
                case 5:
                    this.philosophy = true;
                    this.title = "Työ-filosofia";
                    break;
                default:
                    break;
            } 
            

		}
	}
});
