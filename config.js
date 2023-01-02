module.exports = {
  // Config
  appName: "Test",
  appVersion: "v.1.0.0",
  appInviteUrl: "https://reg.v2.nego-dev.com",
  appDatabaseName: "nego.db",
  appServerLocation: "France",
  appCommands: [
    {"name": "Help", "usage": "/help", "description": "Show Help Menu"},
    {"name": "ban", "usage": "/ban", "description": "Ban Members"}
  ],
  api: {
    host: "localhost", 
    port: "80",
    pingRouter: "/experiments/ping"
  }
}