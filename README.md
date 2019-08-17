# react-application-favicon

## Summary

This sample shows how to customize a favicon for a SharePoint site. It was in response to [Ashwane Singh](https://twitter.com/ashucool_2009?s=17)'s request via Twitter.


> **Note**: This code is provided as a sample only. Keep in mind that Microsoft may change page elements (including favicons) any time and may affect how this extension behaves. It is preferrable to use well-known HTML element placeholders.

## Used SharePoint Framework Version

![SPFx v1.9.1](https://img.shields.io/badge/SPFx-1.9.1-green.svg)

## Applies to

* [SharePoint Framework Extensions](https://dev.office.com/sharepoint/docs/spfx/extensions/overview-extensions)
* [Office 365 developer tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)

## Solution

Solution|Author(s)
--------|---------
react-application-favicon|Hugo Bernier ([Tahoe Ninjas](http://tahoeninjas.blog), @bernierh)

## Version history

Version|Date|Comments
-------|----|--------
1.0.0|16 August, 2019|Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

### Prepare the favicon(s)

1. Upload the favicon of your choice to a known location. For example, you can place it in the site's `Site Assets` library
2. You can specify different favicons for different devices. Please refer to the [Wikipedia page on favicons](https://en.wikipedia.org/wiki/Favicon) for information about specifying different favicons for different devices.

### Build the solution

1. Clone repo
2. Ryn `npm install`
3. Run `gulp bundle --ship`
4. Run `gulp package-solution --ship`

### Manual deployment

1. Upload the `react-application-favicon.sppkg` from the `sharepoint` folder to your App catalog.
2. When prompted to deploy to all sites, choose the option that suits your needs.

## Specifying the favicons

### To debug

To test this extension in debug, follow these steps:

1. Locate the `serve.json` file in the `config` folder.
2. Change the `pageUrl` value to point to a valid page on your tenant.
3. Update the `favicons` property to include as many custom favicons as you wish. For every `favicon`, you must define a `rel` and `href` value. You can also specify a `type` property. For example, you can apply the majority of standard favicon definitions (as per Wikipedia) by using this JSON:

```JSON
"favicons": [
              {
                "rel": "shortcut icon",
                "href": "https://example.com/myicon.ico"
              },
              {
                "rel": "icon",
                "type": "image/vnd.microsoft.icon",
                "href": "https://example.com/image.ico"
              },
              {
                "rel": "icon",
                "type": "image/x-icon",
                "href": "https://example.com/image.ico"
              },
              {
                "rel": "icon",
                "href": "https://example.com/image.ico"
              },
              {
                "rel": "icon",
                "type": "image/gif",
                "href": "https://example.com/image.gif"
              },
              {
                "rel": "icon",
                "type": "image/png",
                "href": "https://example.com/image.png"
              },
              {
                "rel": "icon",
                "type": "image/svg+xml",
                "href": "https://example.com/image.svg"
              }
            ]
```

4. Run `gulp serve` to debug your extension.

### In the solution

This approach will change the favicon(s) in the solution so that it will automatically load them when the extension is deployed.

Note that if you intend to deploy this extension tenant-wide, your favicon `href` should be an absolute URL or a server-relative URL.

1. Locate the `elements.xml` file, in the `sharepoint` > `assets` folder
2. Change the `ClientSideComponentProperties` to specify a `favicons` configuration as an array of favicons. Each favicon requires a `rel` and a `href` property.
3. Run `gulp bundle --ship`
4. Run `gulp package-solution --ship`
5. Upload the `react-application-favicon.sppkg` from the `sharepoint` folder to your App catalog.
6. When prompted to deploy to all sites, choose the option that suits your needs.

## Features

Sample SharePoint Framework Application Customiser which customizes the favicon for a site.

This sample illustrates the following concepts on top of the SharePoint Framework:

* HTML manipulation
