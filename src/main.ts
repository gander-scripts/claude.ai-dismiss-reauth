const THROTTLE_MS = 1000;
let lastClick = 0;
let retry: number | undefined;

function dismiss(): void {
  const wait = lastClick + THROTTLE_MS - Date.now();
  if (wait > 0) {
    // too soon after the last click: look again once the throttle has passed
    retry ??= window.setTimeout(() => {
      retry = undefined;
      dismiss();
    }, wait);
    return;
  }

  for (const dialog of document.querySelectorAll('[role="alertdialog"]')) {
    if (!dialog.textContent?.includes('Sign in again')) continue;
    const button = [...dialog.querySelectorAll('button')].find(
      (b) => b.textContent?.trim() === 'Not now',
    );
    if (button) {
      lastClick = Date.now();
      button.click();
      return;
    }
  }
}

new MutationObserver(dismiss).observe(document.body, { childList: true, subtree: true });
dismiss();
