const fs = require('fs')
const path = require('path')

process.env.KAWANIME_VERSION = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'))).version

/**
 * Taken from https://gist.github.com/kethinov/6658166#gistcomment-2389484
 *
 * Find all files inside a dir, recursively.
 * @function getAllFiles
 * @param  {string} dir Dir path string.
 * @return {string[]} Array with all file names that are inside the directory.
 */
const getAllFiles = (dir) =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name]
  }, [])

const VENDOR_PATH = path.join(__dirname, 'src', 'vendor')

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src', 'renderer'),
        'vendor': VENDOR_PATH
      }
    },
    entry: {
      app: './src/renderer/main.js'
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'KawAnime',
        productName: 'KawAnime',
        dmg: {
          contents: [
            {
              x: 150,
              y: 90
            },
            {
              x: 150,
              y: 275,
              type: 'link',
              path: '/Applications'
            }
          ]
        },
        linux: {
          category: 'Network'
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        fileAssociations: [
          {
            ext: 'torrent',
            name: 'Torrent files'
          }
        ],
        protocols: [{
          name: 'kawanime-app-external',
          schemes: [
            'kawanime-app'
          ]
        }]
      },
      chainWebpackMainProcess: (config) => {
        // Chain webpack config for electron main process only
        config
          .resolve
          .alias
          .set('vendor', VENDOR_PATH)
      },
      chainWebpackRendererProcess: (config) => {
        // Chain webpack config for electron renderer process only
        // The following example will set IS_ELECTRON to true in your app
        config.plugin('define').tap((args) => {
          args[0]['IS_ELECTRON'] = true
          return args
        })
      },
      // Use this to change the entrypoint of your app's main process
      mainProcessFile: 'src/main/index.js',
      // Provide an array of files that, when changed, will recompile the main process and restart Electron
      // Your main process file will be added by default
      mainProcessWatch: getAllFiles('src/main'),
      outputDir: 'dist'
    }
  }
}
