import{_ as e,o as t,c as n,a as l}from"./app.bb9399a2.js";const m=JSON.parse('{"title":"Methods","description":"","frontmatter":{},"headers":[{"level":2,"title":"getEditor()","slug":"geteditor"},{"level":2,"title":"getToolbar()","slug":"gettoolbar"},{"level":2,"title":"getQuill()","slug":"getquill"},{"level":2,"title":"getContents(index, length)","slug":"getcontents-index-length"},{"level":2,"title":"setContents(content, source)","slug":"setcontents-content-source"},{"level":2,"title":"getHTML()","slug":"gethtml"},{"level":2,"title":"setHTML(html)","slug":"sethtml-html"},{"level":2,"title":"pasteHTML(html, source)","slug":"pastehtml-html-source"},{"level":2,"title":"getText(index, length)","slug":"gettext-index-length"},{"level":2,"title":"setText(text)","slug":"settext-text"}],"relativePath":"api/methods.md"}'),r={name:"api/methods.md"},o=l('<h1 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>We highly recommend to call method when the quill editor ready, use @ready event</p></div><h2 id="geteditor" tabindex="-1">getEditor() <a class="header-anchor" href="#geteditor" aria-hidden="true">#</a></h2><ul><li><p><strong>Return:</strong> <code>editor: Element</code></p><p>Returns the Editor Element.</p></li></ul><h2 id="gettoolbar" tabindex="-1">getToolbar() <a class="header-anchor" href="#gettoolbar" aria-hidden="true">#</a></h2><ul><li><p><strong>Return:</strong> <code>toolbar: Element</code></p><p>Returns the Toolbar Element.</p></li></ul><h2 id="getquill" tabindex="-1">getQuill() <a class="header-anchor" href="#getquill" aria-hidden="true">#</a></h2><ul><li><p><strong>Return:</strong> <code>quill: Quill</code></p><p>Returns the Quill instance that backs the editor. While you can freely use this to access methods such as <code>getText()</code>, <code>focus()</code>, and much <a href="https://quilljs.com/docs/api/" target="_blank" rel="noopener noreferrer">more</a>.</p></li></ul><h2 id="getcontents-index-length" tabindex="-1">getContents(index, length) <a class="header-anchor" href="#getcontents-index-length" aria-hidden="true">#</a></h2><ul><li><p><strong>Parameter:</strong> <code>index?: number, length?: number</code></p></li><li><p><strong>Return:</strong> <code>content: string | Delta</code></p><p>Returns the contents of the editor.</p></li></ul><h2 id="setcontents-content-source" tabindex="-1">setContents(content, source) <a class="header-anchor" href="#setcontents-content-source" aria-hidden="true">#</a></h2><ul><li><p><strong>Parameter:</strong> <code>content: string | Delta, source: &#39;api&#39; | &#39;user&#39; | &#39;silent&#39;</code></p><p>To set the contents of the editor.</p></li></ul><h2 id="gethtml" tabindex="-1">getHTML() <a class="header-anchor" href="#gethtml" aria-hidden="true">#</a></h2><ul><li><p><strong>Return:</strong> <code>html: string</code></p><p>Returns the full HTML contents of the editor.</p></li></ul><h2 id="sethtml-html" tabindex="-1">setHTML(html) <a class="header-anchor" href="#sethtml-html" aria-hidden="true">#</a></h2><ul><li><p><strong>Parameter:</strong> <code>html: string</code></p><p>To set the HTML contents of the editor.</p></li></ul><h2 id="pastehtml-html-source" tabindex="-1">pasteHTML(html, source) <a class="header-anchor" href="#pastehtml-html-source" aria-hidden="true">#</a></h2><ul><li><p><strong>Parameter:</strong> <code>html: string, source: &#39;api&#39; | &#39;user&#39; | &#39;silent&#39;</code></p><p>To import raw HTML from a non-Quill environment.</p></li></ul><h2 id="gettext-index-length" tabindex="-1">getText(index, length) <a class="header-anchor" href="#gettext-index-length" aria-hidden="true">#</a></h2><ul><li><p><strong>Parameter:</strong> <code>index?: number, length?: number</code></p></li><li><p><strong>Return:</strong> <code>text: string</code></p><p>Returns the full text contents of the editor.</p></li></ul><h2 id="settext-text" tabindex="-1">setText(text) <a class="header-anchor" href="#settext-text" aria-hidden="true">#</a></h2><ul><li><p><strong>Parameter:</strong> <code>text: string, source: &#39;api&#39; | &#39;user&#39; | &#39;silent&#39;</code></p><p>To set the text contents of the editor.</p></li></ul>',22),s=[o];function a(i,h,d,c,u,g){return t(),n("div",null,s)}var x=e(r,[["render",a]]);export{m as __pageData,x as default};
