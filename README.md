# jquery-blink
Blink Effect for jQuery

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script src="/path/to/jquery.blink.js"></script>
```

## Example Usage

```js
jQuery('span').blink({color:'white'}, {color:'black'}, 50);
```

```js
jQuery('div').blink({width:200, backgroundColor:'#aaccff', padding:10}, {width:300, backgroundColor:'#ffccaa', padding:15} ,1000);
```

"Simplicity is the ultimate sophistication" -- Da Vinci
