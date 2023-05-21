mapboxgl.accessToken = 'pk.eyJ1IjoiYWxwdGVtLXRlY2gyIiwiYSI6ImNsZ3djaWFpMzBhbXUzcmxuZTlmbnBiNXEifQ.oPU-XZPiiqV-cuUoQJer0A';
const monument = [-77.0353, 38.8895];
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v11',
center: monument,
zoom: 9
});
 
async function getStores() {
  const res = await fetch('/api/v1/stores');
  const data = await res.json();
  const stores = data.data.map(store => {    
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      store.storeId);
      
      // create DOM element for the marker
      const el = document.createElement('div');
      el.id = 'marker';

      // create the marker
      new mapboxgl.Marker(el)
      .setLngLat([store.location.coordinates[0], store.location.coordinates[1]])
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);
  });
  return stores;
}
// // create the popup
// const popup = new mapboxgl.Popup({ offset: 25 }).setText(
// 'STORE: 0001'
// );
 
// // create DOM element for the marker
// const el = document.createElement('div');
// el.id = 'marker';
 
// // create the marker
// new mapboxgl.Marker(el)
// .setLngLat(monument)
// .setPopup(popup) // sets a popup on this marker
// .addTo(map);


getStores();