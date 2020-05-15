**Inner Polyfill**

The inert attribute/property allows web authors to mark parts of the DOM tree as inert:

When a node is inert, then the user agent must act as if the node was absent for the purposes of targeting user interaction events, may ignore the node for the purposes of text search user interfaces (commonly known as "find in page"), and may prevent the user from selecting text in that node.

Furthermore, a node which is inert should also be hidden from assistive technology.

For example a nav bar on tab
[Inert](https://github.com/wicg/inert)

**Focus**

To keep the focus steady, we should organize our dom the way we want that the user views it.

**Tab Index**

TabIndex = 0 sets the focus on it. We should't give >0 on tab index.
We also can set to -1 and add trough Javascript `` onFocus() ``

**Roving Tab Index**
See the video again

**Screen Reader**

[Nvda](https://webaim.org/articles/nvda/)
[Aria](https://www.w3.org/TR/wai-aria-1.1/)

**Alerts**

[Good lesson](https://www.youtube.com/watch?v=5lzAj1ahRSI&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=10)

**Labeling**

When we have a button that says shop now, would be good to know what are we shopping nom - Aria Label

**Focus**

Lesson 16
