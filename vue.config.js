const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  configureWebpack: {
    externals: {
      sequelize: "require('sequelize')",
    },
  },

  transpileDependencies: ["quasar"],

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
    electronBuilder: {
      customFileProtocol: "./",
      externals: ["sequelize"],
      nodeIntegration: true,
      builderOptions: {
        extraResources: ["src/data.db"],
        productName: "Sistema",
        appId: "com.rfdouro.sistema",
        win: {
          target: ["nsis"],
          icon: "public/favicon.ico",
          requestedExecutionLevel: "requireAdministrator",
        },
        nsis: {
          installerIcon: "public/favicon.ico",
          uninstallerIcon: "public/favicon.ico",
          uninstallDisplayName: "CPU Monitor",
          //license: "license.txt",
          oneClick: false,
          allowToChangeInstallationDirectory: true,
        },
      },
    },
  },
});
