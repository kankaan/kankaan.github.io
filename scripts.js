


var frontpageContent = "Tervetuloa kotisivuilleni! Olen 28-vuotias ohjelmoijanalku, jonka sydän sykkii puujalkahuumorille, jonka pikkurillin on vienyt Python ja jonka jalat vievät juuri Teidän firmaanne. Näillä kotisivuilla kerron itsestäni, taidoistani ja kokemuksistani. Hauska tutustua!\<br\> Antti K ";
/*
var vuue = new Vue({
	el: '#content',
	data: { title: 'terve',
       	contentText: frontpageContent	}
});
*/
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
        title: "Etusivu"
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
                    break;
                case 1:
                    this.workHistory = true;
                    this.title = "Työhistoria";
                    break;
                case 2:
                    this.hobbies = true;
                    this.title = "Harrastukset";
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
