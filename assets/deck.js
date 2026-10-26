/* ============================================================
   Hands-On Harness Engineering Tutorial Deck Navigation
   Supports 15 slides, copyable commands, dropdown jump, keyboard, swipe, hash links
   ============================================================ */

window.copyCommand = function (btn, text) {
  if (!btn) return;
  const originalHtml = btn.innerHTML;
  function setSuccess() {
    btn.classList.add("copied");
    btn.innerHTML = "✔ Copied!";
    setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = originalHtml;
    }, 1800);
  }
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(setSuccess).catch(() => {
      fallbackCopy(text, setSuccess);
    });
  } else {
    fallbackCopy(text, setSuccess);
  }
};

function fallbackCopy(text, cb) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    if (cb) cb();
  } catch (err) {}
  document.body.removeChild(ta);
}

(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const total = slides.length;
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const count = document.getElementById("count");
  const dotsWrap = document.getElementById("dots");
  const progress = document.getElementById("progress");
  const title = document.getElementById("slideTitle");
  const slideSelect = document.getElementById("slideSelect");
  const gotoInput = document.getElementById("gotoInput");
  const gotoBtn = document.getElementById("gotoBtn");

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "dot";
    d.setAttribute("aria-label", "Go to slide " + (i + 1));
    d.addEventListener("click", () => go(i));
    dotsWrap.appendChild(d);
  });
  const dots = Array.from(dotsWrap.children);

  // Build slide dropdown options
  if (slideSelect) {
    slides.forEach((s, idx) => {
      const opt = document.createElement("option");
      opt.value = idx;
      opt.textContent = `${idx + 1}. ${s.dataset.title || "Slide " + (idx + 1)}`;
      slideSelect.appendChild(opt);
    });
    slideSelect.addEventListener("change", (e) => {
      go(parseInt(e.target.value, 10));
    });
  }

  function handleGoto() {
    if (!gotoInput) return;
    const val = parseInt(gotoInput.value, 10);
    if (!isNaN(val) && val >= 1 && val <= total) {
      go(val - 1);
      gotoInput.value = "";
    }
  }
  if (gotoBtn) gotoBtn.addEventListener("click", handleGoto);
  if (gotoInput) {
    gotoInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleGoto();
      }
    });
  }

  let cur = 0;

  function clamp(i) {
    return Math.max(0, Math.min(total - 1, i));
  }

  function go(i) {
    i = clamp(i);
    slides.forEach((s, idx) => {
      s.classList.toggle("is-active", idx === i);
      s.classList.toggle("is-prev", idx < i);
    });
    dots.forEach((d, idx) => d.classList.toggle("is-on", idx === i));
    cur = i;
    count.textContent = (i + 1) + " / " + total;
    
    // Read localized title if available
    const activeSlide = slides[i];
    const localizedTitle = (window.AGENT_SEC_I18N && window.AGENT_SEC_I18N.getSlideTitle(i)) || activeSlide.dataset.title || "";
    title.textContent = localizedTitle;

    if (slideSelect) slideSelect.value = i;

    progress.style.width = ((i) / (total - 1) * 100) + "%";
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === total - 1;

    if (history.replaceState) {
      history.replaceState(null, "", "#" + (i + 1));
    }

    // Trigger diagram render for this slide if not yet rendered
    if (window.renderDiagramForSlide) {
      window.renderDiagramForSlide(i + 1);
    }
  }

  const next = () => go(cur + 1);
  const prev = () => go(cur - 1);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  // Fullscreen support
  const fsBtn = document.getElementById("fsBtn");
  const fsLabel = fsBtn ? fsBtn.querySelector(".bar__btn-label") : null;

  function isFullscreen() {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  function toggleFullscreen() {
    if (!isFullscreen()) {
      const docEl = document.documentElement;
      const rfs = docEl.requestFullscreen ||
                  docEl.webkitRequestFullscreen ||
                  docEl.mozRequestFullScreen ||
                  docEl.msRequestFullscreen;
      if (rfs) {
        const p = rfs.call(docEl);
        if (p && p.catch) p.catch(() => {});
      }
    } else {
      const efs = document.exitFullscreen ||
                  document.webkitExitFullscreen ||
                  document.mozCancelFullScreen ||
                  document.msExitFullscreen;
      if (efs) {
        const p = efs.call(document);
        if (p && p.catch) p.catch(() => {});
      }
    }
  }

  function updateFullscreenUI() {
    const inFs = isFullscreen();
    document.body.classList.toggle("is-fullscreen", inFs);
    if (fsLabel) {
      const isZh = window.AGENT_SEC_I18N && window.AGENT_SEC_I18N.isZh();
      fsLabel.textContent = inFs
        ? (isZh ? "退出全屏" : "Exit Full")
        : (isZh ? "全屏演示" : "Full Screen");
    }
  }

  if (fsBtn) {
    fsBtn.addEventListener("click", toggleFullscreen);
  }

  ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(evt => {
    document.addEventListener(evt, updateFullscreenUI);
  });

  // Keyboard navigation
  document.addEventListener("keydown", e => {
    const tag = (e.target && e.target.tagName) || "";
    if (["INPUT", "TEXTAREA", "SELECT"].includes(tag)) return;

    if (["ArrowRight", "PageDown", " "].includes(e.key)) {
      e.preventDefault();
      next();
    } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
      e.preventDefault();
      prev();
    } else if (e.key === "Home") {
      e.preventDefault();
      go(0);
    } else if (e.key === "End") {
      e.preventDefault();
      go(total - 1);
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === "g" || e.key === "G") {
      if (gotoInput) {
        e.preventDefault();
        gotoInput.focus();
        gotoInput.select();
      }
    }
  });

  // Touch swipe support
  let x0 = null;
  document.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next(); else prev();
    }
    x0 = null;
  }, { passive: true });

  // Debounced wheel navigation
  let wheelLock = false;
  document.addEventListener("wheel", e => {
    if (wheelLock) return;
    if (Math.abs(e.deltaY) < 28 && Math.abs(e.deltaX) < 28) return;
    wheelLock = true;
    setTimeout(() => { wheelLock = false; }, 600);
    if (e.deltaY > 0 || e.deltaX > 0) next(); else prev();
  }, { passive: true });

  // Hash deep-link
  function readHash() {
    const start = parseInt((location.hash || "").replace("#", ""), 10);
    if (!isNaN(start)) {
      go(start - 1);
    } else {
      go(0);
    }
  }
  window.addEventListener("hashchange", readHash);
  readHash();
})();
