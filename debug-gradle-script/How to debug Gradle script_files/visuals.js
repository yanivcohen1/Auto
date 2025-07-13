// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
// Title : Visuals
// Author : Helldesign
// URL : http://helldesign.net
//
// Description : Scripts altering markup to add more visual flavors ;)
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Visuals = {
	
	/*
		INITIALIZES ALL THE MARKUP TRICKS
		Params:
		  oOptions (object) - options. Currently following options are supported:
		    container (string) - CSS selector of an object (or the object itself) that holds all the elements to modify
		    exception (string) - CSS selector of the container whiche should be excluded from all the Visuals operations
		    imgWOffset (number) - Width offset applied to generated img's parent - no subtitles version (so it applies to span.photo-shadow)
		    imgWOffsetS (number) - Width offset applied to generated img's parent - subtitles version (applies to dl.images-box-2) 
		    ieAlpha (boolean) - if true, enables PNG alpha support in IE 5.5 and 6 
 
		Returns:
		  -
	*/
	Init: function( oOptions ) {
		for (var name in oOptions) Visuals[name] = oOptions[name];
		if (!Visuals.imgWOffset) Visuals.imgWOffset = 0;
		if (!Visuals.imgWOffsetS) Visuals.imgWOffsetS = 0;
		if (Visuals.container) {
			Visuals.FixTables();
			Visuals.FixImages();
			Visuals.FixBQ();
			if (Visuals.ieAlpha) Visuals.EnableAlphaImages();
		} else {
			alert('No container specified for Visuals Class. Aborting.');
			return false;
		}
	},
	/*
		MODIFIES ALL THE TABLES WITHIN MCONTAINER TO CREATE SO CALLED "ZEBRA TABLES"
		Params:
		  -
		Returns:
		  -
	*/
	FixTables: function() {
		$('table',$(Visuals.container)).each(function(i){
			$('tr',this).each(function(j){
				if (j>0 && j%2 == 1) $(this).addClass('odd');
			});
			$('tr:first',this).addClass('first-row');
			$('tr:first *:first-child',this).addClass('l');
			$('tr:first *:last-child',this).addClass('r');
			$('tr:last',this).addClass('last-row');
			$('tr:last *:first-child',this).addClass('l');
			$('tr:last *:last-child',this).addClass('r');
		});
	},
	/*
		WRAPS ALL THE IMAGES WITHIN MCONTAINER IN EXTRA MARKUP TO ALLOW DISPLAYING OF IMAGES SUBTITLES
		Params:
		  -
		Returns:
		  -
	*/
	FixImages: function() {
		
		var imgs;
		if (Visuals.exception) {
			imgs = $('img',$(Visuals.container)).not($(Visuals.exception + ' img'));
		} else {
			imgs = $('img',$(Visuals.container));
		}
		
		imgs.each(function(i){
		
			//console.log(this);
			
			// let's collect data needed to properly set image parent's dimensions
			var w = $(this).width();
			var f = $(this).css('float'); // result: 'left', 'right' or 'none'
			var a = $(this).attr('align'); // result: 'left', 'right' or ''
			var ipl = parseInt($(this).css('padding-left')); // result: integer
			var ipr = parseInt($(this).css('padding-right')); // result: integer 
			var ibl = parseInt($(this).css('border-left-width')); // result: integer 
			var ibr = parseInt($(this).css('border-right-width')); // result: integer 
			var parentW = w + ipl + ipr + ibl + ibr;
			
			// now let's check the image alignment
			
			if (f != 'none') { // image is floated
				if (f == 'left') {
					imgalign = 'alignleft';
				} else if (f == 'right') {
					imgalign = 'alignright';
				}
			} else if (a != '') { // aligned via HTML attribute?
				imgalign = 'align'+a;
				$(this).removeAttr('align');
			} else if ($(this).hasClass('alignleft') || $(this).hasClass('alignright') || $(this).hasClass('aligncenter')) { // aligned via classname (new in recent WP)
				if ($(this).hasClass('alignleft')) {
					imgalign = 'alignleft';
				} else if ($(this).hasClass('alignright')) {
					imgalign = 'alignright';
				} else {
					imgalign = 'aligncenter';
				}
			} else {
				imgalign = 'alignnone';
			};
			
			//console.log(imgalign);
			
		});
		
		

	},
	/*
		WRAPS ALL THE BLOCKQUOTES WITHIN MCONTAINER IN EXTRA MARKUP TO ALLOW EXTRA VISUALS
		Params:
		  -
		Returns:
		  -
	*/
	FixBQ: function() {
		$('blockquote',$(Visuals.container)).each(function(i){
			$(this).html('<div>'+$(this).html()+'</div>');
		});
	},
	
	/*
		ENABLES TRANSPARENT PNGS IN SHITTY BROWSERS (IE OF COURSE)
		Params:
		  -
		Returns:
		  -
	*/
	EnableAlphaImages: function () {
		if (navigator.platform == "Win32" && navigator.appName == "Microsoft Internet Explorer" && window.attachEvent) {
			var rslt = navigator.appVersion.match(/MSIE (\d+\.\d+)/, '');
			var itsAllGood = (rslt != null && Number(rslt[1]) >= 5.5 &&  Number(rslt[1]) < 7);
			if (itsAllGood) {
				for (var i=0; i<document.all.length; i++){
					var obj = document.all[i];
					var bg = obj.currentStyle.backgroundImage;
					var img = document.images[i];
					if (bg && bg.match(/\.png/i) != null) {
						var img = bg.substring(5,bg.length-2);
						var offset = obj.style["background-position"];
						obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+img+"', sizingMethod='crop')";
						obj.style.backgroundImage = "url('blank.gif')";
						obj.style["background-position"] = offset; // reapply
					} else if (img && img.src.match(/\.png$/i) != null) {
						var src = img.src;
						if (!Visuals.childOf(img,'post-bookmarks')) {
							img.style.width = img.width + "px";
							img.style.height = img.height + "px";
							img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='crop')"
							img.src = "blank.gif";
						}
					}
				}
			}
		}
	},

	/*
		HELPER FUNCTION - CHECKS IF MCHILD IS A DESCENDANT OF MPARENT 
		Params:
		  mChild (string or object) - descendant element
		  mParent (string or object) - parent element
		Returns:
		  true - if mChild is a descendant of mParent
		  false - otherwise
	*/
	childOf: function(mChild, mParent) {
		var child = $(mChild);
		var parent = $(mParent);
		while(child.tagName != "BODY") {
			if (child.parentNode == parent) return true;
			child = child.parentNode
		}
		return false;
	}
	
}
