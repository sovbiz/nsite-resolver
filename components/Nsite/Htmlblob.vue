<template>
  <div ref="shadowHost"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const shadowHost = ref(null);

function extractTitle(html) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return titleMatch ? titleMatch[1] : "Untitled";
}

function extractFavicon(html, baseUrl) {
  const linkMatch = html.match(/<link[^>]*rel=["']icon["'][^>]*>/i);
  if (linkMatch) {
    const hrefMatch = linkMatch[0].match(/href=["']([^"']+)["']/);
    if (hrefMatch) {
      const faviconPath = hrefMatch[1];
      return faviconPath.startsWith("http") ? faviconPath : new URL(faviconPath, baseUrl).href;
    }
  }
  return null;
}

async function fetchContent(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch content: ${response.statusText}`);
    }
    return await response.text();
  } catch (err) {
    console.error("Error fetching content:", err);
    return "";
  }
}

function setFavicon(faviconUrl) {
  const existingFavicon = document.querySelector('link[rel="icon"]');
  if (existingFavicon) {
    existingFavicon.href = faviconUrl;
  } else {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = faviconUrl;
    document.head.appendChild(link);
  }
}

onMounted(async () => {
  const content = await fetchContent(props.url);

  if (content) {
    // Extract and set the page title
    const title = extractTitle(content);
    if (title) {
      document.title = title;
    }

    // Extract and set the favicon
    const faviconUrl = extractFavicon(content, props.url);
    if (faviconUrl) {
      setFavicon(faviconUrl);
    }

    // Render content in Shadow DOM
    if (shadowHost.value) {
      const shadowRoot = shadowHost.value.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = content;
    }
  }
});
</script>
