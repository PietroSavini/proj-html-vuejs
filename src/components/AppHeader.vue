<script>
export default{
    data(){
        return{

        }
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
        <section class="jumbo fl">

        </section>
        <!-- /jumbotron -->
        
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
}
</style>