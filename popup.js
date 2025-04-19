document.getElementById("setCookie").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const name = document.getElementById("cookieName").value;
  const value = document.getElementById("cookieValue").value;

  const url = new URL(tab.url);

  chrome.cookies.set({
    url: url.origin,
    name: name,
    value: value
  }, (cookie) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log("Cookie set:", cookie);
    }
  });
});
