import{_ as s,o as n,c as a,a as l}from"./app.bb9399a2.js";const u=JSON.parse('{"title":"Options","description":"","frontmatter":{},"headers":[{"level":2,"title":"options prop","slug":"options-prop"},{"level":2,"title":"globalOptions prop","slug":"globaloptions-prop"},{"level":2,"title":"Option Attributes","slug":"option-attributes"},{"level":3,"title":"bounds","slug":"bounds"},{"level":3,"title":"debug","slug":"debug"},{"level":3,"title":"formats","slug":"formats"},{"level":3,"title":"modules","slug":"modules"},{"level":3,"title":"placeholder","slug":"placeholder"},{"level":3,"title":"readOnly","slug":"readonly"},{"level":3,"title":"scrollingContainer","slug":"scrollingcontainer"},{"level":3,"title":"theme","slug":"theme"}],"relativePath":"guide/options.md"}'),o={name:"guide/options.md"},p=l(`<h1 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h1><p>Use <code>options</code> prop or/and <code>globalOptions</code> prop to configure Quill.</p><h2 id="options-prop" tabindex="-1">options prop <a class="header-anchor" href="#options-prop" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Only use <code>options</code> prop when you register QuillEditor component locally</p></div><ul><li><p><strong>Usage:</strong></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">QuillEditor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueup/vue-quill</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueup/vue-quill/dist/vue-quill.snow.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    QuillEditor</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">      options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        debug</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        modules</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          toolbar</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bold</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">italic</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">underline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        placeholder</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Compose an epic...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        readOnly</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        theme</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">snow</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p><strong>In your template:</strong></p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">QuillEditor</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">options</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="globaloptions-prop" tabindex="-1">globalOptions prop <a class="header-anchor" href="#globaloptions-prop" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Only use <code>globalOptions</code> prop when you register the QuillEditor component globally</p></div><ul><li><p><strong>Usage:</strong></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">QuillEditor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueup/vue-quill</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// define your options</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalOptions </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">debug</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">toolbar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bold</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">italic</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">underline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">placeholder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Compose an epic...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">readOnly</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">snow</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// set default globalOptions prop</span></span>
<span class="line"><span style="color:#A6ACCD;">QuillEditor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">globalOptions</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> globalOptions</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// register QuillEditor component</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">QuillEditor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> QuillEditor)</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="option-attributes" tabindex="-1">Option Attributes <a class="header-anchor" href="#option-attributes" aria-hidden="true">#</a></h2><h3 id="bounds" tabindex="-1">bounds <a class="header-anchor" href="#bounds" aria-hidden="true">#</a></h3><ul><li><p><strong>Default:</strong> <code>document.body</code></p><p>DOM Element or a CSS selector for a DOM Element, within which the editor\u2019s UI elements (i.e. tooltips, etc.) should be confined. Currently, it only considers left and right boundaries.</p></li></ul><h3 id="debug" tabindex="-1">debug <a class="header-anchor" href="#debug" aria-hidden="true">#</a></h3><ul><li><p><strong>Default:</strong> <code>warn</code></p><p>Shortcut for debugging. Note debug is a static method and will affect other instances of Quill editors on the page. Only warning and error messages are enabled by default.</p></li></ul><h3 id="formats" tabindex="-1">formats <a class="header-anchor" href="#formats" aria-hidden="true">#</a></h3><ul><li><p><strong>Default:</strong> <code>All formats</code></p><p>Whitelist of formats to allow in the editor. See <a href="https://quilljs.com/docs/formats/" target="_blank" rel="noopener noreferrer">Formats</a> for a complete list.</p></li></ul><h3 id="modules" tabindex="-1">modules <a class="header-anchor" href="#modules" aria-hidden="true">#</a></h3><p>Collection of modules to include and respective options. See <a href="https://quilljs.com/docs/modules/" target="_blank" rel="noopener noreferrer">Modules</a> for more information.</p><h3 id="placeholder" tabindex="-1">placeholder <a class="header-anchor" href="#placeholder" aria-hidden="true">#</a></h3><ul><li><p><strong>Default:</strong> <code>None</code></p><p>Placeholder text to show when the editor is empty.</p></li></ul><h3 id="readonly" tabindex="-1">readOnly <a class="header-anchor" href="#readonly" aria-hidden="true">#</a></h3><ul><li><p><strong>Default:</strong> <code>false</code></p><p>Whether to instantiate the editor to read-only mode.</p></li></ul><h3 id="scrollingcontainer" tabindex="-1">scrollingContainer <a class="header-anchor" href="#scrollingcontainer" aria-hidden="true">#</a></h3><ul><li><p><strong>Default:</strong> <code>null</code></p><p>DOM Element or a CSS selector for a DOM Element, specifying which container has the scrollbars (i.e. overflow-y: auto), if is has been changed from the default ql-editor with custom CSS. Necessary to fix scroll jumping bugs when Quill is set to auto grow its height, and another ancestor container is responsible for the scrolling.</p></li></ul><h3 id="theme" tabindex="-1">theme <a class="header-anchor" href="#theme" aria-hidden="true">#</a></h3><p>Name of a theme to use. The built-in options are <code>bubble</code> or <code>snow</code>. An invalid or falsy value will load a default minimal theme. Note the theme\u2019s specific stylesheet still needs to be included manually. See <a href="./themes.html">Themes</a> for more information.</p>`,25),e=[p];function t(r,c,i,D,y,F){return n(),a("div",null,e)}var C=s(o,[["render",t]]);export{u as __pageData,C as default};
