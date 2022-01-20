#!/usr/bin/env node
import fetch from "node-fetch";

const lark_notify = async (webhookUrl, msg) => {
  const data = {
    msg_type: "text",
    content: {
      text: msg
    }
  }
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

const main = () => {
  if (process.argv.length <= 3) {
    console.log("Usage: lark-notify <webhookUrl> <message>");
    return;
  }

  const webhookUrl = process.argv[2];
  const msg = process.argv.slice(3).join(" ");
  lark_notify(webhookUrl, msg).then(res => {
    console.log(res);
  })
}

main()

