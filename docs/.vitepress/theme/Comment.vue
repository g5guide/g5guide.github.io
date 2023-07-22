<template>
    <ClientOnly>
        <div style="margin-top: 3rem; text-align: center;">
            <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                <img alt="크리에이티브 커먼즈 라이선스" style="display: inline-block; border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
            </a>
            <br />
            이 저작물은 <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">크리에이티브 커먼즈 저작자표시-동일조건변경허락 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다.
        </div>

        <div style="margin-top: 3rem;">
            <Giscus
                id="comments"
                repo="g5guide/g5guide.githu.io"
                repoId="R_kgDOJ55vGA"
                category="Comments"
                categoryId="DIC_kwDOJ55vGM4CX0n5"
                mapping="pathname"
                term=""
                strict="0"
                reactionsEnabled="1"
                emitMetadata="1"
                inputPosition="bottom"
                :theme="theme"
                lang="ko"
                loading="lazy"
            />
        </div>
    </ClientOnly>
</template>

<script setup>
import Giscus from '@giscus/vue';

defineProps({
    theme: String
})
</script>