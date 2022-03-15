---
sidebar_position: 1
---

# Title

![Cafe Data Panel](/img/configs/title/1.png)
![Cafe Data Panel](/img/configs/title/2.png)
![Cafe Data Panel](/img/configs/title/3.png)

:::danger Take care

Change these properties:

- title.text | settings | Stacked Area Chart

:::

```js title="index.html"
option = {
  title: {
        show: config?.title?.show,
        text: config?.title?.text,
        backgroundColor: config?.title?.backgroundColor,
        textStyle: {
          color: config?.title?.color,
          fontSize: `${config?.title?.fontSize}px`,
          fontWeight: config?.title?.fontWeight,
        },
        subtext: config?.title?.subshow ? config?.title?.subtext : undefined,
        subtextStyle: {
          color: config?.title?.subcolor,
          fontSize: `${config?.title?.subfontSize}px`,
          fontWeight: config?.title?.subfontWeight,
        },
      },
}

```

```json title="settings.json"
{
  "name": "title",
  "rows": [
    {
      "name": "title",
      "components": [
        {
          "label": "show title",
          "field": "title.show",
          "type": "switch",
          "default": false,
          "width": "100%"
        },
        {
          "label": "title",
          "field": "title.text",
          "type": "input-text",
          "default": "Stacked Area Chart",
          "width": "100%",
          "show_if": {
            "title.show": true
          }
        },
        {
          "label": "font size",
          "field": "title.fontSize",
          "type": "input-number",
          "default": "12",
          "width": "50%",
          "show_if": {
            "title.show": true
          }
        },
        {
          "label": "color",
          "field": "title.color",
          "type": "color-picker",
          "default": "#000",
          "width": "50%",
          "show_if": {
            "title.show": true
          }
        },
        {
          "label": "font weight",
          "field": "title.fontWeight",
          "type": "radio-button",
          "default": "normal",
          "width": "100%",
          "options": [
            {
              "display": "lighter",
              "value": "lighter"
            },
            {
              "display": "normal",
              "value": "normal"
            },
            {
              "display": "bold",
              "value": "bold"
            }
          ],
          "show_if": {
            "title.show": true
          }
        },
        {
          "label": "background",
          "field": "title.backgroundColor",
          "type": "color-picker",
          "default": "transparent",
          "width": "100%",
          "show_if": {
            "title.show": true
          }
        }
      ]
    },
    {
      "name": "subtitle",
      "components": [
        {
          "label": "show subtitle",
          "field": "title.subshow",
          "type": "switch",
          "default": false,
          "width": "100%",
          "show_if": {
            "title.show": true
          }
        },
        {
          "label": "subtitle",
          "field": "title.subtext",
          "type": "input-text",
          "default": "Subtitle",
          "width": "100%",
          "show_if": {
            "title.subshow": true
          }
        },
        {
          "label": "font size",
          "field": "title.subfontSize",
          "type": "input-number",
          "default": "12",
          "width": "50%",
          "show_if": {
            "title.subshow": true
          }
        },
        {
          "label": "color",
          "field": "title.subcolor",
          "type": "color-picker",
          "default": "#333333",
          "width": "50%",
          "show_if": {
            "title.subshow": true
          }
        },
        {
          "label": "font weight",
          "field": "title.subfontWeight",
          "type": "radio-button",
          "default": "normal",
          "width": "100%",
          "options": [
            {
              "display": "lighter",
              "value": "lighter"
            },
            {
              "display": "normal",
              "value": "normal"
            },
            {
              "display": "bold",
              "value": "bold"
            }
          ],
          "show_if": {
            "title.subshow": true
          }
        }
      ]
    }
  ]
}
```
