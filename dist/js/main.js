Vue.config.devtools = true;

var app = new Vue ({
    el: '#root',
    data: {
        whoWhatWhy: whoWhatWhy,
        speakers: speakers,
        recentNews: recentNews,
        navbar: navbar,
        tickets: tickets,
        twitterFeed: twitterFeed,
        sponsors: sponsors,
        galleryImages: galleryImages,
        speakerActive: 0,
        index: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isEnded: null,
        endDate: Date.parse('01 Jan 2022'),
        
    },
    methods: {
        setActive: function(index) {
            this.speakerActive = index;
        },
        updateRemaining (distance) {
            this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        },
        tick () {
            const currentTime = new Date();
            const distance = Math.max(this.endDate - currentTime, 0);
            this.updateRemaining(distance);
            
            if (distance === 0) {
              clearInterval(this.timer);
              this.isEnded = true;
            }
        },
    },
    mounted () {
        this.tick()
        this.timer = setInterval(this.tick.bind(this), 1000);
    },
    destroy () {
        clearInterval(this.timer)
    }
});