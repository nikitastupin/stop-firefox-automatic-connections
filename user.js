user_pref("extensions.blocklist.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");

user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", false);

user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

// Disable geolocation services
user_pref("browser.search.geoip.url", "");
user_pref("browser.region.network.url", "");

user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("extensions.getAddons.cache.enabled", false);

user_pref("app.normandy.enabled", false);

user_pref("media.gmp-gmpopenh264.enabled", false);

// http://detectportal.firefox.com/success.txt
user_pref("network.captive-portal-service.enabled", false);
// http://detectportal.firefox.com/success.txt?ipv4
// http://detectportal.firefox.com/success.txt?ipv6
user_pref("network.connectivity-service.enabled", false);

user_pref("dom.push.connection.enabled", false);

user_pref("browser.search.suggest.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

// https://gist.github.com/gamunu/7fbee4e2318fdc080395a7f74cc34fe9
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.server", "");

// versioncheck-bg.addons.mozilla.org
user_pref("extensions.update.enabled", false);
user_pref("services.sync.prefs.sync.extensions.update.enabled", false);

// Experimental, may break things!
// https://firefox.settings.services.mozilla.com/v1/
// https://firefox-settings-attachments.cdn.mozilla.net/main-workspace/ms-language-packs/237f78a1-ebf2-45d9-9e22-fef13784019b.ftl
user_pref("services.settings.server", "");

// Disable automatic updates. How to update Firefox manually https://support.mozilla.org/en-US/kb/update-firefox-latest-release
// user_pref("app.update.auto", false);
// Another option is to check for updates less often
// user_pref("app.update.interval", 604800);

// Can't stop or don't want to stop these so just don't send to proxy:
//   - aus5.mozilla.org - update request
//   - content-signature-2.cdn.mozilla.net/chains/remote-settings.content-signature.mozilla.org-2020-11-04-15-03-37.chain - unknown
user_pref("network.proxy.no_proxies_on", "aus5.mozilla.org,content-signature-2.cdn.mozilla.net");
user_pref("network.proxy.allow_hijacking_localhost", true);