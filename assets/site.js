(() => {
  const printButton = document.querySelector('[data-print]');
  if (printButton) printButton.addEventListener('click', () => window.print());

  const copyButton = document.querySelector('[data-copy-link]');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        const original = copyButton.textContent;
        copyButton.textContent = 'Link copied';
        setTimeout(() => { copyButton.textContent = original; }, 1800);
      } catch {
        window.prompt('Copy this page link:', window.location.href);
      }
    });
  }

  const navLinks = [...document.querySelectorAll('.side-nav a[href^="#"]')];
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach(section => observer.observe(section));
  }

  const searchInput = document.querySelector('[data-sop-search]');
  const resultCount = document.querySelector('[data-search-count]');
  if (searchInput) {
    const searchable = [...document.querySelectorAll('[data-searchable]')];
    const originalHTML = searchable.map(el => el.innerHTML);

    const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim();
      searchable.forEach((el, index) => { el.innerHTML = originalHTML[index]; });
      if (!query) {
        if (resultCount) resultCount.textContent = '';
        return;
      }
      const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
      let matches = 0;
      searchable.forEach(el => {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
          acceptNode(node) {
            if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            if (node.parentElement.closest('script, style, mark')) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          }
        });
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(node => {
          const text = node.nodeValue;
          if (!regex.test(text)) return;
          regex.lastIndex = 0;
          const fragment = document.createDocumentFragment();
          let last = 0;
          text.replace(regex, (match, _group, offset) => {
            fragment.append(text.slice(last, offset));
            const mark = document.createElement('mark');
            mark.textContent = match;
            fragment.append(mark);
            last = offset + match.length;
            matches += 1;
            return match;
          });
          fragment.append(text.slice(last));
          node.replaceWith(fragment);
          regex.lastIndex = 0;
        });
      });
      if (resultCount) resultCount.textContent = `${matches} match${matches === 1 ? '' : 'es'} found`;
      const first = document.querySelector('mark');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
})();
