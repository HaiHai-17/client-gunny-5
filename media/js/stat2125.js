var stat2125 = {version:"1.0",modify:"2011-11-4"};

/**
 * Name  : getUrlParams
 * Usage : Transfer GET params of URI to an object
 * Params:
 * Return: object{key1:value1,key2:value2...}
 */
 
stat2125.getUrlParams = function()
{
  var args = new Object();
  var query = location.search.substring(1);
  var pairs = query.split("&") || '';
  
  if(pairs)
  {
    for(var i = 0; i < pairs.length; i++)
    {
      var pos = pairs[i].indexOf('=');    
      if(pos == -1)   
      {     
        continue;   
      }   
      var argname = pairs[i].substring(0,pos);
      var value = pairs[i].substring(pos + 1);    
      args[argname] = decodeURIComponent(value);
    }
  }
  return args;
  
};

/**
 *  Name  : cookie.set
 *  Usage : Set the cookie of specified expire time,path&domain
 *  Params: @name:cookie name(string)
 *          @value:cookie value(string)
 *          @expires:cookie expires time based on now(intval or string)
 *  Return: undefined
 *
 *  Name  : cookie.get
 *  Usage : Get the cookie based on its name
 *  Params: @name:cookie name(string)
 *  Return: cookie's value based on its name(string)
 */

stat2125.cookie =
{
  set : function( name, value, expires, path, domain )
  {
    var expirestime = new Date();
	expirestime.setDate(expirestime.getDate() + expires);

	document.cookie = name + "=" + encodeURIComponent( value ) +
      ( ( expires ) && "; expires=" + expirestime.toGMTString() || "" ) +
      ( ( path ) && "; path=" + path || "; path=/" ) +
      ( ( domain ) && "; domain=" + domain || "" );
  },
  get : function( name )
  {
    var $_theCookie = document.cookie;
    if( '' == $_theCookie ) return null;
    var $_str="; " + name + "=", $_s = name + "=";
    var $_begin = $_theCookie.indexOf( $_str );
    if( -1 == $_begin ) {
      if( -1 == $_theCookie.indexOf( $_s ) ) return null;
      $_begin = $_theCookie.indexOf( $_s );
    } else {
      $_begin += 2;
    }
    var $_end = $_theCookie.indexOf( ";", $_begin );
    if( -1 == $_end ) $_end = $_theCookie.length;
    return decodeURIComponent( $_theCookie.substring( $_begin + $_s.length, $_end ) );
  }
};

/**
 * Name  : jsLoad
 * Usage : Append a Javascript(or any kind of url) to document.head , in order to run the code in this url.
 * Params: @src: The url which is wanted to reach.
 *         @callback: If there is a callback function wanted to run after the url's loading,you can add its name here.
 * Return: undefined
 */
stat2125.jsLoad = function(src, callback)
{
   var heads = document.getElementsByTagName( 'head' );
   
   if( !heads.length )
   {
       return false;
   }
   
   var head = heads[ 0 ];
   var script = document.createElement( 'script' );
   script.setAttribute( 'src', src );
   script.setAttribute( 'type', 'text/javascript' );
   head.appendChild( script );
   
   script.onreadystatechange = function()
   {
       if( 'complete' == script.readyState || 'loaded' == script.readyState )//IE
       {
           callback && callback();
       }
   };
   
   script.onload = function()
   {
       callback && callback();
   }
};