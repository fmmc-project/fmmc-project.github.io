function copyBibtex() {
  var el = document.getElementById('bibtex-block');
  var btn = document.getElementById('copy-btn');
  if (!el || !btn) return;

  var text = el.textContent;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(function () {
      showCopied(btn);
    }).catch(function () {
      fallbackCopy(text, btn);
    });
  } else {
    fallbackCopy(text, btn);
  }
}

function fallbackCopy(text, btn) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  ta.style.top = '-9999px';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showCopied(btn);
  } catch (e) {}
  document.body.removeChild(ta);
}

function showCopied(btn) {
  btn.classList.add('copied');
  var label = btn.querySelector('.copy-label');
  if (label) label.textContent = 'Copied!';
  setTimeout(function () {
    btn.classList.remove('copied');
    if (label) label.textContent = 'Copy';
  }, 2000);
}
