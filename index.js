import { createRequire } from "module";
const require = createRequire(import.meta.url);
const player = require("play-sound")();
import open from "open";

const min = 2;
let count = 0;
let token;
const captcha =
  "03AIIukzi82j6kHP4CFcC_MIbaoGWKdkj3Akd_acQBULo9pjPIltV1ewSmMsetwp2tWd3b9g1i7CYhU3vK0_7_QzCytARHPEVQrUQiqDaK1CO5nJ99XwmuLVTj1cq7mnw5Z9WZEFXVy__Vi_useYMNExNcpb-fk3jTTv-Tx7xdJWZepo6K0LLPPlujjs4GKXMJn39q4EDGJafJ-RMLg9QzVbEZaBJKeZEertRyrnqMR-cvxHtRtrLhGhHLYEq9P5sijxE9dtt7ecuBtPUr68uuQaNG8zxIK3Lw3JQEBYtwcyLlEyvpTLXaQvgK6JyyY_AKVK4HspDHMjZLmZQipMAF92mDipgtshqebWwbdxS1D99dDPBznA3QvsXIL1yZ97s37L9ZvWlygOekEr7bMCNHbsvBF_VlsGrnWTP2NcQbWNv2E-WQEGs1Jwx2zet-dAlEHXlNYw_AjlhNa_b0GHpY2ttfLFr9WJWtZfg1lTvZo4gkOCXOEIi01htol0cGyG19kXMTivBn3WcQ";
const BOT_TOKEN = "1981233539:9lTQs6eO-xC1lgRdj3Wb_69yN4riL23hyA4";
const CHAT_ID = "1038621242";
sendTelegram(`کد هر ${min} دقیقه یبار اجرا میشه `);

function createApiToken(captcha, bearerToken) {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Accept-Language", "en-US,en;q=0.9");
  if (bearerToken) myHeaders.append("Authorization", `Bearer ${bearerToken}`);
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Content-Type", "application/json; charset=UTF-8");

  const raw = JSON.stringify({ captcha });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://services.negintel.com/api/public/Security/CreateAPITokenBySession",
    requestOptions
  )
    .then((response) => response.json())
    .then((d) => d.Result.token)
    .catch((error) => {
      console.error("createApiToken error:", error);
      throw error;
    });
}

async function sendTelegram(text) {
  const url = `https://tapi.bale.ai/bot${BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: CHAT_ID,
    text,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!data.ok) throw new Error(`Telegram error: ${JSON.stringify(data)}`);
  return data;
}

async function refreshToken() {
  try {
    console.log("Refreshing API token...");
    const newToken = await createApiToken(captcha, "");
    if (newToken) {
      token = newToken;
      console.log("Token refreshed.");
    } else {
      console.warn("createApiToken returned falsy result.");
    }
  } catch (e) {
    console.error("Failed to refresh token:", e);
    try {
      await sendTelegram("خطا در ساخت توکن جدید");
    } catch (_) {}
  }
}

const bundles = [
  {
    name: "Simin2",
    bundlesalessimid: "b3e351a2-980e-414f-b04a-f9467f4f4a9d",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b3e351a2-980e-414f-b04a-f9467f4f4a9d&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "2******",
  },
  {
    name: "Simin3",
    bundlesalessimid: "b3e351a2-980e-414f-b04a-f9467f4f4a9d",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b3e351a2-980e-414f-b04a-f9467f4f4a9d&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "3******",
  },
  {
    name: "Simin4",
    bundlesalessimid: "b3e351a2-980e-414f-b04a-f9467f4f4a9d",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b3e351a2-980e-414f-b04a-f9467f4f4a9d&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "4******",
  },
  {
    name: "Simin5",
    bundlesalessimid: "b3e351a2-980e-414f-b04a-f9467f4f4a9d",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b3e351a2-980e-414f-b04a-f9467f4f4a9d&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "5******",
  },
  {
    name: "Simin6",
    bundlesalessimid: "b3e351a2-980e-414f-b04a-f9467f4f4a9d",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b3e351a2-980e-414f-b04a-f9467f4f4a9d&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "6******",
  },
  {
    name: "Simin7",
    bundlesalessimid: "b3e351a2-980e-414f-b04a-f9467f4f4a9d",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b3e351a2-980e-414f-b04a-f9467f4f4a9d&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "7******",
  },
  {
    name: "Simin8",
    bundlesalessimid: "b3e351a2-980e-414f-b04a-f9467f4f4a9d",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b3e351a2-980e-414f-b04a-f9467f4f4a9d&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "8******",
  },
  {
    name: "Simin9",
    bundlesalessimid: "b3e351a2-980e-414f-b04a-f9467f4f4a9d",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b3e351a2-980e-414f-b04a-f9467f4f4a9d&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "9******",
  },

  {
    name: "Borons2",
    bundlesalessimid: "7ccd5a85-cb6e-46be-b3db-b398e6de85ba",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=7ccd5a85-cb6e-46be-b3db-b398e6de85ba&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "2******",
  },
  {
    name: "Borons3",
    bundlesalessimid: "7ccd5a85-cb6e-46be-b3db-b398e6de85ba",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=7ccd5a85-cb6e-46be-b3db-b398e6de85ba&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "3******",
  },
  {
    name: "Borons4",
    bundlesalessimid: "7ccd5a85-cb6e-46be-b3db-b398e6de85ba",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=7ccd5a85-cb6e-46be-b3db-b398e6de85ba&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "4******",
  },
  {
    name: "Borons5",
    bundlesalessimid: "7ccd5a85-cb6e-46be-b3db-b398e6de85ba",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=7ccd5a85-cb6e-46be-b3db-b398e6de85ba&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "5******",
  },
  {
    name: "Borons6",
    bundlesalessimid: "7ccd5a85-cb6e-46be-b3db-b398e6de85ba",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=7ccd5a85-cb6e-46be-b3db-b398e6de85ba&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "6******",
  },
  {
    name: "Borons7",
    bundlesalessimid: "7ccd5a85-cb6e-46be-b3db-b398e6de85ba",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=7ccd5a85-cb6e-46be-b3db-b398e6de85ba&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "7******",
  },
  {
    name: "Borons8",
    bundlesalessimid: "7ccd5a85-cb6e-46be-b3db-b398e6de85ba",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=7ccd5a85-cb6e-46be-b3db-b398e6de85ba&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "8******",
  },
  {
    name: "Borons9",
    bundlesalessimid: "7ccd5a85-cb6e-46be-b3db-b398e6de85ba",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=7ccd5a85-cb6e-46be-b3db-b398e6de85ba&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "9******",
  },

  {
    name: "Silver2",
    bundlesalessimid: "4cf89d9e-3bbd-41f6-a3b9-f725e8d789f5",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=d6d535e7-71a8-469c-ad93-520c1dc4f8ec&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "2******",
  },
  {
    name: "Silver3",
    bundlesalessimid: "4cf89d9e-3bbd-41f6-a3b9-f725e8d789f5",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=d6d535e7-71a8-469c-ad93-520c1dc4f8ec&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "3******",
  },
  {
    name: "Silver4",
    bundlesalessimid: "4cf89d9e-3bbd-41f6-a3b9-f725e8d789f5",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=d6d535e7-71a8-469c-ad93-520c1dc4f8ec&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "4******",
  },
  {
    name: "Silver5",
    bundlesalessimid: "4cf89d9e-3bbd-41f6-a3b9-f725e8d789f5",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=d6d535e7-71a8-469c-ad93-520c1dc4f8ec&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "5******",
  },
  {
    name: "Silver6",
    bundlesalessimid: "4cf89d9e-3bbd-41f6-a3b9-f725e8d789f5",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=d6d535e7-71a8-469c-ad93-520c1dc4f8ec&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "6******",
  },
  {
    name: "Silver7",
    bundlesalessimid: "4cf89d9e-3bbd-41f6-a3b9-f725e8d789f5",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=d6d535e7-71a8-469c-ad93-520c1dc4f8ec&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "7******",
  },
  {
    name: "Silver8",
    bundlesalessimid: "4cf89d9e-3bbd-41f6-a3b9-f725e8d789f5",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=d6d535e7-71a8-469c-ad93-520c1dc4f8ec&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "8******",
  },
  {
    name: "Silver9",
    bundlesalessimid: "4cf89d9e-3bbd-41f6-a3b9-f725e8d789f5",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=d6d535e7-71a8-469c-ad93-520c1dc4f8ec&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "9******",
  },

  {
    name: "Gold2",
    bundlesalessimid: "6d88df11-9a2d-4eb8-affa-335b1730dbc2",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "2******",
  },
  {
    name: "Gold2",
    bundlesalessimid: "6d88df11-9a2d-4eb8-affa-335b1730dbc2",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "2******",
  },
  {
    name: "Gold3",
    bundlesalessimid: "6d88df11-9a2d-4eb8-affa-335b1730dbc2",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "3******",
  },
  {
    name: "Gold4",
    bundlesalessimid: "6d88df11-9a2d-4eb8-affa-335b1730dbc2",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "4******",
  },
  {
    name: "Gold5",
    bundlesalessimid: "6d88df11-9a2d-4eb8-affa-335b1730dbc2",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "5******",
  },
  {
    name: "Gold6",
    bundlesalessimid: "6d88df11-9a2d-4eb8-affa-335b1730dbc2",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "6******",
  },
  {
    name: "Gold7",
    bundlesalessimid: "6d88df11-9a2d-4eb8-affa-335b1730dbc2",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "7******",
  },
  {
    name: "Gold8",
    bundlesalessimid: "6d88df11-9a2d-4eb8-affa-335b1730dbc2",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "8******",
  },
  {
    name: "Gold9",
    bundlesalessimid: "6d88df11-9a2d-4eb8-affa-335b1730dbc2",
    href: "https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "9******",
  },

  {
    name: "Plutonium2",
    bundlesalessimid: "02414558-e7c9-4ea9-a68e-9ed47058141e",
    href: "href:'https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "2******",
  },
  {
    name: "Plutonium3",
    bundlesalessimid: "02414558-e7c9-4ea9-a68e-9ed47058141e",
    href: "href:'https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "3******",
  },
  {
    name: "Plutonium4",
    bundlesalessimid: "02414558-e7c9-4ea9-a68e-9ed47058141e",
    href: "href:'https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "4******",
  },
  {
    name: "Plutonium5",
    bundlesalessimid: "02414558-e7c9-4ea9-a68e-9ed47058141e",
    href: "href:'https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "5******",
  },
  {
    name: "Plutonium6",
    bundlesalessimid: "02414558-e7c9-4ea9-a68e-9ed47058141e",
    href: "href:'https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "6******",
  },
  {
    name: "Plutonium7",
    bundlesalessimid: "02414558-e7c9-4ea9-a68e-9ed47058141e",
    href: "href:'https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "7******",
  },
  {
    name: "Plutonium8",
    bundlesalessimid: "02414558-e7c9-4ea9-a68e-9ed47058141e",
    href: "href:'https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "8******",
  },
  {
    name: "Plutonium9",
    bundlesalessimid: "02414558-e7c9-4ea9-a68e-9ed47058141e",
    href: "href:'https://simcardstore.aptel.ir/simstore/html/select-number.html?bundleid=b7dc1e3b-7893-4baf-b230-65a9c2ecde03&gift=1af1947c-bfc4-45a9-8769-b93a65e9a51b",
    filter: "9******",
  },
];

const intervals = {};
let soundPlaying = false;

async function checkNumbers(bundle) {
  count += 1;

  async function attemptFetch(allowRetry = true) {
    try {
      const headers = {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token || ""}`,
      };

      const response = await fetch(
        "https://services.negintel.com/api/newConnection/MSISDN/QueryMSISDNByBundleSalesSimId",
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            searchconfigmodel: {
              sort: "",
              filter: bundle.filter,
              entriesperpage: 20,
              page: 0,
              totalrowcount: 0,
            },
            planid: 30306,
            bundlesalessimid: bundle.bundlesalessimid,
          }),
        }
      );

      if (!response.ok) {
        const statusText = `${response.status} ${response.statusText}`;
        throw new Error(`HTTP ${statusText}`);
      }

      const result = await response.json();
      const phones = result?.Result?.map((d) => d.msisdn) || [];

      if (phones.length > 0) {
        console.log(`Match found (${bundle.name}):`, phones);
        sendTelegram(
          `تو بخش ${bundle.name} شماره جدید اومد ${
            bundle.href
          }    ${phones.join("_")}`
        ).catch((e) => console.error(e));
        open(bundle.href);
        player.play("sound/ok.mp3", (err) => {
          if (err) console.error("Sound error:", err);
        });
        if (intervals[bundle.name]) {
          clearInterval(intervals[bundle.name]);
          sendTelegram(`اینترول ${bundle.name} حذف شد`);
        }
        return;
      }

      console.log(`No match for ${bundle.name}__`, count);
    } catch (err) {
      console.error(`Request failed for ${bundle.name}:`, err);

      if (!allowRetry) {
        player.play("sound/err.mp3", (e) => {
          if (e) console.error("Sound error:", e);
        });
        await sendTelegram("کدت خطا خورد");
      }

      if (allowRetry) {
        await refreshToken();
        return attemptFetch();
      }
    }
  }

  await attemptFetch(true);
}

async function init() {
  try {
    token = await createApiToken(captcha, "");
    console.log("Initial token acquired.");
  } catch (e) {
    console.error("Initial token acquisition failed:", e);
  }

  bundles.forEach((bundle, index) => {
    setTimeout(() => checkNumbers(bundle), index * 2000);

    setTimeout(() => {
      intervals[bundle.name] = setInterval(
        () => checkNumbers(bundle),
        min * 60 * 1000
      );
    }, index * 2000);
  });

}

init();
