---
sidebar_position: 2
---

# Legend

![Cafe Data Panel](/img/configs/title/1.png)

```js title="index.html"
option = {
  legend: {
        show: config?.legend.show,
        orient: config?.legend.orient,
        top: config?.legend.vertical == "top" ? config?.legend.top : undefined,
        right:
          config?.legend.horizontal == "right"
            ? config?.legend.right
            : undefined,
        bottom:
          config?.legend.vertical == "bottom"
            ? config?.legend.bottom
            : undefined,
        left:
          config?.legend.horizontal == "left"
            ? config?.legend.left
            : config?.legend.horizontal == "center"
            ? "center"
            : undefined,
        textStyle: {
          color: config?.legend.color,
          fontSize: config?.legend.fontSize,
          fontWeight: config?.legend.fontWeight,
        },
      }
}

```

```json title="settings.json"
{
  "name": "legend",
  "rows": [
   {
    "name": "position",
    "components": [
     {
      "label": "show legend",
      "field": "legend.show",
      "type": "switch",
      "default": false,
      "width": "100%"
     },
     {
      "label": "orient",
      "field": "legend.orient",
      "type": "radio-button",
      "default": "horizontal",
      "width": "100%",
      "options": [
       {
        "display": "horizontal",
        "value": "horizontal"
       },
       {
        "display": "vertical",
        "value": "vertical"
       }
      ]
     },
     {
      "label": "vertical alignment",
      "field": "legend.vertical",
      "type": "radio-button",
      "default": "top",
      "width": "100%",
      "options": [
       {
        "display": "top",
        "value": "top"
       },
       {
        "display": "bottom",
        "value": "bottom"
       }
      ]
     },
     {
      "label": "horizontal alignment",
      "field": "legend.horizontal",
      "type": "radio-button",
      "default": "right",
      "width": "100%",
      "options": [
       {
        "display": "left",
        "value": "left"
       },
       {
        "display": "center",
        "value": "center"
       },
       {
        "display": "right",
        "value": "right"
       }
      ]
     },
     {
      "label": "top",
      "field": "legend.top",
      "type": "input-number",
      "default": "0",
      "width": "50%",
      "show_if": {
       "legend.vertical": "top"
      }
     },
     {
      "label": "bottom",
      "field": "legend.bottom",
      "type": "input-number",
      "default": "0",
      "width": "50%",
      "show_if": {
       "legend.vertical": "bottom"
      }
     },
     {
      "label": "right",
      "field": "legend.right",
      "type": "input-number",
      "default": "0",
      "width": "50%",
      "show_if": {
       "legend.horizontal": "right"
      }
     },
     {
      "label": "left",
      "field": "legend.left",
      "type": "input-number",
      "default": "0",
      "width": "50%",
      "show_if": {
       "legend.horizontal": "left"
      }
     }
    ]
   },
   {
    "name": "text style",
    "components": [
     {
      "label": "font size",
      "field": "legend.fontSize",
      "type": "input-number",
      "default": "10",
      "width": "50%"
     },
     {
      "label": "color",
      "field": "legend.color",
      "type": "color-picker",
      "default": "#000",
      "width": "50%"
     },
     {
      "label": "fontWeight",
      "field": "legend.fontWeight",
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
      ]
     }
    ]
   }
  ]
 }
```
