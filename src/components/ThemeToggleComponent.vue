<template>
    <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" @change="switchTheme($event)" />
            <div class="slider round">
                <span class="sun-icon">☀️</span>
                <span class="moon-icon">🌙</span>
            </div>
        </label>
    </div>
</template>

<script>
export default {
    name: 'ThemeToggleComponent',
    data() {
        return {
            theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
        };
    },
    methods: {
        switchTheme(e) {
            const toggleInput = document.getElementById('checkbox');
            const isDark = e?.target.checked || toggleInput?.checked;
            if (isDark) {
                this.theme = 'dark';
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                this.theme = 'light';
                document.documentElement.setAttribute('data-theme', this.theme);
            }
        }
    },
    async created() {
        this.switchTheme();
    }
};
</script>

<style>
/* BACKGROUND */

.theme-switch-wrapper {
    position: fixed;
    align-items: center;
    top: 1.5rem;
    height: 2rem;
    right: calc(100vw - 10% - 2rem);
}

.theme-switch-wrapper em {
    /* margin-left: 10px; */
    position: absolute;
    top: -1.125rem;
    left: 1rem;
    /* font-size: 1rem; */
}

.theme-switch {
    display: inline-block;
    /* height: 34px; */
    height: 2rem;
    position: relative;
    width: 60px;
}

.theme-switch input {
    display: none;
}

.slider {
    background-color: var(--bg-color);
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
}

.slider:before {
    display: none;
}

.slider.round {
    border-radius: 50px;
    background: var(--bg-color);
    box-shadow: 3px 3px 7px var(--box-shadow-top-color), -3px -3px 7px var(--box-shadow-bottom-color);
}

.slider.round:hover {
    background: var(--bg-color);
}

.slider.round:before {
    border-radius: 50%;
}

.sun-icon,
.moon-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    transition: 0.4s;
}

.sun-icon {
    left: 6px;
    opacity: 1;
}

.moon-icon {
    right: 6px;
    opacity: 0;
}

input:checked ~ .slider .sun-icon {
    opacity: 0;
}

input:checked ~ .slider .moon-icon {
    opacity: 1;
}

/* BACKGROUND */
</style>
