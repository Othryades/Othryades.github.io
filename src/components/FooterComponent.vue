<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <p class="made-with">
                    Made with 
                    <!-- <span class="heart">❤️</span>  -->
                    <!-- using  -->
                    <!-- <a href="https://vitejs.dev" target="_blank" class="tech-link">
                        <img src="/vite.svg" alt="Vite" class="tech-logo" />
                    </a>
                    + -->
                    <a href="https://github.com/Othryades/Othryades.github.io" target="_blank" class="tech-link">
                        <img src="/vue.svg" alt="Vue" class="tech-logo" />
                    </a>
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
};
</script>

<style>
.footer {
    width: 100%;
    padding: 1.5rem 0;
    margin-top: auto;
    background-color: var(--bg-color);
    box-sizing: border-box;
    overflow-x: hidden;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    box-sizing: border-box;
}

.footer-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
}

.copyright {
    color: var(--font-color);
    margin: 0;
}

.made-with {
    color: var(--font-color);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
}

.heart {
    display: inline-block;
    transform-origin: center;
    animation: heartbeat 1.5s ease infinite;
}

.tech-logo {
    height: 1.2rem;
    width: auto;
    max-width: 20px;
    vertical-align: middle;
}

.tech-link {
    display: inline-flex;
    align-items: center;
    transition: transform 0.2s ease;
}

.tech-link:hover {
    transform: scale(1.1);
}

.footer-links {
    display: flex;
    gap: 1.5rem;
}

.footer-link {
    color: var(--font-color);
    text-decoration: none;
    transition: opacity 0.2s ease;
}

.footer-link:hover {
    opacity: 0.8;
}

@keyframes heartbeat {
    0% { transform: scale(1); }
    14% { transform: scale(1.1); }
    28% { transform: scale(1); }
    42% { transform: scale(1.1); }
    70% { transform: scale(1); }
}

@media (max-width: 600px) {
    .footer-content {
        flex-direction: column;
        text-align: center;
    }
    
    .footer-section {
        align-items: center;
    }
    
    .footer-links {
        justify-content: center;
    }
}
</style> 
