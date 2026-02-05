<script setup>
import { ref, onMounted } from 'vue'

const version = ref('Loading...')
const releaseUrl = ref('https://gitee.com/xxk0723/GS.OmniWareMatrix/releases')

onMounted(async () => {
  try {
    const response = await fetch('https://gitee.com/api/v5/repos/xxk0723/GS.OmniWareMatrix/releases/latest')
    if (response.ok) {
      const data = await response.json()
      version.value = data.tag_name
      // Gitee releases tag URL usually follows this pattern, or we can use the html_url if provided by API
      // But keeping it simple to the releases page is safer if we aren't sure
      releaseUrl.value = 'https://gitee.com/xxk0723/GS.OmniWareMatrix/releases' 
    } else {
      // Fallback if API fails (e.g. rate limit)
      version.value = 'V1.0.0-Beta.3'
    }
  } catch (e) {
    console.error('Failed to fetch version', e)
    version.value = 'V1.0.0-Beta.3'
  }
})
</script>

<template>
  <span class="version-tag">
    {{ version }}
    <a :href="releaseUrl" target="_blank" class="release-link" title="前往下载">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
    </a>
  </span>
</template>

<style scoped>
.version-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--vp-font-family-mono);
}

.release-link {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-brand-1);
  transition: color 0.2s;
}

.release-link:hover {
  color: var(--vp-c-brand-2);
}

.release-link svg {
  width: 14px;
  height: 14px;
}
</style>
