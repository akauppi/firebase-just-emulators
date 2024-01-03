#!/bin/env node

import client from "firebase-tools"

const data = await client.emulators
  .start({ project: "demo-1" })
