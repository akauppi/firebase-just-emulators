# `firebase-just-emulators`

Exploration into the inner workings of Firebase Emulators.

These are normally delivered via the `firebase-tools` npm package, but this feels simply like a delivery mechanism to the author. Conceptually the Firebase CLI (which `firebase-tools` is about) and the Emulators are different.

This repo intends to find, whether the latter can be separated (and deployed separately) from the former.

Aims:

- [ ] Understand the packaging of Firebase Emulators
- [ ] Find ways to speed up particular emulators (takes *seconds* for things to warm up!!!)
- [ ] Ultimately, package and deploy **just** the Emulators, as a `Dockerfile`

