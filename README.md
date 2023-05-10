<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better please fork the repo and create a pull request or simple open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<p align="center"><h3 align="center">LANTERN</h3>

  <p align="center">
    A Vue collection of component with TailwindCSS
    <br />
    ·
    <a href="https://github.com/pharos-lab/lantern/issues">Report Bug</a>
    ·
    <a href="https://github.com/pharos-lab/lantern/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#Table-of-Contents)
- [About The Project](#About-The-Project)
- [Getting Started](#Getting-Started)
  - [Prerequisites](#Prerequisites)
  - [Installation](#Installation)
- [Usage](#Usage)
  - [Examples](#Examples)
- [Contributing](#Contributing)
- [License](#License)
- [Contact](#Contact)

## About The Project

![DEMO PHOTO]()

Lantern is a library of components written with Vue 3 and TailwindCSS. It provide 80+ components, from basics to complex layouts, all responsive for easily build your application.

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Install NPM packages

```sh
npm install @pharos-lab/lantern
```

<!-- USAGE EXAMPLES -->

## Usage

To use **Lantern**, just import the plugin from the package and tell vue to use it!

```javascript

// main.js

import { createApp } from 'vue';
import { lantern } from '@pharos-lab/lantern'
// import tailwind styles
import '@pharos-lab/lantern/dist/styles.css'

import App from './App.vue';

const application = createApp(app);

application.use(lantern);
application.mount('#app');
```

> Note: Since **Lantern** is written with tailwind, don't forget to import the `styles.css` css file !

Now You can use all the features of **Lantern**!

### Examples

```javascript
<script setup>
// your JavaScript code ...

</script>

<template>
  // your code ...

  <NameOfComponent>
    // Slots if the component needed it
  </NameOfComponent>
</template>
```

The **Lantern** plugin made the registration of all components so you don't have to import them and can start using them directly.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License.

<!-- CONTACT -->

## Contact

pharos-lab - [@pharos-lab](https://twitter.com/pharos-lab) - pharos-lab@gmail.com

Project Link: [https://github.com/pharos-lab/lantern](https://github.com/pharos-lab/lantern)
