import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "xixida",
	subtitle: "欢迎来到我的个人博客", // 这里可以改你的副标题
	lang: "zh_CN", // 已改为中文
	themeColor: {
		hue: 350, // 改为了粉紫色（更符合动漫风），喜欢蓝色可以改回 250
		fixed: false, 
	},
	banner: {
		enable: true, // 开启了顶部大图
		src: "https://api.dujin.org/bing/1366.php", // 使用了必应每日美图，每次打开都不同
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/qbqsja/fuwari", // 建议改为你自己的 GitHub 地址
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://q1.qlogo.cn/g?b=qq&nk=2040643421&s=640", // 你的 QQ 头像已上线
	name: "xixida", // 这里的名字显示在头像下方
	bio: "记录生活，分享快乐", // 你的个性签名
	links: [
		{
			name: "QQ",
			icon: "fa6-solid:message", // 换成了消息图标
			url: "tencent://message/?uin=2040643421", // 点击可以直接唤起 QQ 聊天
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/qbqsja", // 改为你自己的 GitHub 地址
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
