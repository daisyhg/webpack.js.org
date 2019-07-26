(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{328:function(n,e,s){"use strict";s.r(e),e.default='<p>Providing the <code>mode</code> configuration option tells webpack to use its built-in optimizations accordingly.</p>\n<p><code>string</code></p>\n<blockquote class="tip">\n<p>Possible values for <code>mode</code> are: <code>none</code>, <code>development</code> or <code>production</code>(default).</p>\n</blockquote>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Just provide the <code>mode</code> option in the config:</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'production\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>or pass it as a <a href="/api/cli/">CLI</a> argument:</p>\n<pre><code class="hljs language-bash">webpack --mode<span class="token operator">=</span>production</code></pre>\n<p>The following string values are supported:</p>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>Option</p><p>Description</p></div>\n<div class="content"><p><code>development</code><p class="description mobile">Sets <code>process.env.NODE_ENV</code> on <code>DefinePlugin</code> to value <code>development</code>. Enables <code>NamedChunksPlugin</code> and <code>NamedModulesPlugin</code>.</p></p></div></td>\n<td class="description desktop">Sets \n<code>process.env.NODE_ENV</code>\n on \n<code>DefinePlugin</code>\n to value \n<code>development</code>\n. Enables \n<code>NamedChunksPlugin</code>\n and \n<code>NamedModulesPlugin</code>\n.</td>\n</tr>\n<tr>\n<td><div class="title"><p>Option</p><p>Description</p></div>\n<div class="content"><p><code>production</code><p class="description mobile">Sets <code>process.env.NODE_ENV</code> on <code>DefinePlugin</code> to value <code>production</code>. Enables <code>FlagDependencyUsagePlugin</code>, <code>FlagIncludedChunksPlugin</code>, <code>ModuleConcatenationPlugin</code>, <code>NoEmitOnErrorsPlugin</code>, <code>OccurrenceOrderPlugin</code>, <code>SideEffectsFlagPlugin</code> and <code>TerserPlugin</code>.</p></p></div></td>\n<td class="description desktop">Sets \n<code>process.env.NODE_ENV</code>\n on \n<code>DefinePlugin</code>\n to value \n<code>production</code>\n. Enables \n<code>FlagDependencyUsagePlugin</code>\n, \n<code>FlagIncludedChunksPlugin</code>\n, \n<code>ModuleConcatenationPlugin</code>\n, \n<code>NoEmitOnErrorsPlugin</code>\n, \n<code>OccurrenceOrderPlugin</code>\n, \n<code>SideEffectsFlagPlugin</code>\n and \n<code>TerserPlugin</code>\n.</td>\n</tr>\n<tr>\n<td><div class="title"><p>Option</p><p>Description</p></div>\n<div class="content"><p><code>none</code><p class="description mobile">Opts out of any default optimization options</p></p></div></td>\n<td class="description desktop">Opts out of any default optimization options</td>\n</tr>\n</tbody>\n</table>\n<p>If not set, webpack sets <code>production</code> as the default value for <code>mode</code>.</p>\n<blockquote class="tip">\n<p>Please remember that setting <code>NODE_ENV</code> doesn\'t automatically set <code>mode</code>.</p>\n</blockquote>\n<h3 id="mode-development">Mode: development<a href="#mode-development" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-diff">// webpack.development.config.js\nmodule.exports = {\n<span class="token inserted">+ mode: \'development\'</span>\n<span class="token deleted">- devtool: \'eval\',</span>\n<span class="token deleted">- cache: true,</span>\n<span class="token deleted">- performance: {</span>\n<span class="token deleted">-   hints: false</span>\n<span class="token deleted">- },</span>\n<span class="token deleted">- output: {</span>\n<span class="token deleted">-   pathinfo: true</span>\n<span class="token deleted">- },</span>\n<span class="token deleted">- optimization: {</span>\n<span class="token deleted">-   namedModules: true,</span>\n<span class="token deleted">-   namedChunks: true,</span>\n<span class="token deleted">-   nodeEnv: \'development\',</span>\n<span class="token deleted">-   flagIncludedChunks: false,</span>\n<span class="token deleted">-   occurrenceOrder: false,</span>\n<span class="token deleted">-   sideEffects: false,</span>\n<span class="token deleted">-   usedExports: false,</span>\n<span class="token deleted">-   concatenateModules: false,</span>\n<span class="token deleted">-   splitChunks: {</span>\n<span class="token deleted">-     hidePathInfo: false,</span>\n<span class="token deleted">-     minSize: 10000,</span>\n<span class="token deleted">-     maxAsyncRequests: Infinity,</span>\n<span class="token deleted">-     maxInitialRequests: Infinity,</span>\n<span class="token deleted">-   },</span>\n<span class="token deleted">-   noEmitOnErrors: false,</span>\n<span class="token deleted">-   checkWasmTypes: false,</span>\n<span class="token deleted">-   minimize: false,</span>\n<span class="token deleted">-   removeAvailableModules: false</span>\n<span class="token deleted">- },</span>\n<span class="token deleted">- plugins: [</span>\n<span class="token deleted">-   new webpack.NamedModulesPlugin(),</span>\n<span class="token deleted">-   new webpack.NamedChunksPlugin(),</span>\n<span class="token deleted">-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),</span>\n<span class="token deleted">- ]</span>\n}</code></pre>\n<h3 id="mode-production">Mode: production<a href="#mode-production" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-diff">// webpack.production.config.js\nmodule.exports = {\n<span class="token inserted">+  mode: \'production\',</span>\n<span class="token deleted">- performance: {</span>\n<span class="token deleted">-   hints: \'warning\'</span>\n<span class="token deleted">- },</span>\n<span class="token deleted">- output: {</span>\n<span class="token deleted">-   pathinfo: false</span>\n<span class="token deleted">- },</span>\n<span class="token deleted">- optimization: {</span>\n<span class="token deleted">-   namedModules: false,</span>\n<span class="token deleted">-   namedChunks: false,</span>\n<span class="token deleted">-   nodeEnv: \'production\',</span>\n<span class="token deleted">-   flagIncludedChunks: true,</span>\n<span class="token deleted">-   occurrenceOrder: true,</span>\n<span class="token deleted">-   sideEffects: true,</span>\n<span class="token deleted">-   usedExports: true,</span>\n<span class="token deleted">-   concatenateModules: true,</span>\n<span class="token deleted">-   splitChunks: {</span>\n<span class="token deleted">-     hidePathInfo: true,</span>\n<span class="token deleted">-     minSize: 30000,</span>\n<span class="token deleted">-     maxAsyncRequests: 5,</span>\n<span class="token deleted">-     maxInitialRequests: 3,</span>\n<span class="token deleted">-   },</span>\n<span class="token deleted">-   noEmitOnErrors: true,</span>\n<span class="token deleted">-   checkWasmTypes: true,</span>\n<span class="token deleted">-   minimize: true,</span>\n<span class="token deleted">- },</span>\n<span class="token deleted">- plugins: [</span>\n<span class="token deleted">-   new TerserPlugin(/* ... */),</span>\n<span class="token deleted">-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),</span>\n<span class="token deleted">-   new webpack.optimize.ModuleConcatenationPlugin(),</span>\n<span class="token deleted">-   new webpack.NoEmitOnErrorsPlugin()</span>\n<span class="token deleted">- ]</span>\n}</code></pre>\n<h3 id="mode-none">Mode: none<a href="#mode-none" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-diff">// webpack.custom.config.js\nmodule.exports = {\n<span class="token inserted">+ mode: \'none\',</span>\n<span class="token deleted">- performance: {</span>\n<span class="token deleted">-  hints: false</span>\n<span class="token deleted">- },</span>\n<span class="token deleted">- optimization: {</span>\n<span class="token deleted">-   flagIncludedChunks: false,</span>\n<span class="token deleted">-   occurrenceOrder: false,</span>\n<span class="token deleted">-   sideEffects: false,</span>\n<span class="token deleted">-   usedExports: false,</span>\n<span class="token deleted">-   concatenateModules: false,</span>\n<span class="token deleted">-   splitChunks: {</span>\n<span class="token deleted">-     hidePathInfo: false,</span>\n<span class="token deleted">-     minSize: 10000,</span>\n<span class="token deleted">-     maxAsyncRequests: Infinity,</span>\n<span class="token deleted">-     maxInitialRequests: Infinity,</span>\n<span class="token deleted">-   },</span>\n<span class="token deleted">-   noEmitOnErrors: false,</span>\n<span class="token deleted">-   checkWasmTypes: false,</span>\n<span class="token deleted">-   minimize: false,</span>\n<span class="token deleted">- },</span>\n<span class="token deleted">- plugins: []</span>\n}</code></pre>\n<p>If you want to change the behavior according to the <strong>mode</strong> variable inside the <em>webpack.config.js</em>, you have to export a function instead of an object:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./app.js\'</span>\n  <span class="token comment">//...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span>env<span class="token punctuation">,</span> argv<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>argv<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'development\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    config<span class="token punctuation">.</span>devtool <span class="token operator">=</span> <span class="token string">\'source-map\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>argv<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//...</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n'}}]);