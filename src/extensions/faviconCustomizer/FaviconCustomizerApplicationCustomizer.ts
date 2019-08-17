import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

import * as strings from 'FaviconCustomizerApplicationCustomizerStrings';
import { IFaviconConfig } from './IFaviconConfig';

const LOG_SOURCE: string = 'FaviconCustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IFaviconCustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  favicons: IFaviconConfig[];
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class FaviconCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<IFaviconCustomizerApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    const { favicons } = this.properties;

    const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
    const rightNow: Date = new Date();
    const dateString = rightNow.getFullYear() + (rightNow.getMonth()+1) + rightNow.getDate() + rightNow.getHours() + rightNow.getMinutes()+ rightNow.getSeconds();

    favicons.forEach((favicon: IFaviconConfig) => {
      // inject the custom favicon link
      let customIcon: HTMLLinkElement = document.createElement("link");
      customIcon.href = favicon.href.indexOf('?') > 0 ? `${favicon.href}&v=${dateString}` : `${favicon.href}?v=${dateString}`;
      customIcon.rel = favicon.rel;
      if (favicon.type) {
        customIcon.type = favicon.type;
      }
      head.insertAdjacentElement("beforeEnd", customIcon);
    });

    return Promise.resolve();
  }
}
