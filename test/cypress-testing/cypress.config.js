module.exports = {
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: "http://localhost:3000",
        backendUrl: "http://localhost:5000",
        chromeWebSecurity: false,
    },
};
