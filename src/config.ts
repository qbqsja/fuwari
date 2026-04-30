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
	themeColor: {
		hue: 350, // 粉紫色系，非常适合二次元主题
		fixed: false, 
	},
	banner: {
		enable: true, 
		// 这里帮你换成了高清随机动漫壁纸 API，每次刷新都有惊喜
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
	favicon: [],
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
	// 你的 QQ 头像
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
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
