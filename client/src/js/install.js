const butInstall = document.getElementById('buttonInstall');
var savedPrompt; // Saves the event to be used later

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    savedPrompt = event;
});
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (savedPrompt) {
        savedPrompt.prompt();
      }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.alert('App installed');
});
