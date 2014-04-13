# not pinterested #

## What? ##

A Chrome / Chromium / Greasemonkey user script that blocks pins which contain user-defined keywords while browsing pinterest.com.

## Why? ##

Mecha is not pinterested in certain things so I made this for her.

## How? ##

1. Edit `not-pinterested.user.js` and tailor the blacklist to your liking.
2. For Chrome / Chromium go to `chrome://extensions`; for Greasemonkey go to *Manage User Scripts*.
3. Drag `not-pinterested.user.js` and drop it into the tab.
4. (optional) Repeat the previous steps to update the blacklist.

## Known issues ##

* The script works as of 2014-04-12. If Pinterest changes its API then it might stop working.
* The script is run after all the other JavaScript in pinterest.com is run, so it can't block any pins during the initial load.

## Agradecimientos ##

A Mecha que me re banca. <3

## License ##

This script is released under the [MIT License](http://opensource.org/licenses/MIT). Copyright (c) 2014 [marquete](https://github.com/marquete).
