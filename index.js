const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/admin.reports.audit.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.error('Error loading client secret file', err);

  // Authorize a client with the loaded credentials, then call the
  // Reports API.
  authorize(JSON.parse(content), listLoginEvents);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
 function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oauth2Client = new google.auth.OAuth2(
      "905932822288-blu64bm3dqbocv9p6mvprl3a223aq632.apps.googleusercontent.com", "wlHm5W8ntHYHPJptQFunGGxW", "https://meet.google.com/");

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oauth2Client, callback);
    oauth2Client.credentials = JSON.parse(token);
    callback(oauth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oauth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.warn(`Token not stored to ${TOKEN_PATH}`, err);
    console.log(`Token stored to ${TOKEN_PATH}`);
  });
}

/**
 * Lists the last 10 login events for the domain.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listLoginEvents(auth) {
  const service = google.admin({version: 'reports_v1', auth});
  service.activities.list({
    userKey: 'all',
    applicationName: 'meet',
    maxResults: 10,
    
  }, (err, res) => {
    if (err) return console.error('The API returned an error:', err.message);

    const activities = res.data.items;
    if (activities.length) {
      console.log('Logins:');
      activities.forEach((activity) => {
        console.log(`${activity.id.time}: ${activity.actor.email} (${activity.events[0].name}) ${activity.events[0].parameters[15].name} ${activity.events[0].parameters[15].value}`);
      });
    } else {
      console.log('No logins found.');
    }
   });
}