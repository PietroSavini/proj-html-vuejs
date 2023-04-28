<script>
import { getImgUrl } from "../assets/helpers/helpers"
export default {
    data() {
        return {
            category: [
                {
                    type: "gadgets",
                },
                {
                    type: "photography",
                },
                {
                    type: "lifestyle",
                },
                {
                    type: "fashion",
                },
                {
                    type: "recipes",
                },
                {
                    type: "travel",
                },
            ],
            posts: [
                {
                    img: "blog-54.jpg",
                    title: "How to Make Friends as a Grown-Up",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem deserunt consectetur ex delectus et quam dicta numquam distinctio mollitia est, optio animi, reiciendis expedita laudantium, voluptatum culpa ducimus repellendus. Tempore dolores sunt accusamus, repellendus similique adipisci quasi suscipit sed voluptatum? Nulla, obcaecati ",
                    author: "John Doe",
                    tags: "Lifestyle, Travel",
                    comments: "12 Comments",
                    date:{
                        day:"12",
                        month:"JAN"
                    }
                    
                },
                {
                    img: "blog-55 (1).jpg",
                    title: "Simple Ways to Have a Preatty Face",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem deserunt consectetur ex delectus et quam dicta numquam distinctio mollitia est, optio animi, reiciendis expedita laudantium, voluptatum culpa ducimus repellendus. Tempore dolores sunt accusamus, repellendus similique adipisci quasi suscipit sed voluptatum? Nulla, obcaecati ",
                    author: "John Doe",
                    tags: "Photography, Travel",
                    comments: "12 Comments",
                },
                {
                    img: "blog-56 (1).jpg",
                    title: "Ranking theGreatest playesr in Basketball",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem deserunt consectetur ex delectus et quam dicta numquam distinctio mollitia est, optio animi, reiciendis expedita laudantium, voluptatum culpa ducimus repellendus. Tempore dolores sunt accusamus, repellendus similique adipisci quasi suscipit sed voluptatum? Nulla, obcaecati ",
                    author: "John Doe",
                    tags: "Sport, Business",
                    comments: "12 Comments",
                    date: {
                        day: "12",
                        month: "Jan",
                    }
                },
                {
                    img: "blog-58 (1).jpg",
                    title: "Top Camper Trailer Towing Tips",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem deserunt consectetur ex delectus et quam dicta numquam distinctio mollitia est, optio animi, reiciendis expedita laudantium, voluptatum culpa ducimus repellendus. Tempore dolores sunt accusamus, repellendus similique adipisci quasi suscipit sed voluptatum? Nulla, obcaecati",
                    author: "John Doe",
                    tags: "Travel, Lifestyle",
                    comments: "12 Comments",
                    date: {
                        day: "12",
                        month: "Jan",
                    }
                },
                {
                    img: "blog-54.jpg",
                    title: "How to Make Friends as a Grown-Up",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem deserunt consectetur ex delectus et quam dicta numquam distinctio mollitia est, optio animi, reiciendis expedita laudantium, voluptatum culpa ducimus repellendus. Tempore dolores sunt accusamus, repellendus similique adipisci quasi suscipit sed voluptatum? Nulla, obcaecati incidunt recusandae corporis maxime nobis rerum rem explicabo",
                    author: "John Doe",
                    tags: "Travel, Lifestyle",
                    comments: "12 Comments",
                    date:{
                        day: "12",
                        month: "Jan",
                    }
                },
            ],
            fromTwitter:[
                {
                    message:"if you have any suggestions for the next updates, let us know.",
                    date:"01:05 PM Sep 18th",
                },
                {
                    message:"We have just updated Porto Admin. Check the changelog for more information.",
                    date:"01:04 PM Sep 18th",
                },
            ],
            fromInstagramImg:[

                {
                    img:"29739607_2020680068220520_4509928046932787200_n.jpg",
                },
                {
                    img:"30087804_253872848488989_8792603541668626432_n.jpg",
                },
                {
                    img:"29415620_196477127626244_3250318472361541632_n.jpg",
                },
                {
                    img:"30078414_1274410412703843_8290935809419247616_n.jpg",
                },
                {
                    img:"30077195_2066750973610181_3733150062893596672_n.jpg",
                },
                {
                    img:"29415304_166583630713703_1032667922171953152_n.jpg",
                },    
            ]

        }
    },
    methods: {
        getImgUrl,
    }
}
</script>

<template>
    <main>
        <section class="tags">
            <div class="wrapper">
                <div class="row fl">
                    <i class="fa-solid fa-chevron-left"></i>
                    <span v-for="tag in category" class="category">{{ tag.type }}</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </section>

        <section class="home-page">
            <div class="wrapper">
                <div class="row fl">
                    <!-- main content -->
                    <div class="hp-col lg">
                        <div v-for="post in posts" class="hp-post">
                            <div class="post-img">
                                <img :src="getImgUrl(post.img)" alt="">
                            </div>
                            <div class="post-details fl">

                                <div class="calendar fl column">
                                    <!-- messi in maniera statica in quanto in maniera dinamica{{post.date.day/month}}non funzionava -->
                                    <span class="day">12</span>
                                    <span class="month">JAN</span>
                                    
                                </div>

                                <div class="post-text fl column">
                                    <h3 class="post-title">{{ post.title }}</h3>
                                    <p class="post-desciption">{{ post.description }}</p>
                                    <div class="other-details fl j-between">

                                        <div class="stats">
                                            <span>
                                                <i class="fa-regular fa-user"></i>By
                                                <a href="#">{{ post.author }}</a>
                                            </span>

                                            <span>
                                                <i class="fa-regular fa-folder"></i>
                                                <a href="">{{ post.tags }}</a>
                                            </span>

                                            <span>
                                                <i class="fa-regular fa-comment"></i>
                                                <a href="">{{ post.comments }}</a>
                                            </span>
                                        </div>
                                        <span class="btn ">Read More</span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- /main content -->

                    <!-- aside content -->
                    <div class="hp-col sm">

                        <div class="from-twitter">
                            <h3>latest from twitter</h3>
                            <div v-for="message in fromTwitter" class="message fl">
                                <i class="fa-brands fa-twitter"></i>
                                <div class="message-details">
                                    <p>{{message.message}}</p>
                                    <span>{{message.date}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="from-instagram">
                            <h3>photos from instagram</h3>
                            <div class="img-container fl wrap">
                                <div  v-for="item in fromInstagramImg" class="img">
                                    <img :src="getImgUrl(item.img)" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /aside content -->
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
@use "../variables" as *;

.tags {
    background-color: $primary;

    .row {
        justify-content: space-evenly;
        align-items: center;
        padding: 1rem 1rem;

        .category {
            display: inline-block;
            padding: 1rem .5rem;
            text-align: center;
            width: 180px;
            background-color: $bg-dgray1;
            color: #ffffff;
            text-transform: uppercase;
            font-weight: 600;
            font-size: .8rem;
            transition: 200ms;
            margin: 0 .5rem;
            cursor: pointer;

            &:hover {
                background-color: $bg-dgray2;
            }
        }

        i {
            cursor: pointer;
            transition: 200ms;

            &:hover {
                transform: scale(1.1);
            }
        }

    }
}

.home-page {

    .lg {
        width: 70%;

        .hp-post {
            margin-bottom: 2rem;

            .calendar {
                width: 50px;
                padding-top: 1rem;
                margin-right: .5rem;
                text-align: center;
                &>span{
                    display: inline-block;
                    font-size: 13px;
                    font-weight: 900;
                    width: 80%;
                    &.day{
                        background-color: $bg-lgray1 ;
                        height: 40px;
                        line-height: 40px;
                    }
                    &.month{
                        background-color: $bg-dgray1;
                        color: #ffffff;
                        font-size: 10px;
                        height: 20px;
                        line-height: 20px;
                    }
                }
            }

            .post-text {
                width: calc(100% - 50px);
                padding-top: 1rem;
                font-size: 12px;

                .other-details {
                    margin-top: 1rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid $bd-gray2 ;
                    &>span{
                        color: $text-gray1;
                        width: 100px;
                        text-align: center;
                        display: inline-block;
                        border: 1px solid;
                        border-radius: 5px;
                        height: 20px;
                        line-height: 18px;
                        text-transform: uppercase;
                        &:hover{
                            background-color: $bg-lgray2;
                            color: black;
                        }
                    }

                    .stats {
                        width: 100%;

                        &>span {

                            a {
                                margin-right: 1rem;
                                color: $text-blue ;

                                &:hover {
                                    text-decoration: underline;
                                }
                            }

                            i {
                                margin-right: 5px;
                            }
                        }

                    }
                }
            }
        }
    }

    .sm {
        width: 30%;
        padding-left: 1rem;
        .from-twitter{
            .message{
                margin-bottom: 1rem;
                i{
                    display: block;
                    width: 20px;
                    margin-right: 10px;
                    padding-top: 3px;
                    
                }
                p{
                    font-size: 12px;
                }
                .message-details{
                    display: block;
                    span{
                        font-size: 12px;
                        color: $text-blue ;
                    }
                }

            }
        }

        .from-instagram{
            margin-top: 3rem;
            .img-container{
                
                .img{
                    width:calc(100% / 3);
                    height: 50%;
                }
            }
        }
    }
}</style>