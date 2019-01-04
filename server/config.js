require("dotenv").config();

let config = {};

if (process.env.NODE_ENV === "production") {
  config = {
    COMMENTS_HOST: process.env.PROD_COMMENTS_HOST,
    COMMENTS_PORT: process.env.PROD_COMMENTS_PORT,
    PROJECTS_HOST: process.env.PROD_PROJECTS_HOST,
    PROJECTS_PORT: process.env.PROD_PROJECTS_PORT,
    PLEDGES_HOST: process.env.PROD_PLEDGES_HOST,
    PLEDGES_PORT: process.env.PROD_PLEDGES_PORT,
    RELATED_HOST: process.env.PROD_RELATED_HOST,
    RELATED_PORT: process.env.PROD_RELATED_PORT,
    PORT: process.env.PROD_PROXY_PORT
  };
} else if (process.env.NODE_ENV === "test") {
  config = {
    COMMENTS_HOST: process.env.DEV_COMMENTS_HOST || "localhost",
    COMMENTS_PORT: process.env.DEV_COMMENTS_PORT || 3001,
    PROJECTS_HOST: process.env.DEV_PROJECTS_HOST || "localhost",
    PROJECTS_PORT: process.env.DEV_PROJECTS_PORT || 3002,
    PLEDGES_HOST: process.env.DEV_PLEDGES_HOST || "localhost",
    PLEDGES_PORT: process.env.DEV_PLEDGES_PORT || 3003,
    RELATED_HOST: process.env.DEV_RELATED_HOST || "localhost",
    RELATED_PORT: process.env.DEV_RELATED_PORT || 3004,
    PORT: process.env.DEV_PROXY_PORT || 3000
  };
} else {
  config = {
    COMMENTS_HOST: process.env.DEV_COMMENTS_HOST || "localhost",
    COMMENTS_PORT: process.env.DEV_COMMENTS_PORT || 3001,
    PROJECTS_HOST: process.env.DEV_PROJECTS_HOST || "localhost",
    PROJECTS_PORT: process.env.DEV_PROJECTS_PORT || 3002,
    PLEDGES_HOST: process.env.DEV_PLEDGES_HOST || "localhost",
    PLEDGES_PORT: process.env.DEV_PLEDGES_PORT || 3003,
    RELATED_HOST: process.env.DEV_RELATED_HOST || "localhost",
    RELATED_PORT: process.env.DEV_RELATED_PORT || 3004,
    PORT: process.env.DEV_PROXY_PORT || 3000
  };
}

module.exports = config;
