<template>
    <div id="app">
        <ThemeToggleComponent />
        <main class="main-content">
            <ShareComponent />
            <!-- <HeaderComponent /> -->
            <img alt="App logo" src="/logo.png" height="150" class="app-logo" />
            <!-- <ProfilePage /> -->
            <SocialMediaLinks title="@moriswebdeveloper" description="Full Stack Web Developer | Technical Support Engineer" />
        </main>
        <FooterComponent />
    </div>
</template>

<script>
import SocialMediaLinks from './components/SocialMediaLinks.vue';
import ShareComponent from './components/ShareComponent.vue';
import ThemeToggleComponent from './components/ThemeToggleComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
    name: 'App',
    components: {
        SocialMediaLinks,
        ShareComponent,
        ThemeToggleComponent,
        FooterComponent
    }
};
</script>

<style>
@import '../public/css/colors.css ';

#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--font-color);
    background-color: var(--bg-color);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
}

.app-logo {
    width: auto;
    height: 150px;
    object-fit: contain;
    margin: 20px 0;
}

html {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--bg-color);
    color: var(--font-color);
}

body {
    background-color: var(--bg-color);
    color: var(--font-color);
}

a {
    color: var(--font-color);
    text-decoration: none;
    transition: all 0.3s ease;
}

fa-icon {
    color: var(--font-color);
}
</style>
