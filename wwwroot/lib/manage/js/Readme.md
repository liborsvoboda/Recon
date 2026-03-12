# Handlebar.js Code Generator   
   
````   
var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +   
             "{{kids.length}} kids:</p>" +   
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";   
var template = Handlebars.compile(source);   

var data = { "name": "Alan", "hometown": "Somewhere, TX",   
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};   
var result = template(data);   

````   

**Output**   
````   
<p>Hello, my name is Alan. I am from Somewhere, TX. I have 2 kids:</p>   
  <ul>   
   <li>Jimmy is 12</li>   
   <li>Sally is 4</li>   
 </ul>   
 
````   

# Cookie Use for ApiToken    
https://github.com/js-cookie/js-cookie     
````    
  Cookies.set('ApiToken', data.Token);   
  Cookies.remove('ApiToken');    
  Cookies.get('ApiToken');  

````    



# ClipBoard      
https://clipboardjs.com/     

var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
