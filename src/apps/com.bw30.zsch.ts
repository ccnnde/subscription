import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bw30.zsch',
  name: '四川航空',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      rules: 'TextView[id="com.bw30.zsch:id/timer_text"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12882959',
        'https://i.gkd.li/import/12882967',
        'https://i.gkd.li/import/12882991',
      ],
    },
  ],
});
