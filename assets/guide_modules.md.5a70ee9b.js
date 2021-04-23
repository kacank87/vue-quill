import{o as a,a as n,i as e}from"./app.ab3b2ec5.js";const t='{"title":"Modules","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Quill Modules","slug":"quill-modules"}],"relativePath":"guide/modules.md","lastUpdated":1619144285578}',o={},s=e('<h1 id="modules"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h1><p>Modules allow Quill’s behavior and functionality to be customized. To enable a module, simply include it in a <a href="./../api/#modules"><code>modules</code> prop</a>.</p><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>In this example I am gonna use <a href="https://github.com/Fandom-OSS/quill-blot-formatter" target="_blank" rel="noopener noreferrer">quill-blot-formatter</a>, a module for resizing and realigning images and iframe video.</p><p><strong>Installation:</strong></p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> --save quill-blot-formatter\n<span class="token comment"># OR</span>\n<span class="token function">yarn</span> <span class="token function">add</span> quill-blot-formatter\n</code></pre></div><p><strong>Usage:</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QuillEditor</span> <span class="token attr-name">:modules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modules<span class="token punctuation">&quot;</span></span> <span class="token attr-name">toolbar</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>full<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> QuillEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueup/vue-quill&#39;</span>\n<span class="token keyword">import</span> BlotFormatter <span class="token keyword">from</span> <span class="token string">&#39;quill-blot-formatter&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;@vueup/vue-quill/../dist/vue-quill.snow.css&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    QuillEditor<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;blotFormatter&#39;</span><span class="token punctuation">,</span>  \n      module<span class="token operator">:</span> BlotFormatter<span class="token punctuation">,</span> \n      options<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">/* options */</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> modules <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>See <a href="https://quilljs.com/docs/modules/" target="_blank" rel="noopener noreferrer">Quill modules docs</a> for more details.</p><h2 id="quill-modules"><a class="header-anchor" href="#quill-modules" aria-hidden="true">#</a> Quill Modules</h2><ul><li><a href="https://github.com/weavy/quill-autoformat" target="_blank" rel="noopener noreferrer">quill-autoformat</a> - Module for transforming text including mentions, links and hashtags</li><li><a href="https://github.com/soccerloway/quill-better-table" target="_blank" rel="noopener noreferrer">quill-better-table</a> - A module for table editting, support resizing column, multiline cell, merging/unmerging cells</li><li><a href="https://github.com/Fandom-OSS/quill-blot-formatter" target="_blank" rel="noopener noreferrer">quill-blot-formatter</a> - A module for resizing and realigning images and iframe videos</li><li><a href="https://github.com/reedsy/quill-cursors" target="_blank" rel="noopener noreferrer">quill-cursors</a> - A multi cursor module for Quill text editor</li><li><a href="https://github.com/contentco/quill-emoji" target="_blank" rel="noopener noreferrer">quill-emoji</a> - Quill module toolbar extension for emoji</li><li><a href="https://amka.github.io/quill-focus/" target="_blank" rel="noopener noreferrer">quill-focus</a> - A Quill.js module that adds &quot;focus mode&quot;</li><li><a href="https://github.com/weavy/quill-form" target="_blank" rel="noopener noreferrer">quill-form</a> - Module for automatic form input and submit binding</li><li><a href="https://github.com/MuhammedAlkhudiry/quill-find-replace-module" target="_blank" rel="noopener noreferrer">quill-find-replace-module</a> - A module for Quill.js for finding words and replacing them</li><li><a href="https://github.com/benwinding/quill-html-edit-button" target="_blank" rel="noopener noreferrer">quill-html-edit-button</a> - A module to add a button which allows you to view/edit the raw HTML in the quill editor.</li><li><a href="https://github.com/benwinding/quill-image-compress" target="_blank" rel="noopener noreferrer">quill-image-compress</a> - A module to compress images before adding them to the editor.</li><li><a href="https://github.com/kensnyder/quill-image-drop-module" target="_blank" rel="noopener noreferrer">quill-image-drop-module</a> - A module to allow images to be pasted and drag/dropped into the editor</li><li><a href="https://github.com/kensnyder/quill-image-resize-module" target="_blank" rel="noopener noreferrer">quill-image-resize-module</a> - A module to allow images to be resized (not maintained: use quill-blot-formatter instead)</li><li><a href="https://github.com/NoelOConnell/quill-image-uploader" target="_blank" rel="noopener noreferrer">quill-image-uploader</a> - Upload image to server, adds toolbar button and handles dropped/pastes images</li><li><a href="https://github.com/riencroonenborghs/quill-image-url-drop-module" target="_blank" rel="noopener noreferrer">quill-image-url-drop-module</a> - A module to allow images&#39; URLs to be drag/dropped into the editor</li><li><a href="https://github.com/visualjerk/quill-magic-url" target="_blank" rel="noopener noreferrer">quill-magic-url</a> - Checks for URLs during typing / pasting and automatically converts them to links</li><li><a href="https://github.com/patleeman/quill-markdown-shortcuts" target="_blank" rel="noopener noreferrer">quill-markdown-shortcuts</a> - Quill.js module that converts markdown to rich text formatting while typing</li><li><a href="https://github.com/park53kr/quill-markdown-toolbar" target="_blank" rel="noopener noreferrer">quill-markdown-toolbar</a> - A Quill.js module for converting markdown text to rich text format</li><li><a href="https://github.com/afconsult/quill-mention" target="_blank" rel="noopener noreferrer">quill-mention</a> - @mentions for the Quill rich text editor</li><li><a href="https://github.com/Artem-Schander/quill-paste-smart" target="_blank" rel="noopener noreferrer">quill-paste-smart</a> - Paste only supported HTML</li><li><a href="https://github.com/jspaine/quill-placeholder-module" target="_blank" rel="noopener noreferrer">quill-placeholder-module</a> - A quill module for adding placeholders</li><li><a href="https://github.com/Datananas/quill-placeholder-autocomplete" target="_blank" rel="noopener noreferrer">quill-placeholder-autocomplete-module</a> - brings autocomplete to &quot;quill-placeholder-module&quot;</li><li><a href="https://github.com/fabiancelik/rich-voice-editor" target="_blank" rel="noopener noreferrer">quill-rich-voice-editor</a> - A Quill.js module for SSML tags and functions to build better voice applications</li><li><a href="https://github.com/volser/quill-table-ui" target="_blank" rel="noopener noreferrer">quill-table-ui</a> - A module for table UI</li></ul>',11);o.render=function(e,t,o,l,r,i){return a(),n("div",null,[s])};export default o;export{t as __pageData};
