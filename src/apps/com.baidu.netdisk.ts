import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: [
        'com.baidu.netdisk.ui.Navigate',
        'com.baidu.netdisk.ui.DefaultMainActivity',
        'com.baidu.netdisk.ui.MainActivity',
      ],
      rules: [
        {
          matches: 'TextView[text^="跳过"][clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12472597',
            'https://i.gkd.li/import/12877626',
            'https://i.gkd.li/import/12988458',
          ],
        },
        {
          matches: '@TextView[text^="跳过"] + TextView[text="广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12648924',
        },
        {
          matches: '[id="com.baidu.netdisk:id/countdown"][text^="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12706553',
            'https://gkd-kit.gitee.io/import/12865287',
          ],
        },
        '[id="com.byted.pangle:id/tt_splash_skip_btn"]', // 1687136781353
      ],
    },
    {
      key: 1,
      name: '活动弹窗',
      desc: '关闭各种活动弹窗信息',
      quickFind: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          matches: '[id="com.baidu.netdisk:id/iv_close"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642505',
            'https://gkd-kit.gitee.io/import/12923937',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '首页banner广告',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: '[id="com.baidu.netdisk:id/banner_item_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12706544',
    },
    {
      key: 3,
      name: '首页热门广告',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        '[id="com.baidu.netdisk:id/vf_content"] + [id="com.baidu.netdisk:id/close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12706544',
    },
    {
      key: 4,
      name: '我的页面-限时福利',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: '@TextView + [text="专属福利"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12706549',
    },
    {
      key: 5,
      name: '相册页面-激活无限空间弹窗',
      activityIds:
        'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog',
      rules:
        '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12648987',
    },
    {
      enable: false,
      key: 6,
      name: '更新提醒,通知权限',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: '[id="com.baidu.netdisk:id/dialog_button_cancel"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12863984',
        'https://gkd-kit.gitee.io/import/12923936',
      ],
    },
    {
      key: 7,
      name: '续费横幅提示',
      desc: '关闭续费横幅提示',
      quickFind: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          matches: 'View[desc="续费"] + ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12924036',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '看视频免费享极速下载弹窗',
      desc: '自动点击x按钮',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        'ViewGroup > [id="com.baidu.netdisk:id/background_image"] +n [id="com.baidu.netdisk:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12783106',
    },
  ],
});
