<template>
    <div class="container">
        <h3 class="title">{{ title }}</h3>
        <p class="description">{{ description }}</p>
        <div class="links-display">
            <div class="social-link-container">
                <!-- <a class="github-link social-link" href="http://www.github.com/othryades" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <fa-icon icon="fa-brands fa-2xl fa-github" />
                </a>
                <a class="linkedin-link social-link" href="https://www.linkedin.com/in/moris-iarossi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <fa-icon icon="fa-brands fa-2xl fa-linkedin" />
                </a> -->
                <!-- <a class="facebook-link social-link" href="https://www.facebook.com/moris.iarossi/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                    <fa-icon icon="fa-brands fa-facebook" />
                </a> -->
                <!-- <a class="social-link" href="https://web.whatsapp.com/send?phone=" target="_blank" rel="noopener noreferrer">
                    <fa-icon icon="fa-brands fa-lg fa-whatsapp" />
                </a> -->
            </div>
            <div class="link-container">
            <LinkComponent 
                image="/github.png" 
                alt="Personal website logo" 
                title="GitHub" 
                url="" 
            />
            <LinkComponent 
                image="/linkedin.png" 
                alt="Personal website logo" 
                title="Linkedin" 
                url="" 
            />
            <!-- <LinkComponent image="/favicon.ico" title="We built with VueJS.org Framework V3" url="https://vuejs.org/" /> -->
        </div>
        </div>
        <!-- <h3 class="subtitle">Learn More</h3> -->
        <div class="link-container">
            <LinkComponent 
                image="/world-wide-web.png" 
                alt="Personal website logo" 
                title="personal website" 
                url="https://moriswebdev.netlify.app" 
            />
            <!-- <LinkComponent 
                image="/logo.webp" 
                alt="Personal website logo" 
                title="personal website II" 
                url="https://moriswebdev.netlify.app" 
            /> -->
            <!-- <LinkComponent image="/favicon.ico" title="We built with VueJS.org Framework V3" url="https://vuejs.org/" /> -->
        </div>
        <h3 class="subtitle">Projects</h3>
        <div class="link-container">
            <!-- <LinkComponent image="/qr-code.png" title="QR Code Generator" url="" /> -->
            <LinkComponent 
                image="/wormhole.webp" 
                alt="WormGate project logo" 
                title="WormGate" 
                url="https://wormgate.on-fleek.app"  
            />
            <LinkComponent 
                image="/besu.png" 
                alt="WormGate project logo" 
                title="Linea Peers Watchers Map" 
                url="https://lineapeerswatchersmap.netlify.app/"  
            />
            <LinkComponent 
                image="/output-onlinepngtools.webp" 
                alt="TokenTalk project logo" 
                title="TokenTalk" 
                url="https://xmtp-token-chat.vercel.app" 
            />
            
        </div>
    </div>
</template>

<script>
import LinkComponent from './LinkComponent.vue';

export default {
    name: 'SocialMediaLinks',
    props: {
        title: String,
        description: String
    },
    components: {
        LinkComponent
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
.container {
    display: flex;
    flex-direction: column;
}

.social-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.25rem;
    width: 100%;
}

.social-link {
    font-size: 2em;
}

.social-link:hover {
    transform: scale(1.1);
    color: var(--secondary-color);
}

.link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
