require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "Proxy",
      script: "./server/server.js",
      watch: ["server", "public"],
      env: {
        NODE_ENV: "development",
        COMMENTS_HOST: process.env.DEV_COMMENTS_HOST,
        COMMENTS_PORT: process.env.DEV_COMMENTS_PORT,
        PROJECTS_HOST: process.env.DEV_PROJECTS_HOST,
        PROJECTS_PORT: process.env.DEV_PROJECTS_PORT,
        PLEDGES_HOST: process.env.DEV_PLEDGES_HOST,
        PLEDGES_PORT: process.env.DEV_PLEDGES_PORT,
        RELATED_HOST: process.env.DEV_RELATED_HOST,
        RELATED_PORT: process.env.DEV_RELATED_PORT,
        PORT: process.env.DEV_PORT
      },
      env_production: {
        NODE_ENV: "production",
        COMMENTS_HOST: process.env.PROD_COMMENTS_HOST,
        COMMENTS_PORT: process.env.PROD_COMMENTS_PORT,
        PROJECTS_HOST: process.env.PROD_PROJECTS_HOST,
        PROJECTS_PORT: process.env.PROD_PROJECTS_PORT,
        PLEDGES_HOST: process.env.PROD_PLEDGES_HOST,
        PLEDGES_PORT: process.env.PROD_PLEDGES_PORT,
        RELATED_HOST: process.env.PROD_RELATED_HOST,
        RELATED_PORT: process.env.PROD_RELATED_PORT,
        PORT: process.env.PROD_PORT
      }
    }
  ],

  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-18-234-245-254.compute-1.amazonaws.com",
      port: "22",
      key: "~/.ssh/firstInstance.pem",
      ref: "origin/master",
      repo: "git@github.com:Michael-K-Oconnor/Mike-Proxy.git",
      path: "/home/ubuntu/Mike-Proxy",
      "post-deploy":
        "npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
};
