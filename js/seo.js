function createSEOLoader() {
  return {
    // Get the current page name from the URL path
    getPageNameFromURL() {
      // Extract the last part of the path and remove extension if any
      const path = window.location.pathname;
      const pageName = path.split('/').pop().split('.')[0];
      
      // If it's the root path or empty, return 'home'
      return pageName === '' ? 'home' : pageName;
    },
    
    // Fetch SEO data from the API
    async fetchSEOData(pageName) {
      try {
        const response = await fetch(`${window.SERVALL_API_BASE}/misc/seo?pageName=${pageName}`);
        const result = await response.json();
        
        if (result.status === "success" && result.data.seoEntries.length > 0) {
          return result.data.seoEntries[0];
        }
        return null;
      } catch (error) {
        console.error('Error fetching SEO data:', error);
        return null;
      }
    },
    
    // Update meta tags with SEO data
    updateMetaTags(seoData) {
      if (!seoData) return;
    
      // Set document title
      document.title = seoData.metaTitle;
    
      // Base image URL
      const baseImageUrl = 'https://servall-storage.s3.ap-south-1.amazonaws.com';
      const ogImage = seoData.ogImage?.startsWith('http')
        ? seoData.ogImage
        : `${baseImageUrl}/${seoData.ogImage.replace(/^\/+/, '')}`;
    
      // Standard Meta Tags
      this.setMetaTag('title', seoData.metaTitle);
      this.setMetaTag('description', seoData.metaDescription);
      this.setMetaTag('keywords', seoData.metaKeywords.join(', '));
    
      // Open Graph Tags
      this.setMetaTag('og:title', seoData.ogTitle, 'property');
      this.setMetaTag('og:description', seoData.ogDescription, 'property');
      this.setMetaTag('og:image', ogImage, 'property');
      this.setMetaTag('og:url', seoData.ogUrl, 'property');
    
      // Twitter Tags
      this.setMetaTag('twitter:title', seoData.ogTitle, 'name');
      this.setMetaTag('twitter:description', seoData.ogDescription, 'name');
      this.setMetaTag('twitter:image', ogImage, 'name');
      this.setMetaTag('twitter:card', 'summary_large_image', 'name'); 
    }
    ,
    
    // Helper function to set or create meta tags
    setMetaTag(name, content, attributeName = 'name') {
      if (!content) return;
      
      let metaTag = document.querySelector(`meta[${attributeName}="${name}"]`);
      
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attributeName, name);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    },
    
    async init(customPageName = null) {
      const pageName = customPageName || this.getPageNameFromURL();
      const seoData = await this.fetchSEOData(pageName);
      this.updateMetaTags(seoData);
      return seoData;
    }
  };
}

// Example usage in a page:
// const seoLoader = createSEOLoader();
// seoLoader.init(); // Auto-detect page name from URL
// or
// seoLoader.init('about'); // Specify page name manually