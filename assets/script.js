/* =========================================================
   HARSHIT SOORA — interactions
   ========================================================= */

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------- Lenis smooth scroll ----------- */
  let lenis;
  if (window.Lenis && !prefersReduced) {
    lenis = new Lenis({
      duration: 1.15,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = a.getAttribute('href');
        if (!target || target === '#') return;
        const el = document.querySelector(target);
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el, { offset: -40 });
      });
    });
  }

  /* ----------- Header scroll state ----------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 80) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----------- GSAP ----------- */
  if (!window.gsap) return;
  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    if (lenis) lenis.on('scroll', ScrollTrigger.update);
  }

  window.__heroAnimated = true;
  document.documentElement.classList.remove('js-loading');

  /* Hero word stagger */
  const words = document.querySelectorAll('.hero-title .word');
  if (words.length) {
    gsap.fromTo(words,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 1.0, ease: 'power3.out',
        stagger: 0.06, delay: 0.15,
      }
    );
  }

  /* Stripe panel — slide and fade in */
  gsap.fromTo('.hero-stripes',
    { opacity: 0, scaleX: 0.85 },
    {
      opacity: 1, scaleX: 1,
      duration: 1.4, ease: 'power3.out',
      delay: 0.4,
      transformOrigin: 'left center',
    }
  );

  /* Portrait — slide in from the right */
  gsap.fromTo('.hero-portrait',
    { opacity: 0, x: 40 },
    {
      opacity: 1, x: 0,
      duration: 1.1, ease: 'power3.out',
      delay: 0.5,
    }
  );

  /* Hero subtitle + scroll prompt */
  gsap.fromTo('.hero-sub',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.85 }
  );
  gsap.fromTo('.scroll-prompt',
    { opacity: 0 },
    { opacity: 1, duration: 0.8, delay: 1.15 }
  );

  /* Section reveals */
  if (window.ScrollTrigger && !prefersReduced) {
    const revealTargets = [
      '.together .section-title',
      '.together .title-rule',
      '.together-body',
      '.together .btn-striped',
      '.experience .eyebrow',
      '.experience .section-title',
      '.experience .title-rule',
      '.exp-item',
      '.open-source .section-title',
      '.open-source .title-rule',
      '.open-source .section-lede',
      '.project',
      '.courses .eyebrow',
      '.courses .section-title',
      '.courses .title-rule',
      '.courses .section-lede',
      '.course-school',
      '.class-projects-title',
      '.class-project',
      '.site-footer',
    ];

    revealTargets.forEach(sel => {
      gsap.utils.toArray(sel).forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.8, ease: 'power3.out',
            delay: i * 0.04,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    /* Title rule grows from 0 width */
    gsap.utils.toArray('.title-rule').forEach(rule => {
      gsap.fromTo(rule,
        { width: 0 },
        {
          width: 80,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rule,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }
})();
