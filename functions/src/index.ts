import * as functions from "firebase-functions";

export const syncGitHubData = functions.https.onCall(async (payload) => {
    const url = payload.github.split('github.com')[1]
    const data = await (await fetch(`https://raw.githubusercontent.com/${url}/main/README.md`)).text()
    const transformedData = {
        readme: data,
        ...payload
    }
    return transformedData;
  });