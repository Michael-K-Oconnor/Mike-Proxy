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
    COMMENTS_HOST: process.env.DEV_COMMENTS_HOST,
    COMMENTS_PORT: process.env.DEV_COMMENTS_PORT,
    PROJECTS_HOST: process.env.DEV_PROJECTS_HOST,
    PROJECTS_PORT: process.env.DEV_PROJECTS_PORT,
    PLEDGES_HOST: process.env.DEV_PLEDGES_HOST,
    PLEDGES_PORT: process.env.DEV_PLEDGES_PORT,
    RELATED_HOST: process.env.DEV_RELATED_HOST,
    RELATED_PORT: process.env.DEV_RELATED_PORT,
    PORT: process.env.DEV_PROXY_PORT
  };
} else {
  config = {
    COMMENTS_HOST: process.env.DEV_COMMENTS_HOST,
    COMMENTS_PORT: process.env.DEV_COMMENTS_PORT,
    PROJECTS_HOST: process.env.DEV_PROJECTS_HOST,
    PROJECTS_PORT: process.env.DEV_PROJECTS_PORT,
    PLEDGES_HOST: process.env.DEV_PLEDGES_HOST,
    PLEDGES_PORT: process.env.DEV_PLEDGES_PORT,
    RELATED_HOST: process.env.DEV_RELATED_HOST,
    RELATED_PORT: process.env.DEV_RELATED_PORT,
    PORT: process.env.DEV_PROXY_PORT
  };
}

module.exports = config;
