import { defineConfig } from 'vitepress';
import deepmerge from 'deepmerge';
import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import timeline from "vitepress-markdown-timeline";

let mergeConfig = {
    head: []
};

const links = [];

if (process.env.NODE_ENV === 'production') {
    mergeConfig.head = [
        [
            'meta',
            { name: 'google-site-verification', content: 'zxNvFXHnilnwtr39rTNOFwgfG4lsyDevcbXIcC0FZS0' }
        ],
        [
            'meta',
            { name: 'naver-site-verification', content: 'aa33e9f3d99e5091b736c3754f4c9fbbc905a0a7' }
        ],
        [
            'meta',
            { name: 'msvalidate.01', content: 'B4DA8C58849C0563FAE8F91A627C7500' }
        ],
        // [
        //     'script',
        //     { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-GNLLQFYG4H' }
        // ],
        // [
        //     'script',
        //     {},
        //     "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-GNLLQFYG4H');"
        // ]
    ]
} else {
    mergeConfig = {
        markdown: {
            lineNumbers: true,
        },
    }
}

export default defineConfig(deepmerge(mergeConfig, {
    lang: 'ko-KR',
    titleTemplate: ':title - 그누보드5 가이드',
    description: '사용자가 직접 만드는 그누보드 안내서 ',
    base: '/',
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'GNUBOARD 5 Guide',
        outline: [2, 4],
        sidebar: {
            '/gnuboard/': [
                {
                    text: '시작하기',
                    items: [
                        { text: '설치', link: '/gnuboard/install' },
                        { text: '초기 설정', link: '/gnuboard/config' },
                        { text: '테마 & 스킨', link: '/gnuboard/theme_skin' },
                        { text: '회원' },
                        { text: '포인트' },
                        { text: '짧은 주소' },
                    ]
                },
                {
                    text: '환경 설정',
                    items: [
                        { text: '기본 환경' },
                        { text: '관리 권한' },
                        { text: '테마' },
                        { text: '메뉴' },
                    ]
                },
                {
                    text: '운영 & 관리',
                    items: [
                        { text: '업데이트' },
                    ]
                },
            ],
            '/make/': [
                {
                    text: '테마 만들기',
                    items: [
                        { text: '개요', link: '/make/theme/about' },
                        { text: '테마 설정', link: '/make/theme/config' },
                        { text: '레이아웃', link: '/make/theme/layout' },
                        { text: '경로 및 URL', link: '/make/theme/path_and_url' },
                        { text: '메뉴 및 위젯', link: '/make/theme/widget' },
                    ],
                },
                {
                    text: '스킨 만들기',
                    collapsible: true,
                    items: [
                        { text: '게시판 스킨 (board)', link: '/make/skin/board' },
                        { text: '접속자 스킨 (connect)' },
                        { text: '페이지 스킨 (content)' },
                        { text: 'FAQ 스킨 (faq)' },
                        { text: '최신게시물 스킨 (latest)' },
                        { text: '회원 스킨 (member)' },
                        { text: '새글 스킨 (new)' },
                        { text: '아웃로그인 스킨 (outlogin)', link: '/make/skin/outlogin' },
                        { text: '설문조사 스킨 (poll)' },
                        { text: '인기검색어 스킨 (popular)' },
                        { text: 'Q&A 스킨 (qa)' },
                        { text: '전체검색 스킨 (search)' },
                        { text: '소셜로그인 스킨 (social)' },
                        { text: '접속자 스킨 (visit)' },
                    ],
                },
                {
                    text: '플러그인 만들기',
                    items: [
                        { text: '플러그인', link: '/developers/make_plugin' },
                    ],
                },
            ],
            '/developers/': [
                {
                    text: '일반',
                    items: [
                        { text: '라이프 사이클', link: '/developers/lifecycle' },
                        { text: '설정', link: '/developers/config' },
                        { text: 'Database', link: '/developers/database' },
                        { text: '경로 및 URL Rewrite', link: '/developers/path_and_url' },
                        { text: '쿠키 및 세션', link: '/developers/cookie_and_session' },
                        { text: 'JS & CSS (Assets)', link: '/developers/assets' },
                        { text: '캐시', link: '/developers/cache' },
                        { text: '디버깅', link: '/developers/debug' },
                        { text: '테스트', link: '/developers/test' },
                        { text: '헬퍼', link: '/developers/helpers' },
                    ]
                },
                {
                    text: '보안',
                    items: [
                        { text: '오염된 전역변수', link: '/developers/polluted_variables' },
                        { text: '파일 보안', link: '/developers/file_security' },
                        { text: 'SQL Injection', link: '/developers/sql_injection' },
                        { text: '토큰 및 암호화', link: '/developers/token_and_hash' },
                    ]
                },
                {
                    text: '확장하기',
                    items: [
                        { text: '플러그인', link: '/developers/make_plugin' },
                        { text: 'Hook', link: '/developers/hook' },
                        { text: '관리 메뉴', link: '/developers/admin_menu' },
                        { text: '테마', link: '/make/theme/about' },
                        { text: '스킨', link: '/make/skin' },
                    ]
                },
                {
                    text: '헬퍼',
                    items: [
                        { text: '문자열' },
                        { text: '경로 및 URL' },
                        { text: '쿠기 및 세션' },
                        { text: '데이터' },
                        { text: '토큰 및 암호화' },
                        { text: '' },
                        { text: '' },
                        { text: '' },
                        { text: '' },
                        { text: '' },
                    ]
                },
            ]
        },
        nav: [
            { text: '그누보드', link: '/gnuboard/install' },
            { text: '테마', link: '/make/theme/about' },
            { text: '스킨', link: '/make/skin' },
            { text: '개발자 가이드', link: '/developers/lifecycle' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/g5guide/g5guide.github.io' },
        ],
        editLink: {
            pattern: 'https://github.com/g5guide/g5guide.github.io/edit/main/docs/:path',
            text: '이 페이지 수정하기'
        },
        docFooter: {
            prev: '이전',
            next: '다음'
        },
        footer: {
            message: '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="크리에이티브 커먼즈 라이선스" style="display: inline-block;border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />이 저작물은 <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">크리에이티브 커먼즈 저작자표시-동일조건변경허락 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다.'
        },
    },
    transformHtml: (_, id, { pageData }) => {
        if (!/[\\/]404\.html$/.test(id))
            links.push({
                // you might need to change this if not using clean urls mode
                url: pageData.relativePath.replace(/\/index\.md$/, '/').replace(/\.md$/, '.html'),
                lastmod: pageData.lastUpdated
            })
    },
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin);
            md.use(timeline);
        }
    },
    buildEnd: async ({ outDir }) => {
        const sitemap = new SitemapStream({
            hostname: 'https://g5guide.github.io/'
        })
        const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
        sitemap.pipe(writeStream)
        links.forEach((link) => sitemap.write(link))
        sitemap.end()
        await new Promise((r) => writeStream.on('finish', r))
    }
}));
