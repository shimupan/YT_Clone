<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/shimupan">
    <img src="./src/public/Youtube_logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">YouTube Clone</h3>

  <p align="center">
    Responsive YouTube Clone that allows you to search and watch YouTube videos!
    <br />
    <a href="https://yt-clone-jade.vercel.app/">Visit the live Project here!</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot1]](https://example.com)
[![Product Name Screen Shot][product-screenshot2]](https://example.com)

Fully working YouTube clone that allows you to search and watch YouTube videos.
<br/>
Displays video information, channel information, and is mobile friendly.
<br/><br/>
<a href="https://yt-clone-jade.vercel.app/">Visit the live Project here!</a> (If the page isn't loading it is due to the API limit)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.png?v=101)](https://www.typescriptlang.org/)
* Material UI


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure you have npm installed
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free YouTube v3 API Key [here](https://rapidapi.com/ytdlfree/api/youtube-v31)
2. Clone the repo
   ```sh
   git clone https://github.com/shimupan/YT_Clone.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Make a `config.ts` file in the root of the repository and replace the bottom with your API code
   ```ts
   const config = {
        YT3_API_KEY: "YOUR_API_KEY"
   }
   export default config;
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
<div>
  <img src="./public/mobile_view.png">
  <<< Mobile View
</div>
<br/>
<div>
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWwxcXZ6NGZ3MTBldGR6OHplYnF2dWVsNm02MzNzenNiOXYzMHR3YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dc1g6pks5CZEsYsvyy/giphy.gif"/>
</div>

Full Functionality of the Site

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.



<!-- CONTACT -->
## Contact

Shimu Pan - shimu.pan0@gmail.com

Project Link: [https://github.com/shimupan/YT_Clone](https://github.com/shimupan/YT_Clone)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/shimupan/
[product-screenshot1]: public/home_screen.png
[product-screenshot2]: public/video_playing.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 