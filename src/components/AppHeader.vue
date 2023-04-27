<script>
import { getImgUrl } from "../assets/helpers/helpers"
export default {
    data() {
        return {
            jumbo: [
                {
                    img: "blog-46.jpg",
                    tag: "photography",
                    title: "How To Take Better Concert Pictures in 30 Seconds",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
                {
                    img: "blog-47.jpg",
                    tag: "gadgets",
                    title: "Gadgets that Make Your Smartphone Even Smarter",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
                {
                    img: "blog-48.jpg",
                    tag: "travel",
                    title: "20 Top-Rated Tourist Attractions in Manhattan",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
                {
                    img: "blog-49.jpg",
                    tag: "lifestyle",
                    title: "The Best Way to Ride a Motorcycle",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
                {
                    img: "blog-50.jpg",
                    tag: "Travel",
                    title: "5 Fun Things to Do at the Beach",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
                {
                    img: "blog-51.jpg",
                    tag: "Recipies",
                    title: "Amazingly Fresh Fruit And Herb Drinks For Summer",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
            ],

            popular: [
                {
                    title: "Simple Ways to Have a Preatty Face",
                    date: "January 12, 2019",
                    img: "blog-55.jpg",
                },
                {
                    title: "Ranking the greatest players in basketball",
                    date: "January 12, 2019",
                    img: "blog-56.jpg",
                },
                {
                    title: "4 Ways to Look Cool in Glasses",
                    date: "January 12, 2019",
                    img: "blog-57.jpg",
                },
                {
                    title: "Top Camper Trailer Towing Tips",
                    date: "January 12, 2019",
                    img: "blog-58.jpg",
                },
                {
                    title: "5 Lovely Walks in New York",
                    date: "January 12, 2019",
                    img: "blog-59.jpg",
                },
            ],

            recent: [
                {
                    title: "Main Reasons To Stop Texting And Driving",
                    date: "January 12, 2019",
                    img: "blog-65.jpg",
                },
                {
                    title: "Tips To Help You Quickly Prepare your Lunch",
                    date: "January 12, 2019",
                    img: "blog-66.jpg",
                },
                {
                    title: "Why Should I buy a smartwatch?",
                    date: "January 12, 2019",
                    img: "blog-67.jpg",
                },
                {
                    title: "The best augumented reality smartglasses",
                    date: "January 12, 2019",
                    img: "blog-68.jpg",
                },
                {
                    title: "12 Healthiest Foods to Eat for Breakfast",
                    date: "January 12, 2019",
                    img: "blog-69.jpg",
                },
            ],
            author: {
                img: "avatar.jpg",
                description: "lorem ipsium si namet, bing chilling, bruh , niverra esumado pelle, poltrone sofa, conscutor e baby Yoda,",
                name: "John Doe"
            },
            featured: {
                img: "blog-66(1).jpg",
                title: "Tips to Help You Quickly Prepare your Lunch",
                tag: "recipes"
            }

        }
    },
    methods: {
        getImgUrl,
    }
}
</script>

<template>
    <header>
        <!-- about us -->
        <section class="about">
            <div class="wrapper fl a-center">
                <span>Everything about Lifestyle, travel and Gadgets!</span>
                <ul class="fl a-center">
                    <li><a href="">sign in</a></li>
                    <li><a href="">about us</a></li>
                    <li><a href="">contact us</a></li>
                    <li><a href="">buy now</a></li>
                </ul>
            </div>
        </section>
        <!-- /about us -->

        <!-- logo -->
        <section class="logo">
            <div class="wrapper">
                <img src="../assets/images/logo-default-slim.png" alt="">
            </div>

        </section>
        <!-- /logo -->

        <!-- nav -->
        <section class="nav fl">
            <div class="wrapper">
                <nav class="fl j-between ">
                    <ul>
                        <li class="nav-active"><a href="">home</a></li>
                        <li><a href="">elements</a></li>
                        <li><a href="">features</a></li>
                        <li><a href="">pages</a></li>
                        <li><a href="">portfolio</a></li>
                        <li><a href="">blog</a></li>
                        <li><a href="">shop</a></li>
                    </ul>
                    <span></span>
                </nav>
            </div>
        </section>
        <!-- /nav -->

        <!-- jumbotron -->
        <section class="jumbo">
            <div class="wrapper">
                <div class="row fl j-center ">

                    <div class="col" v-for="elem in jumbo">
                        <div class="card">

                            <div class="overlay">
                                <span class="tag">{{ elem.tag }}</span>
                                <div class="text fl j-between">
                                    <h2>{{ elem.title }}</h2>
                                    <p>{{ elem.content }}</p>
                                </div>
                            </div>
                            <div class="filter"></div>
                            <img :src="getImgUrl(elem.img)" alt="">
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <!-- /jumbotron -->

        <!-- related -->
        <section class="related">
            <div class="wrapper">
                <div class="row fl wrap ">
                    <!-- popular posts -->
                    <div class="col">
                        <h3>popular posts</h3>
                        <a v-for="post in popular" href="#">
                            <div class="post fl">
                                <div class="img">
                                    <img :src="getImgUrl(post.img)" alt="">
                                </div>
                                <div class="post-txt">
                                    <p class="title">{{ post.title }}</p>
                                    <p class="date"> {{ post.date }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <!-- /popular posts -->

                    <!-- recent posts -->
                    <div class="col">
                        <h3>recent posts</h3>
                        <a href="#" v-for="post in recent">
                            <div class="post fl">
                                <div class="img">
                                    <img :src="getImgUrl(post.img)" alt="">
                                </div>
                                <div class="post-txt">
                                    <p class="title">{{ post.title }}</p>
                                    <p class="date"> {{ post.date }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <!-- /recent posts -->

                    <!-- featured posts -->
                    <div class="col">
                        <h3>featured posts</h3>
                        
                        <div class="featured-post">
                            <a href="#">
                                <div class="filter">
                                    <div class="text">
                                        <span class="tag">{{ featured.tag }}</span>
                                        <h2>{{ featured.title }}</h2>
                                    </div>
                                </div>
                                <img :src="getImgUrl(featured.img)" alt="">
                            </a>
                        </div>
                        
                        <!-- author -->
                        <h3>featured author</h3>
                        <a href="#">
                            <div class="featured-author fl">
                                    <div class="author-img">
                                        <img :src="getImgUrl(author.img)" alt="">
                                    </div>
                                    <div class="author-des">
                                        <h3>{{ author.name }}</h3>
                                        <p>{{ author.description }}</p>
                                    </div>
                            </div>
                        </a>
                        <!-- /author -->
                    </div>
                    <!-- /featured posts -->
                </div>
            </div>
        </section>
        <!-- /related -->

    </header>
</template>

<style scoped lang="scss">
@use "../variables" as *;

.about {
    height: 70px;
    background-color: $primary;
    color: #fff;

    ul {
        text-transform: uppercase;
        margin-left: 30px;

        li {
            margin-right: 20px;
        }

        a:hover {
            text-decoration: underline;
        }
    }
}

.logo {
    padding: 2rem 0;
    border-bottom: 1px solid $bd-gray1;

    img {
        width: 150px;
    }
}

.nav {
    text-transform: uppercase;

    li {
        margin-right: 20px;
        font-weight: 900;

        a:hover {
            color: $secondary;
        }
    }
}

//jumbotron------------------------------------------------------------------
.jumbo {
    background-color: $bg-lgray1;
    padding: 1.5rem 0;

    .row {
        flex-wrap: wrap;

        .col {

            .card {
                position: relative;
                overflow: hidden;
                z-index: 3;
                cursor: pointer;

                &:hover {
                    .overlay {
                        top: 0;
                    }

                    img {
                        transform: scale(1.2);

                    }
                }

                img {
                    transition: 500ms;
                }

                .overlay {
                    color: #fff;
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    left: 0;
                    padding: 1rem;
                    z-index: 2;
                    transition: 500ms;

                    @media screen and (min-width: 300px) {
                        top: 30%
                    }

                    @media screen and (min-width: 400px) {
                        top: 45%
                    }

                    @media screen and (min-width:500px) {
                        top: 55%
                    }

                    @media screen and (min-width:599px) {
                        top: 65%
                    }

                    @media screen and (min-width: 650px) {
                        top: 35%
                    }

                    @media screen and (min-width: 820px) {
                        top: 45%
                    }

                    @media screen and (min-width: 950px) {
                        top: 55%
                    }

                    @media screen and (min-width:1100px) {
                        top: 45%;
                    }

                    .text {
                        height: 120px;
                        flex-direction: column;

                        p {
                            color: $text-gray1;
                            font-size: 12px;
                        }
                    }
                }
            }

        }
    }
}

//related section----------------------------------------------------------------
.related {
    
    .post {
        padding-bottom: .7rem;
        border-bottom: 1px dotted $bd-gray2;
        margin-bottom: .7rem;
        max-height: 58px;
        min-width: 330px;

        .img {
            width: 45px;
            height: 45px;
            margin-right: 15px;

            img {
                object-fit: cover;

            }
        }

        .post-txt {
            width: calc(100% - 70px);

            .title {
                font-size: 13px;
                font-weight: 600;
                transition: 100ms;
            }

            .date {
                font-size: 12px;
                color: $text-gray2;
                margin-top: 5px;
                transition: 100ms;
            }
        }
    }

    a:hover {
        .title {
            color: $primary;
        }

        .post-txt>.date {
            color: #000000;
            font-weight: 500;
        }
    }


    .featured-post {
        overflow: hidden;
        min-height: 160px;
        margin-top: 35px;
        position: relative;
        margin-bottom: 1rem;
        @media screen and (min-width: 650px){
            width: 200%;
        }
        @media screen and (min-width:1100px){
            width: 100%;
        }
        a:hover{
            img{
                transform: scale(1.2);
            }
        }
        img{
           min-height: 160px;
           transition: 500ms;
        }
        .filter .text{
            position: absolute;
            bottom:1%;
            padding: 0 1rem;
            @media screen and (max-width:1100px){
                bottom:5%
            }
        }
    }

    .featured-author {
        max-height: 110px;

        .author-img {
            width: 110px;
            max-height: 110px;
        }

        .author-des {
            width: calc(100% - 110px);
            padding: .5rem 1rem;

            p {
                font-size: 13px;
                width: 100%;
                color: $text-gray2
            }
        }

    }
}</style>