/* ==========================================
   JAVASCRIPT INTERACTION
   ========================================== */

/* Navbar saat scroll */
#navbar.scrolled {
    background: rgba(5, 8, 15, 0.88);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom-color: rgba(0, 217, 255, 0.18);
    box-shadow:
        0 10px 35px rgba(0, 0, 0, 0.35),
        0 0 25px rgba(0, 217, 255, 0.05);
}


/* Active navigation */
.nav-link.active {
    color: #00d9ff;
}

.nav-link.active::after {
    width: 100%;
}


/* Filter animation */
.project-card,
.certification-card {
    transition:
        opacity 0.35s ease,
        transform 0.35s ease,
        visibility 0.35s ease;
}

.project-card.hidden,
.certification-card.hidden {
    opacity: 0 !important;
    transform: translateY(18px) scale(0.98) !important;
    visibility: hidden;
    pointer-events: none;
}

.project-card.visible,
.certification-card.visible {
    opacity: 1 !important;
    transform: translateY(0) scale(1) !important;
    visibility: visible;
}


/* Scroll reveal */
.scroll-reveal {
    opacity: 0;
    transform: translateY(25px);
    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
}


/* Skill level */
.skill-level.level-advanced {
    background: rgba(0, 217, 255, 0.12);
    color: #00d9ff;
    border: 1px solid rgba(0, 217, 255, 0.25);
}

.skill-level.level-intermediate {
    background: rgba(124, 92, 255, 0.12);
    color: #a895ff;
    border: 1px solid rgba(124, 92, 255, 0.25);
}

.skill-level.level-basic {
    background: rgba(255, 255, 255, 0.07);
    color: #c9d1dc;
    border: 1px solid rgba(255, 255, 255, 0.12);
}


/* Accessibility */
.nav-link:focus-visible,
.filter-btn:focus-visible,
button:focus-visible,
a:focus-visible {
    outline: 2px solid #00d9ff;
    outline-offset: 4px;
}


/* Reduce motion */
@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }

}