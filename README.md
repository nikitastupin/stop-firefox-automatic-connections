# stop-firefox-automatic-connections

To stop Firefox from making automatic connections just place `user.js` from this repository to your profile directory. To find out where profile directory located on your system please refer to [How do I find my profile?](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data#w_how-do-i-find-my-profile) article.

This is particularly useful for keeping Burp Suite proxy tab as clean as possible.

Please note that Firefox changes over time so we might need to make changes to `user.js` in the future. Issues and pull requests are welcome!

## Related work

- [all.js](https://dxr.mozilla.org/mozilla-central/source/modules/libpref/init/all.js)
- [Silencing Firefox’s Chattiness for Web App Testing](https://blog.secureideas.com/2018/10/silencing-firefoxs-chattiness-for-web-app-testing.html)
- [How to stop Firefox from making automatic connections](https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections)
- [Where are the about:config settings for a profile stored?](https://support.mozilla.org/bm/questions/965842)
