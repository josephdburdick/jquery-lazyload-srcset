This is a plugin to target img elements with data-srcset attributes and dynamically loads them into the DOM. 


For example:
var srcsets = $(e.currentTarget).find('.item.active img[data-srcset]');
            srcsets.lazyloadsrcset({ speed: 800 }); 
