const self = this;

this.addEventListener('fetch', event => {
  // lol
});

self.addEventListener('push', e => {
  const data = e.data.json();
  const { title, body, icon } = data;

  const options = {
    body,
    icon,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    }
  };
  e.waitUntil(self.registration.showNotification(title, options));
});
