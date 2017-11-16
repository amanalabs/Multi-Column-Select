/*
 * jQuery Multi-Column-Select v0.5
 * Copyright (c) 2014 DanSmith
 * Licensed under MIT
 *
 */
(function ($) {

//private functions
    var itemclick = function (selector, itemClass, args) {
        var $itemdata = $(selector).attr('data');
        var $menucontainer = $(selector).parent();
        if ($menucontainer.hasClass('Multi')) {
            if ($(selector).hasClass('active')) {
                //already selected, unselect it
                $(selector).removeClass('active');
                var removeItem = $itemdata; //ID to be removed
                args.splice($.inArray(removeItem, args), 1); //Look up at the ID and remove it
            } else {
                $(selector).addClass('active');
                args.push($itemdata);
            }
            $menucontainer.siblings('select').val(args);
        }

        if (!$menucontainer.hasClass('Multi')) {
            $menucontainer.siblings('select').val($itemdata); //bind form value
            $(selector).siblings('a.' + itemClass).removeClass('active'); //remove all active states
            $(selector).addClass('active'); //add new active state to clicked item
        }

    };


    var init = function(openmenu, opentext, parent, mscClass , isMulti){

        var toggleLink = document.createElement('a');
        var msc = document.createElement('div');


        let toggleClass = 'msc '+openmenu;

        toggleLink.className = mscClass;
        toggleLink.innerHTML = opentext;


        if (isMulti){
            mscClass = 'multi '+mscClass;
        }

        msc.className = mscClass;



        parent.appendChild(toggleLink);
        parent.appendChild(msc);
    };


    var init_msc = function (openmenu, opentext, container, multi, append) {
        var toggle = document.createElement('a');
        var mcscontainer = document.createElement('div');

        $(toggle).addClass(openmenu).addClass('mcs').html(opentext).appendTo(append);

        if (multi === true) {
            $(mcscontainer).addClass('Multi');
        }

        $(mcscontainer).addClass(container).appendTo(append);
    };

    var generateitems = function (selector, useOptionText, idprefix, itemClass, containerClass) {
        var itemtemplate;
        var $optioncount;
        var idtemplate = "";
        var $menucontainer = $(selector).parent();
        $optioncount += 1;
        var settext = '';
        if (useOptionText === true) {
            settext = $(selector).text();
        }

        if (idprefix !== null) {
            idtemplate = "' id='" + idprefix + $optioncount;
        }
        itemtemplate = "<a class='" + itemClass + "' data='" + $(selector).attr('value') + idtemplate + "'>" + settext + "</a>";
        $menucontainer.siblings('.' + containerClass).append(itemtemplate);
    };

    var destroymsc = function (selector) {
        var $mcs = selector.find('select');
        $mcs.show();            // Shows the Select control if it was hidden;
        if ($mcs.next().hasClass('mcs'))
        {
            $mcs.next().remove();   // Remove the generated open/close toggle
            $mcs.next().remove();   // Remove the generated items
        }
    };

    $.fn.MultiColumnSelect = function (options) {
        var args = [];
        var selected = [];
        var $optioncount;

        $optioncount = 0;

        var settings = $.extend({
            multiple: false, // Single or Multiple Select- Default Single
            useOptionText: true, // Use text from option. Default true, use false if you plan to use images
            hideselect: true, // Hide Original Select Control
            openmenuClass: 'mcs-open', // Toggle Open Button Class
            openmenuText: 'Choose An Option', // Text for button
            openclass: 'open', // Class added to Toggle button on open
            containerClass: 'mcs-container', // Class of parent container
            itemClass: 'mcs-item', // Class of menu items
            idprefix: null, // Assign as ID to items eg 'item-' = #item-1, #item-2, #item-3...
            duration: 200, //Toggle Height duration
            onOpen: null,
            onClose: null,
            onItemSelect: null
        }, options);

        this.find('select').val(0);

        if (settings.hideselect === true)
        {
            this.find('select').hide();
        } else {
            this.find('select').show();
        }

        init_msc(settings.openmenuClass, settings.openmenuText, settings.containerClass, settings.multiple, this); //create the wrapper

        this.find('select option').each(function () //get elements in dropdown
        {

            if ($(this).attr('selected')){

                generateitems(this, settings.useOptionText, settings.idprefix, [settings.itemClass + ' selected'], settings.containerClass);


                var $select = $('.selected').parent().prev().prev();
                if ($select.val() !== null) {
                    args.push($select.val());
                }
                itemclick($('.selected'), settings.itemClass, args);
                $('.selected').toggleClass('selected');



            }else{
                generateitems(this, settings.useOptionText, settings.idprefix, settings.itemClass, settings.containerClass);

            }
        });

        this.on('click', '.' + settings.itemClass, function (e)    //on menu item click
        {
            var $select = $(this).parent().prev().prev();
            if ($select.val() !== null) {
                args.push($select.val());
            }
            itemclick(this, settings.itemClass, args);
            if ($.isFunction(settings.onItemSelect)) {
                settings.onItemSelect.call(this);// Select item :: callback
            }
            e.preventDefault();
        });

        this.find('.' + settings.openmenuClass).on('click', function (e)
        {
            var $menucontainer = $(this).next();
            if ($(this).hasClass(settings.openclass)) {
                $(this).removeClass(settings.openclass);
                $menucontainer.slideToggle("slow", function () {
                    // Close Animation complete :: callback
                    if ($.isFunction(settings.onClose)) {
                        settings.onClose.call(this);
                    }
                });
            } else {
                $(this).addClass(settings.openclass);
                //Set the height of the container
                $menucontainer.slideToggle("slow", function () {
                    // Open Animation complete :: callback
                    if ($.isFunction(settings.onOpen)) {
                        settings.onOpen.call(this);
                    }
                });
            }
            e.preventDefault();
        });
        return this;
    };




}(jQuery));