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
	subtitle: "欢迎来到我的博客", // 副标题
	lang: "zh_CN", 
	// 1. 这里填入你自己的网址，解决版权声明里的链接问题 👇
	url: "https://www.758455.xyz/", 
	themeColor: {
		hue: 350, // 粉紫色系
		fixed: false, 
	},
	banner: {
		// 2. 如果你想彻底关掉博客顶部的大图，把这里改为 false
		enable: true, 
		src: "https://api.paugram.com/wallpaper/", 
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
	// 3. 建议至少留一个默认图标，否则浏览器标签页是空白的
	favicon: [
		{
			src: '/favicon/icon.png',
			theme: 'light',
			sizes: '32x32',
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/qbqsja/fuwari", 
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://q1.qlogo.cn/g?b=qq&nk=2040643421&s=640", 
	name: "xixida", 
	bio: "如果你在看我，那我们就已经是好朋友了 (๑•̀ㅂ•́)و✧", 
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/qbqsja", 
		},
		// 你也可以在这里加上你的 QQ 链接，方便别人找你
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
