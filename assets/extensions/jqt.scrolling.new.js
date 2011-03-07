/**
 * 
 * Add support for scrolling horizontally and vertically using jQTouch in Safari Mobile
 *
 * Copyright (c) 2010 Sam Shull <http://samshull.blogspot.com/>
 * Released under MIT license
 * 
 */

(function($)
{
	var undefined,
		window = this,
		verticalDefaults = {
			selector: ".vertical-scroll",
			attributesToOptions: attributesToOptions,
			attributes: {
				slideSpeed: slideSpeed,
				preventDefault: preventDefault,
				startPosition: startPosition
			},
			touchStart: verticalTouchStart,
			touchMove: verticalTouchMove,
			touchEnd: verticalTouchEnd,
		},
		horizontalDefaults = {
			selector: ".horizontal-scroll",
			attributesToOptions: attributesToOptions,
			attributes: {
				slideSpeed: slideSpeed,
				preventDefault: preventDefault,
				startPosition: startPosition
			},
			touchStart: horizontalTouchStart,
			touchMove: horizontalTouchMove,
			touchEnd: horizontalTouchEnd,
		};
	
    if ($.jQTouch)
    {
        $.jQTouch.addExtension(function (jQT){
            
			function binder (e, info)
			{
				var horizontal = info.page.find(horizontalDefaults.selector),
					vertical = info.page.find(verticalDefaults.selector);
				
				horizontal.scrollHorizontally(horizontalDefaults.attributesToOptions(horizontal, horizontalDefaults.attributes));
				vertical.scrollVertically(verticalDefaults.attributesToOptions(vertical, verticalDefaults.attributes));
			}
			
			$(document.body)
				.bind('pageInserted', binder);
			
			$(function()
			{
				$('body > *')
					.each(function()
					{
						binder({}, {page: $(this)});
					});
			});
			
			return {};
        });
	}
	
	/**
	 *
	 *
	 *
	 */
	$.fn.scrollVertically = function (options)
	{
		options = $.extend({}, defaults, options || {});
		
		return this.each(function ()
		{
			VerticalScroll(this, options);
		});
	};
	
	/**
	 *
	 *
	 *
	 */
	$.fn.scrollVertically.defaults = function (options)
	{
		if (options !== undefined)
		{
			verticalDefaults = $.extend(verticalDefaults, options);
		}
		
		return $.extend({}, verticalDefaults);
	};
	
	/**
	 *
	 *
	 *
	 */
	$.fn.scrollHorizontally = function (options)
	{
		options = $.extend({}, defaults, options || {});
		
		return this.each(function ()
		{
			HorizontalScroll(this, options);
		});
	};
	
	/**
	 *
	 *
	 *
	 */
	$.fn.scrollHorizontally.defaults = function (options)
	{
		if (options !== undefined)
		{
			horizontalDefaults = $.extend(horizontalDefaults, options);
		}
		
		return $.extend({}, horizontalDefaults);
	};

	/**
	 *
	 *
	 *
	 */
	function VerticalScroll (element, options)
	{
		
	}
	
	/**
	 *
	 *
	 *
	 */
	function HorizontalScroll (element, options)
	{
		
	}
    
})(jQuery);