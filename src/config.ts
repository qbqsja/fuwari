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
	subtitle: "欢迎来到我的博客", 
	lang: "zh_CN", 
	// 确认是你的新域名
	url: "https://www.758455.xyz", 
	themeColor: {
		hue: 350, 
		fixed: false, 
	},
	banner: {
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
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true, // 如果你想彻底隐藏那个带链接的卡片，把这里改成 false
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
