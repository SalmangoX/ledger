# 📒 月账本

一个装在手机主屏幕上的个人记账网页 App：按月记录收支和资产，按季度、按年查看统计，并长期追踪「独秀指数」。

**在线使用：** https://salmangox.github.io/ledger/

> 当前为测试版（0.x），功能和数据格式仍可能调整。

---

## 功能

**两种记账方式**
- **月账本**：每月填一次总数，包括收入、支出、能力收入、月底存款和月底欠款。
- **单笔账本**：逐笔记录收支，支持单笔或批量录入、自定义分类、日期和备注，并会自动汇总到月账本。

**统计**
- 按月、按季度、按年查看结余、储蓄率和净资产。
- 显示本季度至今、今年至今的累计数据。
- 对比上月和去年同月。

**独秀指数**
- 记录每个月的独秀指数，配有可左右滑动的长期走势图和年度明细表。

**多账本**
- 可以新建多个账本并自定义名称，各账本的数据互不影响。

**个性签名**
- 横屏手写板，带钢笔笔锋效果，可调节粗细和笔锋。
- 签名显示在首页卡片右上角，可以保存为方案，一键套用到所有账本。

**输入体验**
- App 自带数字键盘，支持从剪贴板粘贴金额，下滑即可收起。
- 日期和月份用表格或滚轮选择。

**界面**
- 支持浅色、深色、跟随系统三种外观。
- 支持简体中文、繁體中文、English、日本語。

**离线与安装**
- 安装到主屏幕后，没有网络也能正常使用。

## 独秀指数

```
独秀指数 = 能力收入（月）÷ 理想生活成本（月）
```

- **能力收入**：靠自己能力挣到的收入，比如工资、兼职、副业。家里给的生活费等可以不计入。
- **理想生活成本**：过上自己想要的生活，每个月需要多少钱。目标变了可以随时修改，新数字从生效月份起计算，之前月份的指数不受影响。
- 指数 ≥ 1 表示靠自己的能力已经能支撑理想生活。

概念来自 YouTube 创作者陈一枝的视频。

## 安装到主屏幕

在 App 菜单里点「安装到主屏幕」：

| 系统 / 浏览器 | 方式 |
|---|---|
| 安卓 Chrome / Edge、电脑 Chrome / Edge | 点按钮后在系统弹窗里确认「安装」 |
| iPhone / iPad（Safari、Chrome） | 按 App 里的图文引导：分享 → 添加到主屏幕 |
| Mac Safari | 菜单栏「文件」→「添加到程序坞」 |

装好后请从主屏幕图标打开。从桌面图标打开和在浏览器标签页里打开，数据是分开保存的。

## 数据与隐私

- 所有数据默认**只保存在你自己的设备上**，没有服务器，也不收集任何信息。
- 菜单 →「导出备份」可以把所有账本导出成一个文件，换手机或清理浏览器数据前请先备份。
- 本仓库是公开的，但公开的只有程序代码，**不包含任何人的记账数据**。

## 多设备同步（可选）

数据会先用你设置的**同步密码加密**，再存进你自己 GitHub 账号下的私密 Gist。不知道密码的人，包括 GitHub，都看不到内容。

1. 打开 https://github.com/settings/tokens/new?scopes=gist&description=月账本同步 ，期限选 **No expiration**，只勾 **gist**，生成后复制令牌。
2. 在 App 菜单里点「多设备同步」，填入令牌，并设一个同步密码。
3. 在其他设备上填**同一个令牌和同一个密码**。

同步密码一旦忘记，云端数据就无法解密，但各设备本地的数据不受影响。

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 整个 App（界面、逻辑、样式、多语言） |
| `sw.js` | 离线缓存 |
| `manifest.webmanifest` | 安装到主屏幕所需的信息 |
| `icon-192.png`、`icon-512.png`、`apple-touch-icon.png` | 图标 |

## 更新方法

1. 用新版本的文件覆盖仓库里的旧文件（**Add file → Upload files → Commit changes**）。
2. 等一两分钟，GitHub Pages 会自动部署。
3. 手机联网后，把 App 完全关掉再重新打开，就会换成新版。

你可以在菜单最下方查看当前版本号。

---

## English

**Monthly Ledger** is an offline-first personal finance web app (PWA). It tracks monthly income, expenses and net worth, shows quarterly and yearly summaries, and charts the **Duxiu Index** (earned income ÷ ideal monthly cost of living) over time.

- Two modes: monthly totals, or individual entries that roll up automatically.
- Multiple ledgers, handwritten signatures, a built-in number pad, and light/dark themes.
- Available in Simplified Chinese, Traditional Chinese, English and Japanese.
- Data stays on your device. Optional encrypted sync uses a secret Gist in your own GitHub account.
- Install from the in-app menu: **Install app**.
