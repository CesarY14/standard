$(function () {
  var language = location.pathname.split('/')[2];
  var isUsingExtensionsPage = window.location.pathname.indexOf('/extensions/') >= 0;
  var isCommunityPage = window.location.pathname.indexOf('/extensions/community/') >= 0;
  var isSchemaReferencePage = window.location.pathname.indexOf('/schema/reference/') >= 0;
  var blankListEl = '<dl><dt><a class="reference external" href=""></a></dt><dd></dd></dl>';

  if (!isUsingExtensionsPage && !isCommunityPage && !isSchemaReferencePage) {
    return
  }

  // The "Extension" column values must be transformed to links, e.g.
  // "Bid statistics and details::https://github.com/open-contracting/ocds_bid_extension"
  // TODO: Why do we transform the links in JavaScript and not in Sphinx?
  if (isUsingExtensionsPage) {
    // Get the table's data rows, which will only be core extensions.
    $('.extension-selector-table td:nth-child(2)').each (function(){
      var $this = $(this);
      var splitNameDocURL = $this.text().split('::');
      var cellContent = '<a href="' + splitNameDocURL[1] + '">' + splitNameDocURL[0] + '</a>';
      $this.html(cellContent);
    });
  }

  // Schema reference -- extensions 
  if (isSchemaReferencePage) {
    // append an empty list for community part of the section
    $('.extension_list p.last').after('<br><dl class="docutils hide community-list"></dl>');
    $('.extension_list p.last').wrap('<small></small>');
  }

  // Get the community extensions to add to the documentation.
  $.ajax({
    "url": "https://raw.githubusercontent.com/open-contracting/extension_registry/master/build/extensions.json",
    "crossDomain": true,
    "dataType": "json"
  }).done(function (data){
      var extListId, $listElClone;
      var $table =isCommunityPage ? $($('.extension-selector-table')[0]) : $($('.extension-selector-table')[1]);
      var row  = $($table.find('.row-even')).detach();
      var isEven = true;
      var rowClass, $rowClone, extensionLink, extensionLinkText;

      $.each(data.extensions, function (index, extension){
        if (!extension.core) {
          if (isSchemaReferencePage) {
            extListId = '#extensionlist-' + extension.category;
            $listElClone = $(blankListEl);
            $listElClone.find('a').attr('href', extension.documentation_url).text(extension.name[language] || extension.name['en']);
            $listElClone.find('dd').text(extension.description[language] || extension.description['en']);
            $(extListId).find('.community-list').append($listElClone.html()).removeClass('hide');
            $(extListId).find('p.last').removeClass('hide');
          } else {
            rowClass = isEven ? 'row-even' : 'row-odd';
            $rowClone = $(row).clone();
            extensionLinkText = extension.url.split('/').slice(3.6).join('/') + 'extension.json';
            extensionLink = '<a href="' + extension.url + 'extension.json' + '">' + extensionLinkText + '</a>';
            
            $rowClone.find('td a').attr('href', extension.documentation_url);
            $rowClone.find('td a').text(extension.name[language] || extension.name['en']);
            $rowClone.find('td:nth-child(3)').text(extension.description[language] || extension.description['en']);
            $rowClone.find('td:nth-child(4)').text(extension.category);
            $rowClone.find('td:last-child').html(extensionLink);
            
            if (isCommunityPage) {
              var category = $($rowClone.find('td:nth-child(4)').detach()).text();
              $rowClone.find('td:nth-child(2) a').after('<br><em><small>' + category + '<small></em>');
            }
            
            $rowClone.wrap('<tr class="' + rowClass + '"></tr>');
            $table.find('tbody').append($rowClone);
            isEven = !isEven;
          }
        }
      });

      if (isSchemaReferencePage) {
        // Remove empty extension containers in the schema reference page
        $('.extension_list ').each(function(){
          var $this = $(this);
          if (!$this.find('a').attr('href')) {
            $this.remove();
          }
        });
      }

      if (isCommunityPage) {
        $table.removeClass('extension-selector-table');
        $table.find('tr th:first-child').remove();
        $table.find('tr td:first-child').remove();
        $table.find('tr th:nth-child(3)').remove();
        $table.find('tr td:last-child').css('word-break', 'break-all');
      }

      //  Fake checkbox in ExtensionSelectorTable
      $('.extension-selector-table td:first-child').addClass('extension-selector');
      $('.extension-selector-table td:first-child').click(function (){
          var $this = $(this);
          var extensions = $('.highlight-json pre span:nth-child(3)').next().text();
          extensions = JSON.parse(extensions.substring(1, extensions.length-1));
          var url = $this.parent().find('td:last-child a').attr('href');
          console.log(url);
          var url_index = extensions.indexOf(url);

          if ($this.hasClass('extension-selected')) {
            extensions.splice(url_index, 1);
            $this.removeClass('extension-selected')
          } else {
            extensions.push(url);
            $this.addClass('extension-selected')
          }
          $('.highlight-json pre span:nth-child(3)').next().text(':' + JSON.stringify(extensions) + ',');
      });
    });
});
