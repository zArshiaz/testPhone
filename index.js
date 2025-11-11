import { createRequire } from "module";
const require = createRequire(import.meta.url);
const player = require("play-sound")();
import open from "open";

const BOT_TOKEN = "8437775272:AAHCepVyenCQJ2NEvHMmGML0O9I29GvYA-c";
const CHAT_ID = "5934186312";
sendTelegram("کدت اجرا شد").catch((e) => console.error(e));

const min = 2;
async function sendTelegram(text) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: CHAT_ID,
    text,
    parse_mode: "HTML",
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

const headers = new Headers({
  "Content-Type": "application/json; charset=UTF-8",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjI5NjExNzg4Nzc2NTQzNTY2NjY0NzY4NTU2MTIxMSIsIklkIjoiMzQ4MjI2MjE1NTc3OTY5MjQ2NjcyMjQzMjkzMzY1Iiwicm9sZSI6Ik9UUFZhbGlkYXRlZCIsIm5iZiI6MTc2Mjg4MjkwNywiZXhwIjoxNzYyODkzNzA3LCJpYXQiOjE3NjI4ODI5MDd9.JBlV0XgWwHKYSlcgLY5snxdhttJUmTzG86S-Q80b5n4",
});

const bundles = [
  {
    name: "Simin",
    bundlesalessimid: "b3e351a2-980e-414f-b04a-f9467f4f4a9d",
    regex: /^999106/,
  },
  {
    name: "Borons",
    bundlesalessimid: "7ccd5a85-cb6e-46be-b3db-b398e6de85ba",
    regex: /^999169/,
  },
  {
    name: "Silver",
    bundlesalessimid: "4cf89d9e-3bbd-41f6-a3b9-f725e8d789f5",
    regex: /^999103/,
  },
  {
    name: "Gold",
    bundlesalessimid: "6d88df11-9a2d-4eb8-affa-335b1730dbc2",
    regex: /^999101/,
  },
  {
    name: "Plutonium",
    bundlesalessimid: "02414558-e7c9-4ea9-a68e-9ed47058141e",
    regex: /^999101/,
  },
];

const intervals = {};
let soundPlaying = false;

async function checkNumbers(bundle) {
  try {
    const response = await fetch(
      "https://services.negintel.com/api/newConnection/MSISDN/QueryMSISDNByBundleSalesSimId",
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          searchconfigmodel: {
            sort: "",
            filter: "*******",
            entriesperpage: 20,
            page: 0,
            totalrowcount: 0,
          },
          planid: 30306,
          bundlesalessimid: bundle.bundlesalessimid,
        }),
      }
    ).catch((e) => console.log(e.message));

    if (!response.ok) throw new Error(response);

    const result = await response.json();
    const phones = result?.Result?.map((d) => d.msisdn) || [];
    console.log(bundle.name, "--", phones, new Date().toTimeString());

    for (let phone of phones) {
      if (!bundle.regex.test(phone)) {
        console.log(`Match found (${bundle.name}):`, phone);
        sendTelegram(
          '<a href="https://simcardstore.aptel.ir/simstore/html/landing.html">بریم</a> بدو شماره جدید اومد'
        );
        open("https://simcardstore.aptel.ir/simstore/html/landing.html");
        player.play("sound/ok.mp3", (err) => {
          if (err) console.error("Sound error:", err);
        });
        if (intervals[bundle.name]) clearInterval(intervals[bundle.name]);
        return;
      }
    }
    console.log(`No match for ${bundle.name}`);
  } catch (err) {
    console.error(`Request failed for ${bundle.name}:`, err);
    sendTelegram("کدت خطا خورد").catch((e) => console.error(e));
    player.play("sound/err.mp3", (err) => {
      if (err) console.error(err);
    });
  }
}

bundles.forEach((bundle, index) => {
  setTimeout(() => checkNumbers(bundle), index * 3000);

  setTimeout(() => {
    setInterval(() => checkNumbers(bundle), min * 60 * 1000);
  }, index * 3000);
});
