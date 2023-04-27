<script>
import {getImgUrl} from "../assets/helpers/helpers"
export default{
    data(){
        return{
            jumbo:[
                {
                    img:"blog-46.jpg",
                    tag: "photography",
                    title:"How To Take Better Concert Pictures in 30 Seconds",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
                {
                    img:"blog-47.jpg",
                    tag: "gadgets",
                    title:"Gadgets that Make Your Smartphone Even Smarter",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
                {
                    img:"blog-48.jpg",
                    tag: "travel",
                    title:"20 Top-Rated Tourist Attractions in Manhattan",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
                {
                    img:"blog-49.jpg",
                    tag: "lifestyle",
                    title:"The Best Way to Ride a Motorcycle",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
                {
                    img:"blog-50.jpg",
                    tag: "Travel",
                    title:"5 Fun Things to Do at the Beach",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
                {
                    img:"blog-51.jpg",
                    tag: "Recipies",
                    title:"Amazingly Fresh Fruit And Herb Drinks For Summer",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia officia alias rem laborum culpa voluptates, deserunt iusto eveniet modi.",
                },
            ]
        }
    },
    methods:{
        getImgUrl,
    }
}
</script>

<template>
    <header>
        <!-- about us -->
        <section class="about">
            <div class="wrapper fl a-center">
                <span>Everithing about Lifestyle, travel and Gadgets!</span>
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
                <img  src="../assets/images/logo-default-slim.png" alt="">
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
                <div class="row fl ">
                    <div class="col">
                        <h3>popular posts</h3>
                        <div class="post fl">
                            <div class="img">
                                <img src="../assets/images/blog-55.jpg" alt="">
                            </div>
                            <div class="post-txt">
                                <p class="title">Ciao CCiao Fontina Prosciutto</p>
                                <p class="date"> January 12,2019</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <h3>recent posts</h3>
                    </div>
                    <div class="col">
                        <h3>featured posts</h3>
                    </div>
                </div>
            </div>
        </section>
        <!-- /related -->
        
    </header>
</template>

<style scoped lang="scss">
@use "../variables" as *;

.about{
    height: 70px;
    background-color: $primary;
    color: #fff;
    ul{
        text-transform: uppercase;
        margin-left: 30px;

        li{
            margin-right: 20px;
        }

        a:hover{
            text-decoration: underline;
        }
    }
}

.logo{
    padding:2rem 0;
    border-bottom: 1px solid $bd-gray1;
    img{
        width: 150px;
    }
}

.nav {
    text-transform: uppercase;
    li{
        margin-right: 20px;
        font-weight: 900;
        a:hover{
            color: $secondary;
        }
    }
}

.jumbo{
    background-color: $bg-lgray1;
    padding: 1.5rem 0;
    .row{
        flex-wrap: wrap ;
        .col{ 
            min-height: 200px;
            min-width: 380px;
            
            
            .card{
                position: relative;
                overflow: hidden;
                z-index: 3;
                object-fit: contain;
                cursor: pointer;
                &:hover{
                    .overlay{
                        top:0;
                    }
                    img{
                        transform: scale(1.2);
                        
                    }
                }
                img{
                    transition: 500ms;
                    display: block;
                }
                .filter{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba($color: #000000, $alpha: .3);
                    z-index: 1;
                }
                .overlay{
                    color: #fff;
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    top: 45%;
                    left: 0;
                    padding: 1rem;
                    z-index: 2;
                    transition: 500ms;
                    .text{
                        height: 100px;
                        flex-direction: column;
                        
                        h2{
                            font-size: 15px;
                            margin-bottom: 15px;
                        }
                        p{
                            color: $text-gray1;
                            font-size: 12px;
                        }
                    }
                }
            }
            
        }
    }
}

.related {
    
    .img{
        width: 50px;
        height: 50px;
        margin-right: 15px;
    }
    .date{
        font-size: 12px;
        color: $text-gray2;
        margin-top: 5px;
    }
}
</style>