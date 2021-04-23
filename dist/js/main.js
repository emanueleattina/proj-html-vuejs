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
    },
    methods: {
        setActive: function(index) {
            this.speakerActive = index;
        },
    }
});