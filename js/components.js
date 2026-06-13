// Latihan 2: Custom Component Blink Wajib (Visible On/Off)
AFRAME.registerComponent('blink', {
    schema: { interval: { type: 'number', default: 500 } },
    init: function () {
        let visible = true;
        this.interval = setInterval(() => {
            visible = !visible;
            this.el.setAttribute('visible', visible);
        }, this.data.interval);
    },
    remove: function () {
        clearInterval(this.interval);
    }
});

// Latihan 1: Komponen Klik Ganti Warna Kerucut
AFRAME.registerComponent('sci-fi-color-switch', {
    init: function () {
        const modes = ['#E0E0FF', '#39FF14', '#FF3366', '#00FFFF'];
        let currentMode = 0;
        this.el.addEventListener('click', () => {
            currentMode = (currentMode + 1) % modes.length;
            this.el.setAttribute('color', modes[currentMode]);
            this.el.setAttribute('material', 'emissive', modes[currentMode]);
        });
    }
});

// Komponen Logika Navigasi Portal Warp
AFRAME.registerComponent('warp-portal', {
    schema: { href: { type: 'string' } },
    init: function () {
        this.el.addEventListener('click', () => {
            const ring = this.el.querySelector('.warp-ring');
            if(ring) {
                ring.setAttribute('animation__warp', 'property: scale; to: 4 4 4; dur: 300; easing: easeInExpo');
            }
            setTimeout(() => {
                window.location.href = this.data.href;
            }, 250); 
        });
    }
});

// Latihan 3: Toggle Tampilan Panel Informasi Hologram Hotspot
AFRAME.registerComponent('toggle-holo-ui', {
    init: function () {
        this.el.addEventListener('click', () => {
            const panel = this.el.querySelector('.holo-panel');
            if (panel) {
                const isVisible = panel.getAttribute('visible');
                panel.setAttribute('visible', !isVisible);
            }
        });
    }
});