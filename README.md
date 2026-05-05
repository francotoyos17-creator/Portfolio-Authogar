{
  "name": "portfolio-monitor",
  "version": "1.0.0",
  "description": "Portfolio Monitor con autenticación - Casimiro Felix Toyos e Hijos S.A.",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "generate-hash": "node generate-hash.js"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "express": "^4.18.2",
    "express-session": "^1.17.3"
  }
}
