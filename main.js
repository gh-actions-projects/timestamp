const core = require("@actions/core");
const exec = require("@actions/exec");
const github = require("@actions/github");

const moment = require("moment-timezone");
const IST = moment.tz("Asia/Kolkata");

async function run() {
  core.setOutput("date", IST.format("DD-MM-YYYY"));
  core.setOutput("time", IST.format("HH.mm.ss.a"));
  core.setOutput("tz", IST.tz());
}

run();
