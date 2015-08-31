var app=angular.module('ShoppingCart',[]);

app.controller('ItemsListController',function()
{
    this.items=items;
});
         


var items=
    
 [   
    {name:'pen',
    price:10,
    availablecolors:21,
     preview:{picture:'/www/img/item.png'},
    avl:true
    },
    
    {name:'pencil',
    price:14,   
    availablecolors:2,
      preview:{picture:'/www/img/item.png'},
    avl:false},
    
    {name:'duster',
    price:100,
    availablecolors:89,
      preview:{picture:'/www/img/item.png'},
    avl:true },
    
    {name:'chalk',
    price:8,
    availablecolors:20,
      preview:{picture:'/www/img/item.png'},
    avl:true}
]
    
               