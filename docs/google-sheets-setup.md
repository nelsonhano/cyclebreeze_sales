# Connect the application form to Google Sheets

The application form on the landing page sends each submission to a Google Sheet you own. This takes about 5 minutes, and you only do it once.

## 1. Create the sheet

1. Sign in to Google with the account that should own the applications (for example the CycleBreeze sales account).
2. Create a new Google Sheet. Name it something like `Growth Challenge Applications`.

You don't need to add any columns. The script creates the header row on the first submission, with one column per question.

## 2. Add the script

1. In the sheet, open **Extensions > Apps Script**.
2. Delete the sample code in `Code.gs`.
3. Paste in everything from [`google-apps-script/Code.gs`](../google-apps-script/Code.gs) in this repo.
4. Check the settings at the top:
   * `NOTIFY_EMAIL`: who gets an email for each new application. Set it to `''` to turn alerts off.
   * `DEADLINE`: submissions after this time are refused, even if someone keeps the page open.
5. Click **Save**.

## 3. Deploy it as a web app

1. Click **Deploy > New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   * **Execute as:** Me
   * **Who has access:** Anyone
4. Click **Deploy**, then **Authorize access**, and allow the permissions. Google may warn that the app is unverified. That's expected for your own script: click **Advanced**, then **Go to (project name)**.
5. Copy the **Web app URL**. It looks like `https://script.google.com/macros/s/AKfy.../exec`.

"Anyone" only means the landing page can send data to the script. Nobody can read the sheet unless you share it with them.

## 4. Paste the URL into the site

Open `src/content.js` and set the URL you copied:

```js
formEndpoint: 'https://script.google.com/macros/s/AKfy.../exec',
```

Then rebuild and deploy the site.

## 5. Test it

1. Open the web app URL in your browser. You should see `{"ok":true,"service":"CycleBreeze application form"}`.
2. Submit a test application from the landing page.
3. Check that a new row appears in the `Applications` tab and the alert email arrives.
4. Delete the test row before real applications come in.

## Good to know

* **Changing the script later:** after you edit `Code.gs`, choose **Deploy > Manage deployments**, edit the existing deployment, and pick **New version**. This keeps the same URL. If you choose **New deployment** instead, the URL changes and you need to update `src/content.js` again.
* **The Status column:** every row starts as `New`. You can use this column to track screening (for example Shortlisted or Declined).
* **Drafts:** applicants' answers are saved in their own browser while they work, so a refresh does not lose them. Nothing reaches the sheet until they submit.
* **Before the form is connected:** if `formEndpoint` is empty, the Submit button shows a message telling applicants the form isn't connected yet, and asks them to email sales@cyclebreeze.com.
