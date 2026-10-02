// ============================================================
//  Rawayi Monthly Tracker — settings
//  The only line you MUST change is API_URL.
// ============================================================
window.RAWAYI_CONFIG = {
  // Web app URL of the Monthly Tracker's Apps Script (ends in /exec)
  API_URL: 'https://script.google.com/macros/s/AKfycbz9rIbxnK8w0vh9GDaqdRlNQdJLxJXu4Z2-Hwb9kZokOZFZxEJSVGF5wue51ZMajYEyfA/exec',
  PICKUP_STUCK_DAYS: 3,
  TRANSIT_STUCK_DAYS: 7,
  AUTO_REFRESH_MINUTES: 15,   // the app re-reads the sheet this often; the sheet itself updates hourly
};
