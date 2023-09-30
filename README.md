# Electron Starter

This is a starter Electron application that is great for beginners who want to get started with Electron development. It includes the following features:

- Improved security codes
- Ready IPC communication setup
- Material Icons library
- Bulma.css framework


## Screenshots
Here are some screenshots of the Data Synchronizer:

<br/>
<p align="center"><img src="https://raw.githubusercontent.com/erman999/Electron-Starter/master/screenshots/renderer.jpg" width="600"></p>

<p align="center"><img src="https://raw.githubusercontent.com/erman999/Electron-Starter/master/screenshots/main.jpg" width="600"></p>
<br/>

## Getting Started

To get started with this application, simply clone the repository and run the following commands:

```bash
git clone https://github.com/erman999/Electron-Starter.git
cd Electron-Starter
npm install
npm start
```

This will install all the necessary dependencies and start the application.

## Features

### Improved Security Codes

This application includes improved security codes to help keep your application secure.
In `main.js` file check for `nodeIntegration` and `contextIsolation` properties.
Search these settings for better understanding about Electron security.

### Ready IPC Communication Setup

The application also includes a ready IPC communication setup, which makes it easy to communicate between the main process and the renderer process.
Check `channels` in `main.js`, `preload.js` and `renderer.js` these communication technique will lead you to use correct way of understanding IPC communication.

### Material Icons Library

The Material Icons library is included in this application, which makes it easy to add icons to your application.
Check `<span class="material-symbols-rounded">navigate_next</span>` usage in `index.html`.
Go to [Material Icons](https://fonts.google.com/icons) page for more icons.

### Bulma.css Framework

The Bulma.css framework is also included in this application, which provides a great starting point for building responsive and modern user interfaces.

## Contributing

If you find any issues with this application or would like to contribute, please feel free to submit a pull request or open an issue.

## License

This application is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

This application was inspired by [electron-quick-start](https://github.com/electron/electron-quick-start).
