# WEB102 Prework - *Sea Monster*

Submitted by: **Kibru Menore**

**Sea Monster** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

* ✅ The introduction section explains the background of the company and how many games remain unfunded.
* ✅ The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* ✅ The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* ✅ The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.


## Video Walkthrough

Here's a walkthrough of implemented features:  https://imgur.com/a/XxtGMDL
<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

When I built the Sea Monster Crowdfunding app, I encountered a few challenges:

- When I parsed the JSON data, a single misplaced comma or quote in games.js would break JSON.parse, so I had to be meticulous about formatting.

- When I set up the initial render, I accidentally called addGamesToPage(GAMES_JSON) either too early or too late, and the game list never appeared until I fixed the call order.

- When I implemented filtering, I initially forgot to clear existing cards with deleteChildElements, which caused the filtered lists to stack and grow without bound.

- When I displayed large numbers, I omitted toLocaleString() (and the “$” prefix), so backer counts and dollar amounts looked raw (e.g., “1000000” instead of “1,000,000”).

- When I styled with Flexbox, getting the stats cards and game grid to wrap, align, and respond nicely on hover took several rounds of adjusting display: flex, flex-wrap, align-items, and box-shadow settings.

## License

    Copyright 2025 Kibru Menore

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
