<template>
    <div class="navbar">
        <div class="logo">
            <a href="#">Y</a>
        </div>
        <ul>
            <li>
                <a href="#">News</a>
            </li>
            <li>
                <a href="#">Pasts</a>
            </li>
            <li>
                <a href="#">Comments</a>
            </li>
            <li>
                <a href="#">Ask</a>
            </li>
        </ul>
        <div class="login">
            <a href="#">Login</a>
        </div>
    </div>
    
</template>
<script>
export default {
    name: 'NavBar',
    
}
</script>
<style scoped>
.navbar{
    display: flex;
    justify-content: left;
    background-color: rgb(255, 102, 0);
    width: 100%;
    padding: 2px;
}
.navbar a{
    text-decoration: none;
}
.logo{
    font-weight: bold;
    border: 1px solid #fff;
}
.logo a{
    color: #fff;
    padding: 3px;
}
.navbar ul{
    padding: 0;
    margin: 0;
    padding: 2px;
}
.navbar ul li{
    list-style: none;
    display: inline;
    padding: 0 5px;
    color: #000;
    border-right: 1px solid;
}

.navbar li:last-child{
   border-right: none;
}
.navbar li a, .login a{
    color: #000;
    font-size: 10pt;
}
.login{
    margin-left: auto
}

</style>


