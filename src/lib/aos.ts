export type AOSOptions = {
    duration?: number;
    once?: boolean;
};

class SimpleAOS {
    private observer?: IntersectionObserver;
    private options: Required<AOSOptions>;

    constructor() {
        this.options = { duration: 600, once: true };
    }

    init(options: AOSOptions = {}) {
        if (typeof window === 'undefined') {
            return;
        }

        this.options = {
            duration: options.duration ?? 600,
            once: options.once ?? true,
        };

        this.observeElements();
    }

    refresh() {
        if (typeof window === 'undefined') {
            return;
        }

        this.observeElements();
    }

    destroy() {
        this.observer?.disconnect();
        this.observer = undefined;
    }

    private observeElements() {
        const { duration, once } = this.options;

        this.observer?.disconnect();

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                const target = entry.target as HTMLElement;

                if (entry.isIntersecting) {
                    target.classList.add('aos-animate');
                    if (once) {
                        obs.unobserve(target);
                    }
                } else if (!once) {
                    target.classList.remove('aos-animate');
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px',
        });

        const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-aos]'));

        elements.forEach((el) => {
            el.style.setProperty('--aos-duration', `${duration}ms`);
            el.classList.add('aos-init');
            observer.observe(el);
        });

        this.observer = observer;
    }
}

const AOS = new SimpleAOS();

export default AOS;
