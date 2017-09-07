import { Dish } from './dish';

export const DISHES: Dish[] = [
    {
        id: 0,
        name: 'Uthappizza',
        image: '/assets/images/uthappizza.png',
        category: 'mains',
        label: 'Hot',
        price: '4.99',
        featured: true,
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [
            {
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "John Lemon",
                date: "2012-10-16T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Paul McVites",
                date: "2014-09-05T17:57:28.556094Z"
            },
            {
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Michael Jaikishan",
                date: "2015-02-13T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Ringo Starry",
                date: "2013-12-02T17:57:28.556094Z"
            },
            {
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "25 Cent",
                date: "2011-12-02T17:57:28.556094Z"
            }
        ]
    },
    {
        id: 1,
        name: 'Zucchipakoda',
        image: '/assets/images/zucchipakoda.png',
        category: 'appetizer',
        label: '',
        price: '1.99',
        featured: false,
        description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
        comments: [
            {
                rating: 5,
                comment: "Ooo, ooo, yum.",
                author: "John Lemon",
                date: "2000-04-16T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Voodoo food, I could've sworn my mouth turned a fire red.",
                author: "Jimi canolaSticks",
                date: "2014-04-05T17:57:28.556094Z"
            },
            {
                rating: 2,
                comment: "They'll feed you and they'll feed you and they'll tell you, it's fair.",
                author: "Michael Jaikishan",
                date: "2017-02-13T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Yesterday, all my troubles seemed so up my face, Now it looks as though they’ve gone away, Oh, I believe in today.",
                author: "the sprinkles",
                date: "2018-03-02T17:57:28.556094Z"
            },
            {
                rating: 3,
                comment: "You can find me at this resturant, belly full of food!",
                author: "25 Cent",
                date: "2010-11-02T17:57:28.556094Z"
            }
        ]
    },
    {
        id: 2,
        name: 'Vadonut',
        image: '/assets/images/vadonut.png',
        category: 'appetizer',
        label: 'New',
        price: '1.99',
        featured: false,
        description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
        comments: [
            {
                rating: 5,
                comment: "Tastes like lemons... Love it.",
                author: "John Lemon",
                date: "2012-10-16T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Smooth, textured, and perfect amount of sweet! 4/5",
                author: "ColdPlate",
                date: "2016-05-05T17:57:28.556094Z"
            },
            {
                rating: 3,
                comment: "Tastes like an other doughnut 😕",
                author: "Rick Grimes",
                date: "2015-02-13T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Very good 😀🤙👍",
                author: "Mick Jugular",
                date: "2017-07-28T17:57:28.556094Z"
            },
            {
                rating: 2,
                comment: "Where is the emotion? The pizzazz? The delightful aftertaste? I've had better.🗑",
                author: "Macaroon 5",
                date: "2011-12-02T17:57:28.556094Z"
            }
        ]
    },
    {
        id: 3,
        name: 'ElaiCheese Cake',
        image: '/assets/images/elaicheesecake.png',
        category: 'dessert',
        label: '',
        price: '2.99',
        featured: false,
        description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
        comments: [
            {
                rating: 5,
                comment: "I will always be loyal.. ",
                author: "@theRealLorde",
                date: "2012-10-16T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Awesome blast of lemon cheese flavors and a bit of cardamom.",
                author: "CriticalTasteBud",
                date: "2014-09-05T17:57:28.556094Z"
            },
            {
                rating: 5,
                comment: "Staff was nice",
                author: "JessieJames",
                date: "2015-02-13T17:57:28.556094Z"
            },
            {
                rating: 5,
                comment: "Had it with a couple of friends and loved it.",
                author: "loveablebraid",
                date: "2017-04-11T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Delicious!",
                author: "outdoormom",
                date: "2016-05-09T17:57:28.556094Z"
            }
        ]
    }
];